const logout = () => {
  return <div>Please wait</div>;
};
export async function getServerSideProps({ req, res }) {
  const token = req.cookies["x-token"] || req.headers.cookies;
  res.setHeader("Set-Cookie", [
    `x-token=deleted; Max-Age=0;domain=${process.env.COOKIE_DOMAIN};`,
    `x-refresh=deleted; Max-Age=0;domain=${process.env.COOKIE_DOMAIN};`,
    `_user=deleted; Max-Age=0;domain=${process.env.COOKIE_DOMAIN};`,
  ]);
  // await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/logout/`, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  return {
    redirect: {
      parmanent: false,
      destination: "/login/",
    },
  };
}
export default logout;
