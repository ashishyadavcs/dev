const Logout = () => {
  return "";
};

export default Logout;
export async function getServerSideProps(req, res) {
  return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
  };
}
