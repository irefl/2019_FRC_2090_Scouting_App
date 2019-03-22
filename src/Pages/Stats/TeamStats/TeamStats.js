import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const TeamStats = ({ teamData, selectedTeam }) => {
    if (selectedTeam === 0) {
        return <><h2>Please select a team to view data about them</h2></>
    }

    let items = teamData.images || [];
    if (items.length > 0) {
        items = items.map(item => {
            return { ...item, caption: '', header: '' }
        });
    }
    return <>
        <h2>Viewing data about Team {selectedTeam}</h2>
        <div className="carouselOut" style={{ width: window.innerWidth < 700 ? '100%' : '50%', margin: 'auto' }}>
            <UncontrolledCarousel items={items} />
        </div>
    </>
}

export default TeamStats;