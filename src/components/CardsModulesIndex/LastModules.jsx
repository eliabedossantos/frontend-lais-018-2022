import { CardModuleTemplate } from "./CardModuleTemplate";
import { useQuery } from 'react-query';
import axios from 'axios';
import { Loading } from "../Loading";
import { convertToSlug } from "../../helpers/CreateSlug";


export function LastModules(){
    const {data, isFetching} = useQuery('lastCourses', async () => {
        const response = await axios.get('http://localhost:3004/cursos?_sort=criado_em&_order=desc&_start=0&_end=3')
        return response.data;
    }, {
        staleTime: 1000 * 60, // 1 minute
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
                    openModule={`/module/${convertToSlug(item.titulo)}-mod=${item.id}`}
                    key={item.id}
                    />
                )
            })} 
        </>
    )
}