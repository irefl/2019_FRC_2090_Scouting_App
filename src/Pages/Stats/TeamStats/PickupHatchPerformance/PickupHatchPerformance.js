import React, {useState} from 'react';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import PickupHatchConstants, { PickupHatchConstantsMapping } from './PickupHatchConstants';
import firebase from 'firebase/app';
import 'firebase/database';
import {toast} from 'react-toastify';
import Spacer from '../../../../Components/Spacer';
import {Grid, Row, Col} from 'react-flexbox-grid';

const {NO_INFORMATION_AVAILABLE,
CANT_PICKUP,
PICKS_UP_WELL,
CAN_PICKUP_BUT_NO_COMFORT,
CAN_PICKUP_BUT_OFTEN_FAILS,
CAN_PICKUP_BUT_CANNOT_SCORE} = PickupHatchConstants;

const Levels = [{
    value: CANT_PICKUP,
    name: PickupHatchConstantsMapping.CANT_PICKUP
}, {
    value: PICKS_UP_WELL,
    name: PickupHatchConstantsMapping.PICKS_UP_WELL
},{
    value:CAN_PICKUP_BUT_NO_COMFORT ,
    name: PickupHatchConstantsMapping.CAN_PICKUP_BUT_NO_COMFORT
},{
    value: CAN_PICKUP_BUT_OFTEN_FAILS,
    name: PickupHatchConstantsMapping.CAN_PICKUP_BUT_OFTEN_FAILS
},{
    value: CAN_PICKUP_BUT_CANNOT_SCORE,
    name: PickupHatchConstantsMapping.CAN_PICKUP_BUT_CANNOT_SCORE
}]

const PickupHatchPerformance = ({pickupHatchPerformance, currentUser, selectedTeam}) => {
    const [dropOpen, setDropOpen] = useState(false);

    let currUserChosenPerformance = NO_INFORMATION_AVAILABLE;
    if(pickupHatchPerformance && pickupHatchPerformance[currentUser.uid]) {
        currUserChosenPerformance = pickupHatchPerformance[currentUser.uid].ratingLevel;
    } 

    return <>
        <hr />
        <h2>Hatch pickup performance</h2>

        <h3>What do you think their hatch pickup performance is? (Pick 1)</h3>
        <Dropdown isOpen={dropOpen} toggle={() => setDropOpen(!dropOpen)} >
        <DropdownToggle caret style={{ backgroundColor: "#20508b" }}>
            {PickupHatchConstantsMapping[currUserChosenPerformance]} 
        </DropdownToggle>
        <DropdownMenu modifiers={{
            setMaxHeight: {
                enabled: true,
                order: 890,
                fn: (data) => {
                    return {
                        ...data,
                        styles: {
                            ...data.styles,
                            overflow: 'auto',
                            maxHeight: window.innerHeight * .8,
                        },
                    };
                },
            },
        }}>
            {Levels.map(level => {
                const { value, name } = level;
                return <DropdownItem key={value} onClick={async () => { 
                    // setSelectedAuton(value) 
                    toast.info(`Setting "${name}"...`);
                    try {
                        await firebase.database().ref(`2019data/${selectedTeam}/pickupHatchPerformance/${currentUser.uid}`).set({
                            displayName: currentUser.displayName,
                            ratingLevel: value
                        });
                        toast.success("Set value");
                    } catch(e) {
                        toast.error(`Error: ${e.message}`);
                    }
                }}>{name}</DropdownItem>
            })}
            </DropdownMenu>
        </Dropdown>
        <Spacer space={10} />
        <h3>What do others think?</h3>
        {!pickupHatchPerformance && <>
            Cannot find any ratings
        </>}
        {pickupHatchPerformance && 
            <Grid>
                <Row>
                    {Object.keys(pickupHatchPerformance).map((op, i) => {
                        return <Col md={3} key={"op" + i}>
                            <div style={{
                                margin:10,
                                backgroundColor: "#efefef",
                                border: "2px solid #20508B",
                                borderRadius: 4,
                                padding: 5,
                                textAlign: 'left'
                            }}>
                                <span style={{
                                        fontWeight: 'bold'
                                    }}>{pickupHatchPerformance[op].displayName}: </span>
                                    {PickupHatchConstantsMapping[pickupHatchPerformance[op].ratingLevel]} 
                            </div>
                        </Col>
                    })}
                </Row>
            </Grid>
        }
        <hr />
    </>
}

export default PickupHatchPerformance;