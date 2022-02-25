import type { NextPage } from "next";
import { Create } from "../../components/Create";
import { Footer } from "../../components/footer";
import { HeroUser } from "../../components/HeroUser";

const createUser: NextPage = () => {
  return (
    <>
      <HeroUser />
      <Create />
      <Footer />
    </>
  );
};

export default createUser;
