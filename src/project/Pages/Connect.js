//צור קשר
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import i18n from "../i18next";

export default function Connect(){
    const{t}=useTranslation(); 
    const navagate= useNavigate();
    const navagateToTenckYou=()=>{
        navagate('/TenckYou')
    };
    return <>
    <h1>{t("Connect")}</h1>
    <button className="btn btn-outline-primary" onClick={()=>navagateToTenckYou() }>{t("btn_connect")}</button>
    </>
}