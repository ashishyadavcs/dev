
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
const Loginwithgoogle = () => {
  const router=useRouter()
  const { data: session } = useSession();
  console.log(session)
  const getcallbackurl = () => {
    console.log(router.query?.from)
    return "/"
  }
  return (
    <button onClick={async () =>
      await signIn("google", { callbackUrl: getcallbackurl()})
    } className="mb-0 btn btn-default">
        Login with <FcGoogle size={25} />
      </button>
  )
}

export default Loginwithgoogle