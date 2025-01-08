//צור קשר
import { useNavigate } from "react-router-dom"

export default function Connect(){
    const navagate= useNavigate();
    const navagateToTenckYou=()=>{
        navagate('/TenckYou')
    };
    return <>
    <h1>Connect</h1>
    <button onClick={()=>navagateToTenckYou()}>Here you can get in touch</button>
    </>
}