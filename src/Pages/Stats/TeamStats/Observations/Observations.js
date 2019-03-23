import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Observations = ({ matchData }) => {
    return <>
        <h3>Click to go to TBA page for that match</h3>
        <Grid>
            <Row>
                {matchData.map((match, i) => {
                    return <Col md={3} key={"obs" + i}>
                        <a href={`https://www.thebluealliance.com/match/2019hiho_qm${match.matchNumber}`}>
                            <div style={{
                                margin: 10,
                                backgroundColor: '#efefef',
                                border: "2px solid #20508B",
                                borderRadius: 4,
                                padding: 5,
                                textAlign: 'left'
                            }}>
                                <div style={{
                                    color: "#20508B",
                                    fontWeight: 'bold'
                                }}>Match {match.matchNumber}</div>
                                <span style={{
                                    fontWeight: 'bold'
                                }}>{match.whoAdded}: </span>
                                {match.observations}
                            </div>
                        </a>
                    </Col>
                })}
            </Row>
        </Grid>
    </>
}

export default Observations;