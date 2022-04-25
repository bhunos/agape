import type {NextPage} from "next";
import {Divider} from "../../components/Divider";
import {Footer} from "../../components/footer";
import {HeroUser} from "../../components/HeroUser";
import {Section} from "./styles";

import React, {useEffect, useState} from "react";
import {parseCookies} from "nookies";
import {BASE_URL} from "../../config";
import Gravatar from 'react-gravatar'

const User: NextPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    async function fetchData() {
        const cookies = parseCookies().token;
        const response = await fetch(`${BASE_URL}/admin/list-clients`, {
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

    let rows = []

    for (let item in data) {
        console.log('item', item);
        rows.push(
            <div className="card">
                <div className="header">
                    <Gravatar email={data[item].email}/>
                    <h1>{data[item].name}</h1>
                </div>
                <ul className="open">
                    <li>
                        <a href="/delete">
                            <img src="image/delete.png" alt="Deletar"/>
                        </a>
                    </li>
                    <li>
                        <a href="/update">
                            <img src="image/editar.png" alt="editar"/>
                        </a>
                    </li>
                    <li>
                        <a href="/list-documents">
                            <img src="image/entrar.png" alt="Entrar"/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <HeroUser/>
            <Divider/>
            <Section>
                <div className="title">
                    <h1>Clientes</h1>
                </div>
                <div className="create">
                    <a href="/registrar" className="open">
                        <button>Criar Usuario</button>
                    </a>
                </div>
                <div className="container">
                    <div className="content">
                        {rows}
                    </div>
                </div>
            </Section>
            <Footer/>
        </>
    );
};

export default User;
