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
            setImage({
                name: e.target.files[0].name,
                file: e.target.files[0]
            });
        }} />
        <Spacer space={10} />
        <BlueButton disabled={image ? false : true} onClick={async () => {
            if (!image) {
                toast.error("No/invalid image provided");
                return;
            }
            try {
                toast.info("Uploading image...");
                const hash = crypto.randomBytes(32).toString("hex");
                const uploadSnap = await firebase.storage().ref(`imgs/${hash}/${image.name}`).put(image.file);
                const url = await uploadSnap.ref.getDownloadURL();
                await firebase.database().ref(`2019data/${selectedTeam}/images`).push({ src: url });
                toast.success("Image upload success!");
            } catch (e) {
                toast.error(`Error uploading image: ${e}`)
            }


            // 
        }}>Submit</BlueButton>
    </>
}

export default AddImage;