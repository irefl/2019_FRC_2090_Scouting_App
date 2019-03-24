import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlueButton from '../../Components/BlueButton';
import firebase from 'firebase/app';
import 'firebase/database';
import LoadingSpinner from '../../Components/LoadingSpinner';
import TeamStats from './TeamStats/TeamStats';
import TeamPicker from '../../Components/TeamPicker/TeamPicker';
import Spacer from '../../Components/Spacer';

const Stats = ({ currentUser }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);;
    const [selectedTeam, setSelectedTeam] = useState(0);

    useEffect(() => {
        const dataRef = firebase.database().ref("2019data");
        dataRef.on('value', (snap) => {
            let value = snap.val() || null;
            setData(value);
            setLoading(false);
        });

        return () => { dataRef.off(); }
    }, [])

    if (loading) {
        return <>
            <LoadingSpinner />
            <Link to="/"><BlueButton>Back</BlueButton></Link>
        </>
    }

    return <>
        <Link to="/"><BlueButton>Back</BlueButton></Link>
        <hr />
        <h1>View team stats</h1>

        <TeamPicker {...{ allData: data, selectedTeam, setSelectedTeam }} />
        <Spacer space={10} />
        <TeamStats {...{ teamData: data ? data[selectedTeam] : {}, selectedTeam }} />

        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default Stats;
