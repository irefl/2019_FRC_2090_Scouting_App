import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const Home = () => {
    const [data, setData] = useState("")

    useEffect(() => {
        const dataRef = firebase.database().ref("abc");
        dataRef.on('value', (snap) => {
            let value = snap.val() || {};
            setData(value);
        });

        return () => { dataRef.off() };
    }, []);

    return <>
        {data}

        <button onClick={() => {
            firebase.auth().signOut();
        }}></button>
    </>
}

export default Home;