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
import {Input} from 'reactstrap';
import {isEqual} from 'lodash';

const AllStats = ({ currentUser }) => {
    const [info, setCalculatedInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [teamsToInclude, setTeamsToInclude] = useState(TeamsInit);
    const [sortByBest, setSortByBest] = useState(false);
    const [highlightedTeams, setHighlightedTeams] = useState({});
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
    let cargoDropData = [];
    let lowestCargoDropCount = ["Nobody", Infinity];
    let hatchDropData = [];
    let lowestHatchDropCount = ["Nobody", Infinity];
    let habBonuses = [];
    let highestHabBonus = ["Nobody", 0];

    teamsArr.forEach(team => {
        let cargoScoreCurr = info.cargoScores[team];
        let hatchScoreCurr = info.hatchScores[team];
        let overallScoreCurr = info.overallScores[team];
        let autonScoreCurr = info.autonScores[team];
        let rocketOverallCurr = info.rocketOverallScores[team];
        let cargoShipOverallCurr = info.cargoShipOverallScores[team];
        let cargoDropCurr = info.cargoDropCounts[team];
        let hatchDropCurr = info.hatchDropCounts[team];
        let habBonusCurr = info.habBonuses[team];

        if (habBonusCurr || habBonusCurr === 0) {
            habBonuses.push({
                name: team,
                score: habBonusCurr
            });
            if (habBonusCurr > highestHabBonus[1]) {
                highestHabBonus = [team, habBonusCurr];
            }
        }

        if (cargoDropCurr || cargoDropCurr === 0) {
            cargoDropData.push({
                name: team,
                count: cargoDropCurr
            });
            if (cargoDropCurr < lowestCargoDropCount[1]) {
                lowestCargoDropCount = [team, cargoDropCurr];
            }
        }

        if (hatchDropCurr || hatchDropCurr === 0) {
            hatchDropData.push({
                name: team,
                count: hatchDropCurr
            });
            if (hatchDropCurr < lowestHatchDropCount[1]) {
                lowestHatchDropCount = [team, hatchDropCurr];
            }
        }

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
        });

        cargoDropData = cargoDropData.sort((a, b) => {
            return a.count - b.count;
        });

        hatchDropData = hatchDropData.sort((a, b) => {
            return a.count - b.count;
        });

        habBonuses = habBonuses.sort((a, b) => {
            return b.score - a.score;
        })
    }
    return <>
        <Link to="/"><BlueButton>Back</BlueButton></Link>
        <hr />
        <h1>View all stats</h1>

        <h2>Click on a team to hide/show them</h2>
        <TeamSelector {...{ teamsToInclude, setTeamsToInclude, sortByBest, setSortByBest }} />
        <h3>Enter a comma separated list of teams to highlight them</h3>
        <Input placeholder={"Enter team numbers, eg: 359,2090"} onChange={
            (e) => {
                if (e.target.value !== "") {
                    let newThing = {}
                    e.target.value.split(",").forEach(team => {
                        let tToN = Number(team);
                        if(TeamsInit[tToN]) {
                            newThing[tToN] = true;
                        }
                    });
                    if (!isEqual(newThing, highlightedTeams)) {
                        setHighlightedTeams(newThing);
                    }
                }
            }
        }/>
        <Grid>
            <Row>
                <Col md={6} sm={12} xs={12}>
                    {info && info.cargoScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2>Average cargo scores</h2>
                            <h3>Higher is better (current highest: {currHighestCargoAvg[0]})</h3>
                        </div>
                        <GeneralBarChart {...{highlightedTeams}} data={avgCargoScoreData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.hatchScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Average hatch scores</h2>
                            <h3>Higher is better (current highest: {currHighestHatchAvg[0]})</h3>
                        </div>
                        <GeneralBarChart {...{highlightedTeams}} data={avgHatchScoreData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.overallScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Average combined hatch + cargo</h2>
                            <h3>Higher is better (current highest: {highestOverallScore[0]})</h3>
                        </div>
                        <GeneralBarChart {...{highlightedTeams}} data={overallBothScoreData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.autonScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Average auton performance</h2>
                            <h3>Higher is better (current highest: {highestAutonScore[0]})</h3>
                        </div>
                        <GeneralBarChart {...{highlightedTeams}} data={autonScoreData} dataKey={"score"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.rocketOverallScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Rocket performance</h2>
                            <h3>Higher is better (current highest: {highestRocketScore[0]})</h3>
                        </div>
                        <GeneralBarChart {...{highlightedTeams}} data={rocketScoreData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.cargoShipOverallScores && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Cargo ship performance</h2>
                            <h3>Higher is better (current highest: {highestCargoScore[0]})</h3>
                        </div>
                        <GeneralBarChart {...{highlightedTeams}} data={cargoScoreData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.cargoDropCounts && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Cargo drop averages</h2>
                            <h3>Lower is better (current lowest: {lowestCargoDropCount[0]})</h3>
                        </div>
                        <GeneralBarChart {...{highlightedTeams}} data={cargoDropData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.hatchDropCounts && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Hatch drop averages</h2>
                            <h3>Lower is better (current lowest: {lowestHatchDropCount[0]})</h3>
                        </div>
                        <GeneralBarChart {...{highlightedTeams}} data={hatchDropData} dataKey={"count"} />
                    </>}
                </Col>
                <Col md={6} sm={12} xs={12}>
                    {info && info.habBonuses && <>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>Hab Bonus Level Avgs</h2>
                            <h3>Higher is better (current highest: {highestHabBonus[0]})</h3>
                        </div>
                        <GeneralBarChart {...{highlightedTeams}} data={habBonuses} dataKey={"score"} />
                    </>}
                </Col>
            </Row>
        </Grid>


        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default AllStats;
