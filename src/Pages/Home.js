import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import LoadingSpinner from '../Components/LoadingSpinner';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import BlueButton from '../Components/BlueButton';
import MainPage from './MainPage/MainPage';
import EnterInfo from './EnterInfo/EnterInfo';
import Stats from './Stats/Stats';
import AllStats from './AllStats/AllStats';
import PitInfo from './PitInfo/PitInfo';

const Home = ({ currentUser }) => {
    const [canSee, setCanSee] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const canSeeRef = firebase.database().ref("canSee");
        canSeeRef.on('value', (snap) => {
            let value = snap.val() || false;
            setCanSee(value);
            setLoading(false);
        });

        return () => { canSeeRef.off(); };
    }, []);

    if (loading) {
        return <>
            <LoadingSpinner />
            <div>If you see this spinner for a while it means you do not have access to the page</div>
            <BlueButton style={{ marginTop: 10 }} onClick={() => {
                firebase.auth().signOut();
            }}>Sign out</BlueButton>
        </>
    }

    return <>
        {canSee &&
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => <MainPage currentUser={currentUser} />} />
                        <Route path="/enterinfo" component={() => <EnterInfo currentUser={currentUser} />} />
                        <Route path="/enterpitscouting" component={() => <PitInfo currentUser={currentUser} />} /> 
                        <Route path="/stats" component={(r) => <Stats currentUser={currentUser} />} />
                        <Route path="/allstats" component={() => <AllStats currentUser={currentUser} />} />
                        <Route component={() => <div>This page does not exist</div>} />
                    </Switch>
                </Router>
            </>
        }

        {!canSee &&
            <>
                <div>You are not authorized to see this page.</div>
                <BlueButton style={{ marginTop: 10 }} onClick={() => {
                    firebase.auth().signOut();
                }}>Sign out</BlueButton>
            </>
        }


    </>
}

export default Home;