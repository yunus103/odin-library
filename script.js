let myLibrary = [];

// Book constructor
function Book(name, author, pages, status) { 
    this.name = name;
    this.id = crypto.randomUUID();
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.toggleStatus = function() {
    this.status = !this.status;
};

const book1 = new Book("The Great Gatsby","F. Scott Fitzgerald", 180, true);
const book2 = new Book("To Kill a Mockingbird","Harper Lee", 281, false);
const book3 = new Book("Harry Potter","J.K Rowling", 390, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

const container = document.querySelector(".card-container");
myLibrary.forEach(book => container.appendChild(displayBooks(book)));



// Disable links
document.querySelectorAll('.dash-item.disabled').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // stops navigation
  });
});


// Button for read unread
document.querySelectorAll('.status-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    if (button.classList.contains('read')) {
      button.classList.remove('read');
      button.classList.add('unread');
      button.textContent = 'Unread';
    } else {
      button.classList.remove('unread');
      button.classList.add('read');
      button.textContent = 'Read';
    }

    const currentCardId = e.target.closest(".book-card").dataset.id;
    const currentBook = myLibrary.find(b => b.id === currentCardId);
    if(currentBook){
        currentBook.toggleStatus();
    }
  });
});


// Delete Button
container.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        const card = e.target.closest(".book-card");
        card.remove();

        // Delete from array
        const bookId = e.target.closest(".book-card").dataset.id;
        myLibrary = myLibrary.filter(book => book.id !== bookId);
    }
});



// Library data logic
function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}

function displayBooks(book) {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.dataset.id = book.id;

    const title = document.createElement("h2");
    title.classList.add("book-title");
    title.textContent = book.name;
    
    const author = document.createElement("p");
    author.classList.add("book-author");
    author.textContent = "by " + book.author;

    const pages = document.createElement("p");
    pages.classList.add("book-pages");
    pages.textContent = book.pages + " pages";

    const readButton = document.createElement("button");
    readButton.classList.add("status-btn");
    if(book.status){
        readButton.classList.remove("unread");
        readButton.classList.add("read");
        readButton.textContent = "Read";
    } else {
        readButton.classList.remove("read");
        readButton.classList.add("unread");
        readButton.textContent = "Unread";
    }

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";

    card.append(title, author, pages, readButton, deleteButton);
    
    return card;
}
