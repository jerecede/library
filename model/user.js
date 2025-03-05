export default class User {

    static MAX_BORROW_LIMIT = 3;

    constructor(id, name, borrowedBooks = []) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    }

    get borrowedBooksNumber(){
        return this.borrowedBooks.length;
    }

    borrowBook(book){
        if(this.borrowedBooksNumber < User.MAX_BORROW_LIMIT){
            this.borrowedBooks.push(book);
        } else {
            console.log('superaato il limite, passa a premium.');
        }
    }

    returnBook(book){
        this.borrowedBooks = this.borrowedBooks.filter(borrowed => borrowed.isbn !== book.isbn);
    }

    toString(){
        return `ID: ${this.id}\n` +
               `Name: ${this.name}\n` +
               `Borrowed Number Books: ${this.borrowedBooks}`;
    }
}