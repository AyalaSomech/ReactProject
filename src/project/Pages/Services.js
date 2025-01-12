//שרותים
import { useTranslation } from 'react-i18next';

export default function Services(){
    const{t}=useTranslation(); 
    return <>
    <h1>{t("Services")}</h1>
    </>
}