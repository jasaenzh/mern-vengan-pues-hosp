import { getApartamentos } from "../../services/user.service";
import { getApartment } from "../../redux/slice/apartment/apartament";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Home: React.FC = () => {

    // Con el dispatch se a a disparar (alterar) la accion (estado)
    const dispatch = useAppDispatch();

    const apartaments = useAppSelector((state) => state.apartment.apartments)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getApartamentos();
                dispatch(getApartment(response));
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div>
            Home
            {apartaments.map((apartament, index) => (
                <div key={index}>
                    <h1>{apartament.apartmentNumber}</h1>
                    <h1>{apartament._id}</h1>
                </div>
            ))}
        </div>
    )
}
export default Home