"use client"
import React, {useState} from 'react';
import ProgressBar from '../components/ProgressBar';

const UploadImage = () => {
    const [text, setText] = useState(' ');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)
    const types = ['image/jpeg', 'image/png'];

    const handleUpload = (e) => {
        let fileSelected = e.target.files[0];
        

        if (fileSelected && types.includes(fileSelected.type)){
            setFile(fileSelected)
           setError(null)
        }else {
            setFile(null)
            setError('Invalid file format')
        }
    }

  return (
    <form className='flex flex-col items-center justify-center gap-5 w-full '> 
        <label className=' mt-5 flex items-center justify-center  px-7 py-3 cursor-pointer text-3xl bg-black font-bold rounded-xl border-solid border-gray-500'>

        <input className="opacity-0 w-0 h-0" type="file" onChange={handleUpload}/>
        <span className='' >+</span>
        </label>
        <div className='w-2/5'>
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
    </form>
  )
}

export default UploadImage