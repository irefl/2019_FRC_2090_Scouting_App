import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import AddImage from './AddImage/AddImage';
import Spacer from '../../../Components/Spacer';
import ShowHatchData from './ShowHatchData/ShowHatchData';
import ShowCargoData from './ShowCargoData/ShowCargoData';
import ShowTotalScores from './ShowTotalScores/ShowTotalScores';
import ShowNearRocketScoring from './ShowNearRocketScoring/ShowNearRocketScoring';
import ShowFarRocketScoring from './ShowFarRocketScoring/ShowFarRocketScoring';
import CargoComfort from './CargoComfort/CargoComfort';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ShowClimbs from './ShowClimbs/ShowClimbs';
import AutoPerformance from './AutoPerformance/AutoPerformance';
import Observations from './Observations/Observations';
import DropCounts from './DropCounts/DropCounts';
import PickupHatchPerformance from './PickupHatchPerformance/PickupHatchPerformance';

const TeamStats = ({ teamData, selectedTeam, currentUser }) => {
    if (selectedTeam === 0) {
        return <><h2>Please select a team to view data about them</h2></>
    }

    let items;
    let matchData;
    if (teamData) {
        items = teamData.images || {};
        matchData = teamData.match_data || {};
    } else {
        items = {};
        matchData = {};
    }

    let areImages = false;
    if (Object.keys(items).length > 0) {
        items = Object.keys(items).map(item => {
            return { ...items[item], caption: '', header: '' }
        });
        areImages = true;
    }

    matchData = Object.keys(matchData).map(match => {
        return {
            matchNumber: Number(match),
            ...matchData[match]
        };
    })

    matchData = matchData.sort((a, b) => {
        return a.matchNumber - b.matchNumber;
    });


    return <>
        <h2>Viewing data about Team {selectedTeam}</h2>

        <h3>Pictures</h3>
        {areImages ? <div className="carouselOut" style={{ width: window.innerWidth < 700 ? '100%' : '50%', margin: 'auto' }}>
            <UncontrolledCarousel items={items} autoPlay={false} interval={false} />
        </div> : <div>There are no pictures for this team</div>}

        <div><AddImage {...{ selectedTeam }} /></div>
        <Spacer space={10} />

        <div><PickupHatchPerformance selectedTeam={selectedTeam} pickupHatchPerformance={teamData.pickupHatchPerformance} currentUser={currentUser}/></div>

        {/* <div><PickupHatchPerformance pickupHatchPerformance = teamData.pickupHatchPerformance, currentUser /></div> */}

        {matchData.length > 0 ? <>
            <div style={{ margin: 'auto', textAlign: 'center' }}>
                {/* See chart of total scores */}
                <ShowTotalScores {...{ matchData }} />
                <hr />
                <Grid>
                    <Row>
                        <Col md={6}>
                            <h2>Hatch vs Cargo (which does the team prefer more?)</h2>
                            {/* See chart of hatch on rockets and cargo ship per match */}
                            <ShowHatchData {...{ matchData }} />
                            {/* See chart of cargo on rockets and cargo ship per match */}
                            <ShowCargoData {...{ matchData }} />
                        </Col>
                        {/* Show scoring on near and rocket */}
                        <Col md={6}>
                            <h2>Left vs Right Rocket (relative to the team, which does the team prefer more?)</h2>
                            {/** For sake of not renaming files, Near is Left, Far is right. */}
                            <ShowNearRocketScoring {...{ matchData }} />
                            <ShowFarRocketScoring {...{ matchData }} />
                        </Col>
                    </Row>
                </Grid>
                <hr />
                <h2>Cargo vs Hatch drop count (how well are they at handling them?)</h2>
                <DropCounts {...{ matchData }} />
                <hr />
                <h2>Cargo ship scores (which side is the team comfortable with?)</h2>
                <CargoComfort {...{ matchData }} />
                <hr />

                <Grid>
                    <Row>
                        <Col md={6}>
                            {/* Climbing levels */}
                            <h2>Climb level for each match (are they consistent?)</h2>
                            <ShowClimbs {...{ matchData }} />
                        </Col>
                        <Col md={6}>
                            <h2>Autonomous performance</h2>
                            <AutoPerformance {...{ matchData }} />
                        </Col>
                    </Row>
                </Grid>
                <hr />
                <h2>Observations</h2>
                <Observations {...{ matchData }} />
                {/* Scroll through all previous matches */}
            </div>
        </> : <>There is no match data for this team.</>}
    </>
}

export default TeamStats;