class PhysicalBook extends Book{

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