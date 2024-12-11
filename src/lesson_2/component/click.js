import img_1 from '../assest/img_1.jpg'
import img_2 from '../assest/img_2.jpg'
import img_3 from '../assest/img_3.jpg'
import img_4 from '../assest/img_4.jpg'
import img_5 from '../assest/img_5.jpg'
import img_6 from '../assest/img_6.jpg'
import { useState } from 'react'

export default function ImagesPass(){
    const[img, setImg]= useState([img_1, img_2, img_3, img_4, img_5, img_6]);
    const[index, setIndex]=useState(0);

    return (
        <>
            <button onClick={()=>{ if(index<5) setIndex(index+1)}} >⟪</button>
            <img src={img[index]}></img>
            <button onClick={()=>{ if(index>0 ) setIndex(index-1)}}>⟫</button>
            
            
        </>
    )
}





