// // gestione biblioteca
// class Book {
//     constructor(title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }

//     toStringBook() {
//         const bookStr = `Titolo: ${this.title}
// Autore: ${this.author}
// Codice ISBN: ${this.isbn}`
//         return bookStr;
//     }
// }

// class PhysicalBook extends Book {
//     constructor(title, author, isbn, shelfLocation = 0) {
//         super(title, author, isbn);
//         this.shelfLocation = shelfLocation;
//         this.lastShelfLocation = 0;
//     }

//     toString() {
//         const physBookStr = `${super.toString()}
// Scaffale: ${this.shelfLocation}`
//         return physBookStr;
//     }
// }

// class EBook extends Book {
//     constructor(title, author, isbn, fileExtension) {
//         super(title, author, isbn);
//         this.fileExtension = fileExtension;
//     }

//     toString() {
//         const eBookStr = `${super.toString()}
// Formato: ${this.fileExtension}`
//         return eBookStr;
//     }
// }

// class User {
//     static maxBorrowLimit = 3;
//     constructor(name, id, borrowedBooks = []) {
//         this.name = name;
//         this.id = id;
//         this.borrowedBooks = borrowedBooks;
//     }

//     toStringUser() {
//         const userStr = `Nome: ${this.name}
// Id: ${this.id}
// Libri in prestito: ${this.borrowedBooksNumber}`
//         return userStr;
//     }

//     borrowBook(book) {
//         if (this.borrowedBooks.length >= User.maxBorrowLimit) {
//             return "Hai raggiunto il limite massimo di libri in prestito";
//         }

//         if (book instanceof PhysicalBook && book.shelfLocation === 0) {
//             return "Il libro non è disponibile";
//         }

//         book.lastShelfLocation = book.shelfLocation;
//         book.shelfLocation = 0;
//         this.borrowedBooks.push(book);
//         return "Hai ritirato il libro";
        
//     }

//     returnBook(book) {
//         const index = this.borrowedBooks.indexOf(book);
//         if (index >= 0) {
//             book.shelfLocation = book.lastShelfLocation;
//             this.borrowedBooks.splice(index, 1);
//             return "Hai restituito il libro" ;
//         }
//         return "Il libro non è stato trovato tra i libri in prestito";
//     }

//     get borrowedBooksNumber() {
//         return this.borrowedBooks.length;
//     }
// }

// class PremiumUser extends User {
//     constructor(name, id, borrowedBooks) {
//         super(name, id, borrowedBooks);
//     }

//     extendsMaxBorrowLimit(newLimit) {
//         if (newLimit > 3){
//             User.maxBorrowLimit = newLimit;
//         }
//     }
// }

// class Library {
//     constructor(books=[], users=[]){
//         this.books = books;
//         this.users = users;
//         this.#assignShelfLocation(this.books);
//     }

//     #assignShelfLocation(books){
//         for (let i = 0; i < books.length; i++) {
//             const book = books[i];
//             book.shelfLocation = i + 1;
//         }
//     }

//     addBook(book){
//         book.shelfLocation = this.books.length;
//         this.books.push(book);
//     }

//     removeBook(book){
//         const index = this.books.indexOf(book);
//         if (index >= 0) {
//             this.books.splice(index, 1);
//             this.#assignShelfLocation(this.books);
//             console.log(`Hai rimosso il libro ${book.title} dalla libreria`);
//         } else {
//             console.log("Non hai trovato il libro, scemo!");
//         }
//     }

//     isBookAvailable(isbn) {
//         return this.books.some(book => book.isbn === isbn);
//     }

//     addUser(user){
//         this.users.push(user);
//     }

//     removeUser(user){
//         const index = this.users.indexOf(user);
//         if (index >= 0) {
//             this.users.splice(index, 1);
//             console.log(`Hai rimosso l'utente ${user.name} dalla lista`);
//         } else {
//             console.log("L'utente richiesto non esiste!");
//         }
//     }

//     listBooks() {
//         let listBooksString = "Elenco dei libri in biblioteca:\n";
//         this.books.forEach((book, index) => {
//             listBooksString += `${index + 1}) ${book.toStringBook()}\n`;
//         });
//         console.log(listBooksString);
//     }

//     listUsers() {
//         let listUsersString = "Elenco degli utenti registrati:\n";
//         this.users.forEach((user, index) => {
//             listUsersString += `${index + 1}) ${user.toStringUser()}\n`;
//         });
//         console.log(listUsersString);
//     }

//     borrowBook(user, book){
//         if(this.isBookAvailable(book.isbn)){
//             user.borrowBook(book);
//         } else {
//             console.log('il libro non è disponibile!');
//         }
//     }

//     returnBook(user, book){
//         const index = user.borrowedBooks.indexOf(book);
//         if(index >= 0){
//             user.returnBook(book);
//         } else {
//             console.log("l'utente non ha il libro");
//         }
//     }
// }

/////////////   CORREZIONE

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

class User {

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

class PremiumUser extends User {

    constructor(id, name, borrowedBooks = []) {
        super(id, name, borrowedBooks);
        this.premiumLimit = User.MAX_BORROW_LIMIT;
    }

    extendBorrowLimit(newLimit){
        this.premiumLimit = newLimit;
    }

    borrowBook(book){
        if(this.borrowedBooksNumber < User.premiumLimit){
            this.borrowedBooks.push(book);
        } else {
            console.log('superaato il limite, passa a premium.');
        }
    }

    toString(){
        return super.toString() + `\n` +
               `Borrow Limit: ${this.premiumLimit}`;
    }
}

class Library {
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