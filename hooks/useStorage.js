"use client"

import React, {useState, useEffect} from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import {storage, db} from '../firebase/config'


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    

    useEffect(() => {
        const storageRef = ref(storage, file.name);
        
        uploadBytesResumable(storageRef, file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            console.log(percentage);
            setProgress(percentage);
        }, (err) => {
            setError(err)
            console.log(error)
        }, async () => {

            const url = await getDownloadURL(ref(storage, file.name))
            console.log(url);
            await addDoc(collection(db,'images'), {
                url: url,
                createdAt: serverTimestamp(),
                text: '',
             
            })
            setUrl(url);
           console.log(url);
        })
    }, [file])


  return  {progress, url, error}
}

export default useStorage