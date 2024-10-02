import { ChangeEvent, useContext, useEffect, useState } from "react";
import Card from "../../Components/Card";
import { MainContent,TrainingContent, Title, TopContent, Content } from "./styles";
import { ITraining } from '../../Types/interfaces'
import { LanguageContext } from "../../Context/language";
import { getHeaders } from "../../service/headers";
import { api } from "../../service/api";
import SearchInput from "../../Components/SearchInput";
import AddTrainingButton from "./Components";
import { useSearchParams } from "react-router-dom";
import Pagination from '@mui/material/Pagination';

export default function TrainingPage() {
    const [trainings, setTrainings] = useState<ITraining[]>([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState<number>(0);
    const { getText } = useContext(LanguageContext);
    const [search, setSearch] = useSearchParams();

    useEffect(() => {
        if(!search.get("page"))
            setSearch({ page: "1" })
    });

    useEffect(() => {
        fetchTrainings(Number(search.get("page")));
    }, [search]);

    async function fetchTrainings(index: number) {
        setLoading(true);
        const response = await api.get('/training',{
            params:{
                pageIndex: index,
                pageSize: 12
            },
            headers: getHeaders()
        }); 
        console.log(response);
        
        setTotal(response.data.total);
        setTrainings(response.data.data);
        setLoading(false);
    }

    function getTrainings() {
        return trainings.map((treining : ITraining, index: number) =>
            <Card key={index} data={treining}></Card>
        )
    }

    const handlePageChange = (_e: ChangeEvent<unknown>, page: number) => {
        setSearch({ page: page.toString() })
    }
    
    return (
        <>
            <MainContent>
                
                <Content>
                    <TopContent>
                        <Title>{getText('trainings')}</Title>
                        <SearchInput/>
                    </TopContent>
                    <TrainingContent>
                        {!loading && getTrainings()}
                    </TrainingContent>
                </Content>
                <div>
                    {!loading && <Pagination  sx={{paddingTop: "20px"}} page={Number(search.get("page"))}  size="large" count={Math.ceil(total / 16)} onChange={handlePageChange} />}
                </div>
                    <AddTrainingButton onAdd={() => fetchTrainings(Number(search.get("page")))}/>
            </MainContent>
        </>
    );
}
