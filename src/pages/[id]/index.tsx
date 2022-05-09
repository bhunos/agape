import {Contact} from "../../components/Contact";
import {Divider} from "../../components/Divider";
import {Footer} from "../../components/footer";
import {HeroUser} from "../../components/HeroUser";
import {Section} from "../../components/Documents/styles";
import Gravatar from "react-gravatar";
import Image from "next/image";
import doc from "../../../public/image/doc.svg";
import Link from "next/link";
import download from "../../../public/image/download-file-square-line.svg";
import {BASE_URL} from "../../config";
import {GetServerSideProps} from "next";
import React, { useContext } from "react";
import {useForm} from "react-hook-form";
import {parseCookies} from "nookies";

interface dataProps {
    data: {
        id: string;
        email: string;
        name: string;
        document: string;
        documents: {}
    }
}

export default function User({data}: dataProps) {
    const {register, handleSubmit} = useForm();
    const id = data.id;
    const {token} = parseCookies()

    async function upDocument(file:any) {
        const data = new FormData();
        data.append("file", file);
        data.append("id", id);
        const response = await fetch(`${BASE_URL}/admin/upload-document/:${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: data
        })
        const json = await response.json();
        console.log('response', json)
    }

    return (
        <>
            <HeroUser/>
            <Divider/>
            <Section>
                <div className="title">
                    <h1>Documentos</h1>´
                    <form action="" method="POST" onSubmit={handleSubmit(upDocument)}>
                        <input
                            {...register('file')}
                            type="file"
                            name="file"
                            id="file"
                        />
                        <input type="submit" id="submitDocument" value="Enviar"/>
                    </form>
                </div>
                <div className="container">
                    <div className="perfil">
                        <div className="image">
                            <Gravatar email={data.email}/>
                        </div>
                        <h2>{data.name}</h2>
                        <p>{data.document}</p>
                    </div>
                    <div className="content">
                        <div className="card">
                            <div className="header">
                                <Image src={doc} alt=""/>
                                <h2>{data.documents}</h2>
                            </div>
                            <div className="description">
                                <p>
                                    {data.documents}
                                </p>
                                <Link href="/dowload">
                                    <a>
                                        <Image src={download} alt=""/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Divider/>
            <Contact/>
            <Divider/>
            <Footer/>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({params, req}:any) => {
    const response =
        await fetch(`${BASE_URL}/admin/client/` + params.id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${req.cookies.token}`
            },
        })
    const data = await response.json();

    return {
        props: {
            data
        }
    }

}
