import {Contact} from "../../components/Contact";
import {Divider} from "../../components/Divider";
import {Documents} from "../../components/Documents";
import {Footer} from "../../components/footer";
import {HeroUser} from "../../components/HeroUser";

export default function User() {

    return (
        <>
            <HeroUser/>
            <Divider/>
            <Documents/>
            <Divider/>
            <Contact/>
            <Divider/>
            <Footer/>
        </>
    );
};
