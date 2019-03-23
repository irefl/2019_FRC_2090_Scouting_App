import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Observations = ({ matchData }) => {
    return <>
        <Grid>
            <Row>
                {matchData.map((match, i) => {
                    return <Col>
                        <div style={{
                            margin: 10,
                            backgroundColor: '#efefef',
                            border: "2px solid #20508B",
                            borderRadius: 4,
                            padding: 5
                        }}>
                            <span style={{
                                fontWeight: 'bold'
                            }}>{match.whoAdded}: </span>
                            {match.observations}
                        </div>
                    </Col>
                })}
            </Row>
        </Grid>
    </>
}

export default Observations;