class Book {
    constructor(isbn, title, author){
        this.author = author;
        this.title = title;
        this.isbn = isbn;
    }

    toString(){
        return `Autore: ${this.author}\n` +
               `Titolo: ${this.title}\n` +
               `ISBN: ${this.isbn}`;
    }
}