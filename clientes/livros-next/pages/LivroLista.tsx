import type { NextPage } from 'next'
import React from 'react'
const LivroLista: NextPage = () => { return (<main>ol==ola mundo</main>) }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';
import LinhaLivro from './LinhaLivro';

const controleLivro = new ControleLivros();

export default function LivroLista() {
    const navigate = useNavigate();
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        async function fetchLivros() {
            const livros = await controleLivro.obterLivros();
            setLivros(livros);
        }
        fetchLivros();
    }, []);

    const excluir = async (codigo) => {
        await controleLivro.excluir(codigo);
        setLivros(prevLivros => prevLivros.filter(livro => livro.codigo !== codigo));
    };

    return (
        <div className="container">
            <h1>Catálogo de Livros</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}