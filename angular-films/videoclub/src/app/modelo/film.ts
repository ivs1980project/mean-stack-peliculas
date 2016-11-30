export class Film {

    constructor(private id: number, private titulo: string,
        private autor: string, private anio: number) {
    }
    toString(): string {
        return "Pelicula: \n\tTitulo: " + this.titulo +
            "\n\tAutor: " + this.autor + "\n\tAnio: " + this.anio;
    }
    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    getTitulo(): string {
        return this.titulo;
    }
    setAutor(autor: string): void {
        this.autor = autor;
    }
    getAutor(): string {
        return this.autor;
    }
    setAnio(anio: number): void {
        this.anio = anio;
    }
    getAnio(): number {
        return this.anio;
    }
    getId(): number {
        return this.id;
    }

}
