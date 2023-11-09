'use client'
import Image from 'next/image'
import Title from '../components/Title'
import ImageGrid from '../components/ImageGrid'
import UploadImage from '../components/UploadImage'
import {useState} from 'react';
import Modal from '../components/Modal'

export default function Home() {

  const [selectedImg, setSelectedImg] = useState(null)
  console.log(selectedImg)
  return (
    <div className="flex w-8xl min-h-screen flex-col items-center p-5  gap-5 bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-800 lg:p-20">

      <Title />
      <UploadImage/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  )
}
