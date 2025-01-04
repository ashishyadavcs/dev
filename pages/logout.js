import { useDispatch } from "react-redux";
import { deleteUser } from "store/userSlice";
import { fetchData } from "utils/serversidefetch";

const Logout = () => {
    const dispatch = useDispatch;
    dispatch(deleteUser());
    return <div>Please wait</div>;
};
export async function getServerSideProps({ req, res }) {
   
    const data = await fetchData(`${process.env.APP_URL}/api/baseauth/logout`, req);
    res.setHeader('Set-Cookie', [
        `x-refresh=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly`,
      ]);
    return {
        redirect: {
            parmanent: false,
            destination: "/login/",
        },
    };
}
export default Logout;
