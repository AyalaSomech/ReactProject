//תודה 
import { useTranslation } from 'react-i18next';

export default function TenckYou(){
    const{t}=useTranslation(); 
    return <>
    <h1>{t("Tenck_You_Connect")}</h1>
    </>
}
