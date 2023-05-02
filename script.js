
// Book coonstructor
function Book(title,author,pages,isRead){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// inital library
let myLibrary = [  
    new Book('Harry Potter', 'JK Rowling', 295, true),
    new Book('The Lord of the Rings', 'JRR Tolkien', 1178, false),
    new Book('Pride and Prejudice', 'Jane Austen', 279, false ),
    new Book('To Kill a Mockingbird', 'Harper Lee', 324, false),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 224, false)
];



const bookList = document.getElementById('book-list');

function displayBooks() {
  // clear the table body before repopulating it
  bookList.innerHTML = '';

  // create a table header row
  const tableHeader = document.createElement('tr');
  tableHeader.innerHTML = `
   <th>Index</th>  
   <th>Title</th>
    <th>Author</th>
    <th>Pages</th>
    <th>isRead?</th>
  `;
  bookList.appendChild(tableHeader);

  // loop through each book in the myLibrary array and create a table row for it
  myLibrary.forEach(book => {
    const bookRow = document.createElement('tr');
    bookRow.innerHTML = `
      <td>${myLibrary.indexOf(book)}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.isRead ? 'Yes' : 'No'}</td>
      <td><button class="delete-book-btn" data-index="${myLibrary.indexOf(book)}">Delete</button></td>
      
         `;
    bookList.appendChild(bookRow);
  });

  //delete button:
const deleteBtns = document.querySelectorAll('.delete-book-btn');
deleteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const libraryIndex = btn.dataset.index;
    myLibrary.splice(libraryIndex,1);
    displayBooks();
  })
})
}


//add new book button toggles display of for to add new book.
const addBookBtn = document.getElementById('add-book-btn');
const addBookForm = document.getElementById('add-book-form');
addBookBtn.addEventListener('click', () => {
  addBookForm.classList.toggle('hidden')
})

//add new book from form to library
const submitBookBtn = document.getElementById('submit-book-btn');
submitBookBtn.addEventListener('click',()=>{
  event.preventDefault();

  // Get form input values
  const title = addBookForm.title.value;
  const author = addBookForm.author.value;
  const pages = addBookForm.pages.value;
  const isRead = addBookForm.isRead.checked;
  
  // Create new Book object
  const newBook = new Book(title, author, pages, isRead);
  
  // Add new Book object to myLibrary array
  myLibrary.push(newBook);
  
  // Clear the form
  addBookForm.reset();
  
  // Update the display
  displayBooks();
  addBookForm.classList.toggle('hidden');
});




// call the displayBooks function to initially populate the book list
displayBooks();