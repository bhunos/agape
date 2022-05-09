import React, {useEffect, useState} from "react";
import {Section} from "./styles";
import Image from "next/image";
import doc from "../../../public/image/doc.svg";
import download from "../../../public/image/download-file-square-line.svg";
import Link from "next/link";
import {BASE_URL} from "../../config";
import Gravatar from 'react-gravatar'
import {GetServerSideProps, NextPage} from "next";

interface dataProps {
    data: {
        id: string;
        email: string;
        name: string;
        document: string;
        documents: {}
    }
}

// TODO: nao esta funcionando


export const Documents = ({data}: dataProps) => {
    return (
        <Section>
            <div className="title">
                <h1>Documentos</h1>
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
    );
};

export const getServerSideProps: GetServerSideProps = async ({params, req}:any) => {
    console.log('req', req);
    const response =
        await fetch(`${BASE_URL}/me/${params.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${req.cookies.token}`
            },
        })
    const data = await response.json();
    console.log('data', response);

    return {
        props: {
            data
        }
    }
}
