import Cookies from "cookies";
import { useDispatch } from "react-redux";
import { logout } from "store/userSlice";

const Logout = () => {
    const dispatch = useDispatch;
    dispatch(logout());
    return <div>Please wait</div>;
};
export async function getServerSideProps({ req, res }) {
    const cookies = new Cookies(req, res);
    cookies.set("x-refresh"); //to delet refresh token
    cookies.set("x-token"); //to delet access token
    return {
        redirect: {
            parmanent: false,
            destination: "/login/",
        },
    };
}
export default Logout;
