import { setAccessToken } from "../../redux/slice/auth/auth";
import { useAppDispatch, useAppSelector } from "../../redux/store";


const Login: React.FC = () => {

    const dispatch = useAppDispatch();

    const { auth } = useAppSelector((state) => state)

    console.log(auth.accessToken);

    const handleLogin = (): void => {
        dispatch(setAccessToken('8798q7we987q9e8wqe'))
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    )
}
export default Login