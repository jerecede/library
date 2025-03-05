class EBook extends Book{
    constructor(isbn, title, author, fileFormat){
        super(isbn, title, author);
        this.fileFormat = fileFormat;
    }

    toString(){
        return super.toString() + `\n` +
               `Formato: ${this.fileFormat}`;
    }
}