import React from 'react';
import Matches from './Matches';
import {Link} from 'react-router-dom';
import BlueButton from '../../Components/BlueButton';
import {Table} from 'reactstrap';
import "./Matches.css";
import { TeamsMapping } from '../../Assets/Teams/Teams';

const MatchSchedule = () => {
    let orderedMatches = Object.keys(Matches).sort((a,b) => {
        return Number(a) - Number(b);
    });


    return <>
        <Link to="/"><BlueButton>Back</BlueButton></Link>
        <h1>Match schedule</h1>
        <h3>Click on a team to go to their info page</h3>
        <Table bordered size="sm" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th className="blue">Blue 1</th>
                    <th className="blue">Blue 2</th>
                    <th className="blue">Blue 3</th>
                    <th className="red">Red 1</th>
                    <th className="red">Red 2</th>
                    <th className="red">Red 3</th>
                </tr>
            </thead>
            <tbody>
                {orderedMatches.map(match => {
                    return <tr key={match}>
                        <th>{match}</th>
                        {Matches[match].blueTeams.map(blueTeam => {
                            return <td key={"bl-"+match+blueTeam} className={blueTeam === 2090 ? "punahou" :"blue"}><Link to={`/stats/${blueTeam}`}><strong>{blueTeam}</strong> - {TeamsMapping[blueTeam]}</Link></td>
                        })}
                        {Matches[match].redTeams.map(redTeam => {
                            return <td key={"bl-"+match+redTeam} className={redTeam === 2090 ? "punahou" : "red"}><Link to={`/stats/${redTeam}`}><strong>{redTeam}</strong> - {TeamsMapping[redTeam]}</Link></td>
                        })}
                    </tr>   
                })}
            </tbody>
        </Table>
        

        <hr />
        <Link to="/"><BlueButton>Back</BlueButton></Link>
    </>
}

export default MatchSchedule;