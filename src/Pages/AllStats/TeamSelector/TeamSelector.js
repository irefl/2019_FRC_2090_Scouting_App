import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Teams } from '../../../Assets/Teams/Teams';

const TeamSelector = ({ teamsToInclude, setTeamsToInclude }) => {
    return <>
        <Grid>
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