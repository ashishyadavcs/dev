import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
const Loginwithgoogle = ({ title }) => {
    const router = useRouter();
    const { data: session } = useSession();
    const getcallbackurl = () => {
        return "/admin";
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
