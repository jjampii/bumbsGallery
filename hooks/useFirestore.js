import React, {useState, useEffect}from 'react';
import {db} from '../firebase/config'
import { collection, doc, getDocs } from 'firebase/firestore';

const useFirestore = () => {

    const [docs, setDocs] = useState([]);
    const getData = async () => {
        const docRef = collection(db, 'images');
        const doc = await getDocs(docRef)
        let documents = [];
        doc.forEach((doc) => {
            documents.push({...doc.data(), id: doc.id});
            
        });
        if(documents) {
            setDocs(documents);
        }else{
            setDocs(null);
        }
    };

    useEffect( () => {
        getData();
    }, [])

  return {docs}
}

export default useFirestore