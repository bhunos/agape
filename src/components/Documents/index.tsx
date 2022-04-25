import React, {useEffect, useState} from "react";
import {Section} from "./styles";
import Image from "next/image";
import doc from "../../../public/image/doc.svg";
import download from "../../../public/image/download-file-square-line.svg";
import Link from "next/link";
import {BASE_URL} from "../../config";
import {parseCookies} from "nookies";
import Gravatar from 'react-gravatar'

export const Documents = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    async function fetchData() {
        const cookies = parseCookies().token;
        const response = await fetch(`${BASE_URL}/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${cookies}`
            },
        }).then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setData(data)
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log(error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(data);

    return (
        <Section>
            <div className="title">
                <h1>Documentos</h1>
            </div>
            <div className="container">
                <div className="perfil">
                    <div className="image">
                        <Gravatar email={data.email} size='150'/>
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
