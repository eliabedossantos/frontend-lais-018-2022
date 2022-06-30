import sifilisImg from "../../assets/img/sifilis.png"
import { CardModuleTemplate } from "./CardModuleTemplate";

export function MostPopular(){
    return(
        <CardModuleTemplate 
        sourceImg={sifilisImg}
        titleModule="Sífilis: Aspectos Clínicos e Diagnóstico Diferencial"
        labelInstitution="LAIS / EBSERH"
        totalPeople={"27.645"}
        totalHour={"4h30min"}
        rating={"5,0"}
        openModule={"/"}
        />
    );
}