import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Teams, TeamsInit, TeamsInitF } from '../../../Assets/Teams/Teams';
import BlueButton from '../../../Components/BlueButton';

const TeamSelector = ({ teamsToInclude, setTeamsToInclude, sortByBest, setSortByBest }) => {
    return <>
        <Grid>
            <Row>
                <Col><BlueButton style={{ margin: 10 }} onClick={() => {
                    setTeamsToInclude(TeamsInit);
                }}>Select all</BlueButton></Col>
                <Col><BlueButton style={{ margin: 10 }} onClick={() => {
                    setTeamsToInclude(TeamsInitF);
                }}>Deselect all</BlueButton></Col>
                <Col><div style={{ width: 2, height: '80%', backgroundColor: "#20508b" }}></div></Col>
                <Col><BlueButton style={{ margin: 10 }} onClick={() => {
                    setSortByBest(true);
                }} disabled={sortByBest}>Sort by best</BlueButton></Col>
                <Col><BlueButton style={{ margin: 10 }} onClick={() => {
                    setSortByBest(false);
                }} disabled={!sortByBest}>Sort by team</BlueButton></Col>
            </Row>
            <Row>
                {Teams.map(team => {
                    return <Col xs={3} md={3} lg={1} key={team}>
                        <div style={{
                            border: "2px solid #20508B",
                            borderRadius: 5,
                            padding: 3,
                            marginBottom: 5,
                            backgroundColor: "#efefef",
                            userSelect: "none",
                            cursor: "pointer",
                            opacity: teamsToInclude[team] ? 1 : 0.2,
                            textAlign: 'center'
                        }} onClick={() => {
                            let setTeams = { ...teamsToInclude };
                            setTeams[team] = !setTeams[team];
                            setTeamsToInclude(setTeams);
                        }}>
                            {team}
                        </div>
                    </Col>
                })}
            </Row>
        </Grid>
    </>
}

export default TeamSelector;