import type { NextPage } from 'next'
import React from 'react'
const LivroDados: NextPage = () => { return (<main>ol==ola mundo</main>) }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from '../classes/controle/ControleLivros';

const controleLivros = new ControleLivros();

export default function LivroDados() {
    const navigate = useNavigate();
    const [opcoes, setOpcoes] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState('');

    useEffect(() => {
        const fetchEditoras = async () => {
            const editoras = await controleLivros.getEditoras();
            setOpcoes(editoras.map(editora => ({
                value: editora.codEditora,
                text: editora.nome
            })));
        };
        fetchEditoras();
    }, []);

    const tratarCombo = (event) => {
        const { value } = event.target;
        setCodEditora(value);
    };

    const incluir = async (event) => {
        event.preventDefault();
        const livro = {
            codigo: 0,
            codEditora: parseInt(codEditora),
            titulo,
            resumo,
            autores: autores.split('\n')
        };
        await controleLivros.incluir(livro);
        navigate('/');
    };

    return (
        <div className="container">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <label>
                    Título:
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </label>
                <label>
                    Resumo:
                    <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </label>
                <label>
                    Editora:
                    <select value={codEditora} onChange={tratarCombo}>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Autores:
                    <textarea value={autores} onChange={(e) => setAutores(e.target.value)} />
                </label>
                <button type="submit">Salvar Dados</button>
            </form>
        </div>
    );
}