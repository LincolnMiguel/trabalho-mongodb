import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

export default function LivroDados() {
    const navigate = useNavigate();
    const controleLivros = new ControleLivros();
    const controleEditora = new ControleEditora();

    const [opcoes, setOpcoes] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : '');

    const getEditoras = () => {
        const editoras = [
            { codEditora: 1, nome: 'Editora A' },
            { codEditora: 2, nome: 'Editora B' },
            { codEditora: 3, nome: 'Editora C' }
        ];

        const opcoesMapeadas = editoras.map(editora => ({
            value: editora.codEditora,
            text: editora.nome
        }));

        setOpcoes(opcoesMapeadas);
    };

    useEffect(() => { getEditoras(); }, []);

    const tratarCombo = (event) => {
        const { value } = event.target;
        setCodEditora(parseInt(value));
    };

    const incluir = async () => {
        const controleLivros = new ControleLivros();
        await controleLivros.incluir(livro);
        navigate('/');
    };

    return (
        <main>
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
        </main >
    );
}
