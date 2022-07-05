import { CardModuleTemplate } from "./CardModuleTemplate";
import { useQuery } from 'react-query';
import axios from 'axios';
import { Loading } from "../Loading";

export function MostPopular(){
    const {data, isFetching} = useQuery('mostPopular', async () => {
        const response = await axios.get('http://localhost:3004/cursos?_sort=matriculados&_order=desc&_start=0&_end=3')
        return response.data;
    });
    return(
        <>
            {isFetching && <Loading /> }
            {data?.map(item => {
                return(
                    <CardModuleTemplate 
                    sourceImg={item.capa}
                    titleModule={item.titulo}
                    labelInstitution={item.parceiros}
                    totalPeople={item.matriculados}
                    totalHour={item.duracao}
                    rating={item.avaliacao}
                    openModule={"/"}
                    key={item.id}
                    />
                )
            })} 
        </>
    );
}