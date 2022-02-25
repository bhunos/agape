import type { NextPage } from "next";
import { Footer } from "../../components/footer";
import { HeroUser } from "../../components/HeroUser";
import { Login } from "../../components/Login";

const login: NextPage = () => {
  return (
    <>
      <HeroUser />
      <Login />
      <Footer />
    </>
  );
};

export default login;
