import Reac,{useState, useRef, useEffect} from 'react'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../firebase/config'
const Modal = ({selectedImg, setSelectedImg}) => {
    const [updatedText, setUpdatedText] = useState(null);
    const inputRef = useRef(null);
    console.log(selectedImg.id)

    const handleClick = e => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }

    const updateText = async () => {
        const textRef = doc(db,'images', selectedImg.id)
        await updateDoc(textRef, {
            text: updatedText,
        })
        
    }
    
    useEffect(() => (
        inputRef.current.focus()
    ), [])

    useEffect( () => {
        

        if (updatedText){

            updateText();
        }else{
            setUpdatedText(null)
        }
    }, [updatedText])

  return (
    <div 
    onClick={handleClick}
    className='backdrop fixed top-0 left-0 bottom-0 w-full h-full flex  flex-col items-center gap-10 justify-center bg-[rgba(0,0,0,0.7)]'>
        <img className='max-w-[60%] max-h-[70%] object-contain' src={selectedImg.url} alt="" />
        <input ref={inputRef} className='text-sm px-7 py-3 bg-white text-black border-0 outline-0 'type="text" placeholder='Enter Text' value={updatedText } onChange={(e) => setUpdatedText(e.target.value)} />
    </div>
  )
}

export default Modal