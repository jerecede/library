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