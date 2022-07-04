import sifilisImg from "../../assets/img/sifilis.png"
import { CardModuleTemplate } from "./CardModuleTemplate";
import { useQuery } from 'react-query';
import axios from 'axios';

export function LastModules(){

    const {data, isFetching} = useQuery('courses', async () => {
        const response = await axios.get('http://localhost:3004/cursos')
        return response.data;
    });

    return(
        { isFetching && <div>Loading...</div> }
        {data?.map((item, index) => {
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
            )
        })}
    )
}