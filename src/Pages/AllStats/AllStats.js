import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlueButton from '../../Components/BlueButton';
import firebase from 'firebase/app';
import 'firebase/database';
import LoadingSpinner from '../../Components/LoadingSpinner';
import { TeamsInit } from '../../Assets/Teams/Teams';
import TeamSelector from './TeamSelector/TeamSelector';
import DataCalculator from './DataCalculator/DataCalculator';
import GeneralBarChart from './GeneralBarChart/GeneralBarChart';
import { Grid, Row, Col } from 'react-flexbox-grid';

const AllStats = ({ currentUser }) => {
    const [info, setCalculatedInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [teamsToInclude, setTeamsToInclude] = useState(TeamsInit);
    const [sortByBest, setSortByBest] = useState(false)
    useEffect(() => {
        const dataRef = firebase.database().ref("2019data");
        dataRef.on('value', (snap) => {
            let value = snap.val() || null;
            let calculatedInfo = DataCalculator(value)
            setCalculatedInfo(calculatedInfo);
            setLoading(false);
        });


        return () => { dataRef.off(); }
    }, [])

    if (loading) {
        return <>
            <LoadingSpinner />
            <Link to="/"><BlueButton>Back</BlueButton></Link>
        </>
    }

    // Get the teams to show
    let teamsArr = [];
    Object.keys(teamsToInclude).forEach(team => {
        if (teamsToInclude[team]) {
            teamsArr.push(team);
        }
    });
    teamsArr = teamsArr.map(d => Number(d));
    teamsArr = teamsArr.sort((a, b) => a - b);

    // Convert to objects used in the bar charts
    let avgCargoScoreData = [];
    let currHighestCargoAvg = ["Nobody", 0];
    let avgHatchScoreData = [];
    let currHighestHatchAvg = ["Nobody", 0];
    let overallBothScoreData = [];
    let highestOverallScore = ["Nobody", 0];
    let autonScoreData = [];
    let highestAutonScore = ["Nobody", 0];
    let rocketScoreData = [];
    let highestRocketScore = ["Nobody", 0];
    let cargoScoreData = [];
    let highestCargoScore = ["Nobody", 0];

    teamsArr.forEach(team => {
        let cargoScoreCurr = info.cargoScores[team];
        let hatchScoreCurr = info.hatchScores[team];
        let overallScoreCurr = info.overallScores[team];
        let autonScoreCurr = info.autonScores[team];
        let rocketOverallCurr = info.rocketOverallScores[team];
        let cargoShipOverallCurr = info.cargoShipOverallScores[team];

        if (rocketOverallCurr || rocketOverallCurr === 0) {
            rocketScoreData.push({
                name: team,
                count: rocketOverallCurr
            });
            if (rocketOverallCurr > highestRocketScore[1]) {
                highestRocketScore = [team, rocketOverallCurr];
            }
        }

        if (cargoShipOverallCurr || cargoShipOverallCurr === 0) {
            cargoScoreData.push({
                name: team,
                count: cargoShipOverallCurr
            });
            if (cargoShipOverallCurr > highestCargoScore[1]) {
                highestCargoScore = [team, cargoShipOverallCurr];
            }
        }


        if (autonScoreCurr || autonScoreCurr === 0) {
            autonScoreData.push({
                name: team,
                score: autonScoreCurr
            });
            if (autonScoreCurr > highestAutonScore[1]) {
                highestAutonScore = [team, autonScoreCurr];
            }
        }

        if (overallScoreCurr || overallScoreCurr === 0) {
            overallBothScoreData.push({
                name: team,
                count: overallScoreCurr
            });
            if (overallScoreCurr > highestOverallScore[1]) {
                highestOverallScore = [team, overallScoreCurr];
            }
        }

        if (cargoScoreCurr || cargoScoreCurr === 0) {
            avgCargoScoreData.push({
                name: team,
                count: cargoScoreCurr
            });
            if (cargoScoreCurr > currHighestCargoAvg[1]) {
                currHighestCargoAvg = [team, cargoScoreCurr];
            }
        }

        if (hatchScoreCurr || hatchScoreCurr === 0) {
            avgHatchScoreData.push({
                name: team,
                count: hatchScoreCurr
            });
            if (hatchScoreCurr > currHighestHatchAvg[1]) {
                currHighestHatchAvg = [team, hatchScoreCurr];
            }
        }
    });

    if (sortByBest) {
        avgCargoScoreData = avgCargoScoreData.sort((a, b) => {
            return b.count - a.count;
        });

        avgHatchScoreData = avgHatchScoreData.sort((a, b) => {
            return b.count - a.count;
        });

        overallBothScoreData = overallBothScoreData.sort((a, b) => {
            return b.count - a.count;
        });

        autonScoreData = autonScoreData.sort((a, b) => {
            return b.score - a.score;
        });

        rocketScoreData = rocketScoreData.sort((a, b) => {
            return b.count - a.count;
        });

        cargoScoreData = cargoScoreData.sort((a, b) => {
            return b.count - a.count;
        })
    }

    return <>
        <Link to="/"><BlueButton>Back</BlueButton></Link>
        <hr />
        <h1>View all stats</h1>

        <h2>Click on a team to hide them</h2>
        <TeamSelector {...{ teamsToInclude, setTeamsToInclude, sortByBest, setSortByBest }} />

        <Grid>
            <Row>
                <Col md={6} sm={12} xs={12}>
                    {info && info.cargoScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2>Average cargo scores</h2>
                            <h3>Higher is better (current highest: {currHighestCargoAvg[0]})</h3>
                        </div>
                        <GeneralBarChart data={avgCargoScoreData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.hatchScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Average hatch scores</h2>
                            <h3>Higher is better (current highest: {currHighestHatchAvg[0]})</h3>
                        </div>
                        <GeneralBarChart data={avgHatchScoreData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.overallScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Average combined hatch + cargo</h2>
                            <h3>Higher is better (current highest: {highestOverallScore[0]})</h3>
                        </div>
                        <GeneralBarChart data={overallBothScoreData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.autonScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Average auton performance</h2>
                            <h3>Higher is better (current highest: {highestAutonScore[0]})</h3>
                        </div>
                        <GeneralBarChart data={autonScoreData} dataKey={"score"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.rocketOverallScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Rocket performance</h2>
                            <h3>Higher is better (current highest: {highestRocketScore[0]})</h3>
                        </div>
                        <GeneralBarChart data={rocketScoreData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.cargoShipOverallScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Cargo ship performance</h2>
                            <h3>Higher is better (current highest: {highestCargoScore[0]})</h3>
                        </div>
                        <GeneralBarChart data={cargoScoreData} dataKey={"count"} />
                    </>}
                </Col>
            </Row>
        </Grid>




        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default AllStats;
