import React from 'react';
import BlueButton from '../../Components/BlueButton';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

const pages = [{
    link: "/enterinfo",
    name: "Enter match info"
}, {
    link: "/enterpitscouting",
    name: "Enter pit scouting info"
}, {
    link: "/stats",
    name: "See statstics by team"
}, {
    link: "/allstats",
    name: "See all team statistics"
}];

const MainPage = ({ currentUser }) => {
    return <>
        <h1>FRC 2090 Scouting App</h1>
        <h2>Welcome, {currentUser.displayName}</h2>
        {
            pages.map((page, i) => {
                return <div key={"pageButton" + i}>
                    <Link to={page.link}>
                        <BlueButton style={{ marginTop: 10 }}>
                            {page.name}
                        </BlueButton>
                    </Link>
                </div>
            })
        }
        <hr />
        <BlueButton style={{ marginTop: 10 }} onClick={() => {
            firebase.auth().signOut();
        }}>Sign out</BlueButton>
    </>
}

export default MainPage