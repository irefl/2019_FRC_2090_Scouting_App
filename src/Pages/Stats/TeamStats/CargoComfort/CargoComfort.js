import React from 'react';
import { cargocomfortScores } from '../GetDataObjects/GetDataObjects';
import MatchScoreChart from '../Charts/MatchScoreChart/MatchScoreChart';
import { Grid, Row, Col } from 'react-flexbox-grid';

const CargoComfort = ({ matchData }) => {
    // let data = cargoScores(matchData);
    let { nearLeft, farLeft, nearRight, farRight } = cargocomfortScores(matchData);
    return <>
        <Grid>
            <Row>
                <Col md={6}>
                    <h3>Near side when on left</h3>
                    <MatchScoreChart data={nearLeft} />
                    <h3>Far side when on left</h3>
                    <MatchScoreChart data={farLeft} />
                </Col>
                <Col md={6}>
                    <h3>Near side when on right</h3>
                    <MatchScoreChart data={nearRight} />
                    <h3>Far side when on right</h3>
                    <MatchScoreChart data={farRight} />
                </Col>
            </Row>
        </Grid>

    </>
}

export default CargoComfort;