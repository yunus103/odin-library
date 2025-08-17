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



// Disable links
document.querySelectorAll('.dash-item.disabled').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // stops navigation
  });
});


// Button for read unread
document.querySelectorAll('.status-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('read')) {
      button.classList.remove('read');
      button.classList.add('unread');
      button.textContent = 'Unread';
    } else {
      button.classList.remove('unread');
      button.classList.add('read');
      button.textContent = 'Read';
    }
  });
});