//אודות
import { useTranslation } from 'react-i18next';
import i18n from "../i18next";



export default function About(){
    const{t}=useTranslation(); 
    return <>
    <h1>{t("About")}</h1>
    </>
}