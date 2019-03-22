import React, { useState } from 'react';
import BlueButton from '../../../../Components/BlueButton';
import { Input } from 'reactstrap';
import Spacer from '../../../../Components/Spacer';
import crypto from 'crypto';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import { toast } from 'react-toastify';

const AddImage = ({ selectedTeam, imageCount }) => {
    const [image, setImage] = useState(null);
    return <>
        <h4>Add an image</h4>
        <Input type="file" onChange={(e) => {
            setImage(e.target.files[0]);
        }} />
        <Spacer space={10} />
        <BlueButton disabled={image ? false : true} onClick={async () => {
            // Generate random hash
            // 
        }}>Submit</BlueButton>
    </>
}

export default AddImage;