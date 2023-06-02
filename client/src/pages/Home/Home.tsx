/* eslint-disable @typescript-eslint/no-explicit-any */
import { getApartamentos } from "../../services/user.service";
import { getApartment } from "../../redux/states/apartament";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppStore } from "../../redux/store";

function Home() {

    const dispatch = useDispatch();

    const apartaments = useSelector((state: AppStore) => state.apartament)


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

        </div>
    )
}
export default Home