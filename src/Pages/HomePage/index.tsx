import { useContext } from "react";
import FirstAccessModal from "./Components/FirstAccessModal";
import { MainContent, Title, HomeContent } from "./styles";
import { LanguageContext } from "../../Context/language";
import { UserContext } from "../../Context/user";


export default function HomePage() {
    // const [trainings, setTrainings] = useState<ITraining[]>([]);
    // const [loading, setLoading] = useState(false);
    const { getText } = useContext(LanguageContext);
    const { firstAccess } = useContext(UserContext);

    // useEffect(() => {
    //     fetchTrainings(0, 0);
    // }, []);

    // async function fetchTrainings(index: number, size: number) {
    //     setLoading(true);
    //     const response = await api.get('/training',{
    //         params:{
    //             pageIndex: index,
    //             pageSize: size
    //         },
    //         headers: getHeaders()
    //     }); 
    //     setTrainings(response.data.data);
    //     setLoading(false);
    // }

    // function getTrainings() {
    //     return trainings.map((treining : ITraining, index: number) =>
    //         <Card key={index} data={treining}></Card>
    //     )
    // }
    return (
        <>
            <MainContent>
                <Title>{getText('home')}</Title>
                {firstAccess && <FirstAccessModal />}
                <HomeContent>
                    {/* {!loading && getTrainings()} */}
                </HomeContent>
            </MainContent>
        </>
    );
}
