export class Book {
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

export class EBook extends Book{
    constructor(isbn, title, author, fileFormat){
        super(isbn, title, author);
        this.fileFormat = fileFormat;
    }

    toString(){
        return super.toString() + `\n` +
               `Formato: ${this.fileFormat}`;
    }
}

export class PhysicalBook extends Book{

    constructor(isbn, title, author, shelfLocation){
        super(isbn, title, author);
        this.shelfLocation = shelfLocation;
        this.isBorrowed = false; //aggiunto questo attributo
    }

    toString(){
        return super.toString() + `\n` +
               `Shelf: ${this.shelfLocation}`;
    }
}

// export default {Book, EBook, PhysicalBook};