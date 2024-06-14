import React from 'react';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/controle/modelo/Livro';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <>
            <tr>
                <td>{livro.titulo}</td>
                <td>{livro.resumo}</td>
                <td>{nomeEditora}</td>
                <td>
                    <ul>
                        {livro.autores.map((autor, index) => (
                            <li key={index}>{autor}</li>
                        ))}
                    </ul>
                </td>
                <td>{livro.codigo}</td>
            </tr>
            <tr>
                <td>
                    <button onClick={excluir} className='btn btn-danger' style={{ marginTop: '-50px' }}>Excluir</button>
                </td>
            </tr>
        </>
    );
};