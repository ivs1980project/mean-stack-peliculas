export class Film {

    constructor(private id: number, private titulo: string,
        private autor: string, private anio: number){
    }
    toString():string{
        return "Libro: \n\tTitulo: "+this.titulo +
        "\n\tAutor: "+this.autor + "\n\tAnio: "+this.anio;
    }
}
