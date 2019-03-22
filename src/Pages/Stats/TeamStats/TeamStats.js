import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import AddImage from './AddImage/AddImage';

const TeamStats = ({ teamData, selectedTeam }) => {
    if (selectedTeam === 0) {
        return <><h2>Please select a team to view data about them</h2></>
    }

    let items;
    if (teamData) {
        items = teamData.images || [];
    } else {
        items = [];
    }

    if (items.length > 0) {
        items = items.map(item => {
            return { ...item, caption: '', header: '' }
        });
    }
    return <>
        <h2>Viewing data about Team {selectedTeam}</h2>

        <h3>Pictures</h3>
        {items.length > 0 ? <div className="carouselOut" style={{ width: window.innerWidth < 700 ? '100%' : '50%', margin: 'auto' }}>
            <UncontrolledCarousel items={items} autoplay={false} />
        </div> : <div>There are no pictures for this team</div>}

        <div><AddImage {...{ selectedTeam, imageCount: items.length }} /></div>

    </>
}

export default TeamStats;