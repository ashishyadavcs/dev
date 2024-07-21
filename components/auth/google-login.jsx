import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import {useDispatch} from "react-redux";
import {saveUser} from "store/userSlice";
const Loginwithgoogle = ({ title }) => {
    const { data: session } = useSession();
    const dispatch=useDispatch()
    dispatch(saveUser(session?.user))
    const getcallbackurl = () => {
        return "/dashboard";
    };
    return (
        <button
            onClick={async () => await signIn("google", { callbackUrl: getcallbackurl() })}
            className="mb-0 btn btn-default"
        >
            {title} <FcGoogle size={25} />
        </button>
    );
};

export default Loginwithgoogle;
