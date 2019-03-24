import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';


const SubmissionCount = ({ matchNumber }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);;

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
        </>
    }

    let count = 0;
    let teams = [];
    Object.keys(data).forEach(team => {
        let teamMatchData = data[team].match_data || {};
        if (teamMatchData[matchNumber]) {
            count++;
            teams.push(team);
        }
    });

    teams = teams.map(d => Number(d));
    teams = teams.sort();

    return <>
        <div>
            There have been {count}/6 submissions for this match so far
        </div>
        <div>
            <span style={{ fontWeight: 'bold', color: '#20508B' }}>Teams submitted:</span> {teams.join(", ")}
        </div>
    </>
}

export default SubmissionCount;
