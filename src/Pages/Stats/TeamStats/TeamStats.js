import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import AddImage from './AddImage/AddImage';
import Spacer from '../../../Components/Spacer';

const TeamStats = ({ teamData, selectedTeam }) => {
    if (selectedTeam === 0) {
        return <><h2>Please select a team to view data about them</h2></>
    }

    let items;
    if (teamData) {
        items = teamData.images || {};
    } else {
        items = {};
    }

    let areImages = false;
    if (Object.keys(items).length > 0) {
        items = Object.keys(items).map(item => {
            return { ...items[item], caption: '', header: '' }
        });
        areImages = true;
    }
    return <>
        <h2>Viewing data about Team {selectedTeam}</h2>

        <h3>Pictures</h3>
        {areImages ? <div className="carouselOut" style={{ width: window.innerWidth < 700 ? '100%' : '50%', margin: 'auto' }}>
            <UncontrolledCarousel items={items} autoPlay={false} interval={false} />
        </div> : <div>There are no pictures for this team</div>}

        <div><AddImage {...{ selectedTeam }} /></div>
        <Spacer space={10} />

    </>
}

export default TeamStats;