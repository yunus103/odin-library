const myLibrary = [];

function Book(name, author, pages, status) { // Book constructor
    this.name = name;
    this.id = crypto.randomUUID();
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary2(bookObject) {
    myLibrary.push(bookObject);
}



