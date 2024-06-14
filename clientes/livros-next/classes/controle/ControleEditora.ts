import { Editora } from './modelo/Editora';

export class ControleEditora {
    editoras: Editora[] = [
        {
            codEditora: 1,
            nome: "Todavia"
        },
        {
            codEditora: 2,
            nome: "Grupo Companhia das Letras"
        },
        {
            codEditora: 3,
            nome: "Círculo de Poemas"

        }
    ];

    getEditoras(): Editora[] {
        return this.editoras;
    }
    getNomeEditora(codEditora: number) {
        const editora = this.editoras.filter(editora => editora.codEditora === codEditora);
        return editora[0]?.nome;
    }
}