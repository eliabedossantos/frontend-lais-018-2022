import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Col, Container, Pagination, Row } from "react-bootstrap";
export function PaginationPage(){
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const { data: dataQuery, isLoading: isLoadingQuery, refetch } = useQuery(
        "pagination",
        async () => {
            setIsLoading(true);
            const response = await axios.get(
                `http://localhost:3004/cursos?cateroria=Covid%2019&_sort=criado_em&_order=desc&_start=${(page - 1) *
                    itemsPerPage}&_end=${page * itemsPerPage}`
            );
            setIsLoading(false);
            setTotalPages(Math.ceil(response.data.length / itemsPerPage));
            setTotalItems(response.data.length);
            setData(response.data);
            return response.data;
        }
    );
    
    useEffect(() => {
        if (dataQuery) {
            setData(dataQuery);
            setTotalPages(Math.ceil(dataQuery.length / itemsPerPage));
            setTotalItems(dataQuery.length);
        }
    }, [dataQuery]);
    
    const handlePageChange = (page) => {
        setPage(page);
        refetch();
    }


    let active = 1;
    let items = [];
    for (let number = 1; number <= totalItems; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}  onClick={() => handlePageChange(number)}>
            {number}
        </Pagination.Item>,
    );
    }

    return(
        <Container>
            <Row>
                <Col sm={12}>
                    <>
                        {
                        data?.map(item => {
                            return(
                                <p key={item.id}>{item.titulo}</p>
                                
                                );
                            })}
                            </>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Pagination>
                        {items}
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}