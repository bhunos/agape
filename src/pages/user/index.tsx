import type { NextPage } from "next";
import { Contact } from "../../components/Contact";
import { Divider } from "../../components/Divider";
import { Documents } from "../../components/Documents";
import { Footer } from "../../components/footer";
import { HeroUser } from "../../components/HeroUser";

const User: NextPage = () => {
  return (
    <>
      <HeroUser />
      <Divider />
      <Documents />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </>
  );
};

export default User;
