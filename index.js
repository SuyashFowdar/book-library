let myLibrary = [
  { title: 'Book 1', author: 'John', noOfPages: 25, read: true },
  { title: 'Book 2', author: 'Tim', noOfPages: 50, read: false },
  { title: 'Book 3', author: 'Sam', noOfPages: 75, read: true }
];

loadLibrary();

function Book(title, author, noOfPages, read) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.read = read;
}

function addBookToLibrary(e) {
  e.preventDefault();
  let formElements = e.target.elements;
  let newBook = new Book(formElements.title.value, formElements.author.value, formElements.noOfPages.value, formElements.read.checked);
  myLibrary.push(newBook);
  formElements.title.value = '';
  formElements.author.value = '';
  formElements.noOfPages.value = null;
  formElements.read.checked = false;
  e.target.classList.remove('col');
  loadLibrary();
}

function loadLibrary() {
  bookTable = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let read = myLibrary[i].read ? 'Read' : 'Not Read';
    bookTable += '<div class="row margin8"><div class="w-15">' + myLibrary[i].title + '</div><div class="w-15">' + myLibrary[i].author + '</div><div class="w-15">' + myLibrary[i].noOfPages + '</div><div class="w-15">' + read + '</div>';
    if (myLibrary[i].read) {
      bookTable += '<div class="w-15"><button onclick="markRead(' + i + ', ' + false + ')">Mark as not read</button></div><div class="w-15"><button onclick="removeBook(' + i + ')">Remove</button></div></div>';
    } else {
      bookTable += '<div class="w-15"><button onclick="markRead(' + i + ', ' + true + ')">Mark as read</button></div><div class="w-15"><button onclick="removeBook(' + i + ')">Remove</button></div></div>';
    }
  }
  document.getElementById('book-list').innerHTML = bookTable;
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  loadLibrary();
}

function markRead(index, value) {
  myLibrary[index].read = value;
  loadLibrary();
}
