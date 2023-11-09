"use client"
import React, { useEffect, useState } from 'react'
import {collection, doc, getDocs, onSnapshot, orderBy, query} from 'firebase/firestore';
import {db} from '../firebase/config'
import {motion} from 'framer-motion'
import Image from 'next/image'
const ImageGrid = ({setSelectedImg}) => {

const [images, setImages] = useState([]);

const handleClick = (img) => {
    setSelectedImg({url:img.url, id: img.id, text: img.text} )

}

useEffect(() => {
    const imageRef = collection(db, 'images')
    const q = query(imageRef, orderBy('createdAt', 'desc'))
    onSnapshot(q, (snapshot) => {
        let imagesCol = [];
        snapshot.docs.forEach((doc) => {
            imagesCol.push({...doc.data(), id: doc.id})
        })

        setImages(imagesCol);
        
    })    


}, []);

  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-10 lg:grid-cols-4 xl:grid-cols-5'>
       

            {images && images.map((img) => (
                <motion.div
                layout
                whileHover={{scale: 1.1, transition: { duration: 0.3}}}
                
                key={img.id}
                onClick={() => handleClick(img)}
                className='item w-full h-[30vh] shadow-2xl overflow-hidden  bg-white p-3 pb-14 md:h-[60vh] lg:h-[40vh] '>
                    <motion.div 
                    layout
                    className='flex relative polaroid  w-full  min-h-full max-h-full grayscale  gap-10 hover:grayscale-0 justify-center  '>
                        <img className='min-w-[100%] min-h-[100%] max-w-[250%] object-cover 'src={img.url} alt="" />
                        <h2 className='absolute trancate -bottom-11 max-w-[100%] max-h-[23%]  text-center text-black font-bold tracking-widest overflow-hidden text-sm '> {img.text}</h2>
                    </motion.div>
                </motion.div>
            ))}
        
    
    </div>
  )
}

export default ImageGrid