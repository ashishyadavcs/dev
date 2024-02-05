import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {setTokenCookies} from "utils/cookie";

const nextAuthOptions = (req, res) =>({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            secret: process.env.NEXTAUTH_SECRET,
            
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            const { email, name } = profile;
          const data=   await fetch(`${process.env.BASE_URL}/google-login`, {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email:email,
                    name:name
                }),
            })
                .then(res => res.json())
                .catch(err => console.log(err));
            if(data.success){
                setTokenCookies(req,res,data)
            }
          return true
        },
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token;
                token.id = profile.id;
            }
            return token;
        },
    },
})

export default (req, res) => {
	return NextAuth(req, res, nextAuthOptions(req, res));
};
