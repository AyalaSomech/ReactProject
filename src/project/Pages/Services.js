//שרותים
import { useTranslation } from 'react-i18next';
import ToDo from '../component/ToDo';

export default function Services(){
    const{t}=useTranslation(); 
    return <>
    <h1>{t("Services")}</h1>

    <button onClick={ToDo()}>{t("TODO")}</button>
    </>
}