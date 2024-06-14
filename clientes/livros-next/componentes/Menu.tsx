import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">Loja Next</a>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" passHref>
                                <a className="nav-link">Página Inicial</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/LivroLista" passHref>
                                <a className="nav-link">Lista de Livros</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/LivroDados" passHref>
                                <a className="nav-link">Novo Livro</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};