import React from 'react';
import { dropScores } from '../GetDataObjects/GetDataObjects';
import MatchScoreChart from '../Charts/MatchScoreChart/MatchScoreChart';
import { Grid, Row, Col } from 'react-flexbox-grid';

const DropCounts = ({ matchData }) => {
    let { cargoDropped, hatchesDropped } = dropScores(matchData);
    return <>
        <Grid>
            <Row>
                <Col md={6}>
                    <h3>Cargo</h3>
                    <MatchScoreChart data={cargoDropped} />
                </Col>
                <Col md={6}>
                    <h3>Hatches</h3>
                    <MatchScoreChart data={hatchesDropped} />
                </Col>
            </Row>
        </Grid>

    </>
}

export default DropCounts;