import { useDispatch } from "react-redux";
import { logout } from "store/userSlice";
import { fetchData } from "utils/serversidefetch";

const Logout = () => {
    const dispatch = useDispatch;
    dispatch(logout());
    return <div>Please wait</div>;
};
export async function getServerSideProps({ req, res }) {
    res.setHeader('Set-Cookie','x-refresh=;Expires=Thu, 01 Jan 1970 00:00:00 GMT')
    const data = await fetchData(`${process.env.APP_URL}/api/baseauth/logout`, req);

    return {
        redirect: {
            parmanent: false,
            destination: "/login/",
        },
    };
}
export default Logout;
