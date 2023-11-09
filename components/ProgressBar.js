import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion'

const ProgressBar = ({file, setFile}) => {

    const { url, progress} = useStorage(file);
    useEffect(() => {
        if(url){

            setFile(null);
        }
    }, [url, file])
    
  return (
    <motion.div 
    initial={{width:0}}
    animate={{width:progress + '%'}}
    className={`h-[10px] rounded-md bg-zinc-200 `}></motion.div>
  )
}

export default ProgressBar