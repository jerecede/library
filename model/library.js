import {PhysicalBook} from './book.js';

export default class Library {
    constructor(name, books = [], users = []) {
        this.name = name;
        this.books = books;
        this.users = users;
    }

    get booksNumber(){
        return this.books.length;
    }

    get usersNumber(){
        return this.users.length;
    }

    addBook(book){ //ISBN saranno tutti diversi
        this.books.push(book);
    }

    removeBook(bookToRemove){
        this.books = this.books.filter(book => book.isbn !== bookToRemove.isbn);
    }

    isBookAvailable(isbn){ // 4 casi: libro non in biblioteca, libro fisico in prestito, ebook in prestito ma fa lo stesso, libro disponibile non in prestito
        const book = this.books.find(b => b.isbn === isbn);
        if(!book){                //controlla se il libro esiste nella biblioteca
            false
        } else {
            if(!book.isBorrowed){ //se è ebook da undefined, quindi false(diventa true, disponibile) // se è physical flase se non è stato preso (diventa true, è disponibile)
                return true;
            }
            else{                 //senno da true(diventa false quindi preso in prestito)
                return false;
            }
        }
    }

    addUser(user){
        this.users.push(user);
    }

    removeUser(userToRemove){
        this.users = this.users.filter(user => user.id !== userToRemove.id);
    }

    listBooks(){
        this.books.forEach(book => console.log(book.toString()));
    }

    listUsers(){
        this.users.forEach(user => console.log(user.toString()));
    }

    borrowBook(user, book){
        const isAvailable = this.isBookAvailable(book);
        if (!isAvailable) {
            console.log('libro non disponibile');
        } else {
            user.borrowBook(book);
            const isPhysical = book instanceof PhysicalBook;
            if (isPhysical) {
                book.isBorrowed = true;
            }
        }
    }

    returnBook(user, book) {
        user.returnBook(book);
        const isPhysical = book instanceof PhysicalBook;
        if (isPhysical) {
            book.isBorrowed = false;
        }

    }

    toString(){
        return `Name: ${this.name}\n` +
               `Books Number: ${this.booksNumber}\n` +
               `Users number: ${this.usersNumber}`;
    }
}