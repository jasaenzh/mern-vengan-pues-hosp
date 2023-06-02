/* eslint-disable @typescript-eslint/no-explicit-any */
import { getApartamentos } from "../../services/user.service";
import { getApartment } from "../../redux/states/apartament";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {

    const dispatch = useDispatch();

    const apartaments = useSelector((state: any) => state.apartament.data)

    console.log(apartaments);

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
            {apartaments.map((apartament: any) => apartament.apartmentNumber)}
        </div>
    )
}
export default Home