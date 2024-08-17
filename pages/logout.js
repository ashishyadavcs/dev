import Cookies from "cookies";
import { useDispatch } from "react-redux";
import { logout } from "store/userSlice";
import { fetchData } from "utils/serversidefetch";

const Logout = () => {
    const dispatch = useDispatch;
    dispatch(logout());
    return <div>Please wait</div>;
};
export async function getServerSideProps({ req, res }) {
    const data = await fetchData(`${process.env.APP_URL}/api/baseauth/logout`, req);

    return {
        redirect: {
            parmanent: false,
            destination: "/login/",
        },
    };
}
export default Logout;
