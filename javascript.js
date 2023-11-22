
window.onload = function () {

    const BtnAddBook = document.getElementById("btnBook");
    const dialog = document.getElementById("mainDialog");
    const BtnSubmit = document.getElementById("btnForm");

    const myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    function addBookToLibrary(book) {
        myLibrary.push(book);
    }

    

    BtnAddBook.addEventListener("click", () => {
        dialog.showModal();
    });

    
    dialog.addEventListener("close", () => {
        console.log(titleForm.value);
    })

    let titleForm = document.getElementById("title-form");
    let authorForm = document.getElementById("author-form");
    let pagesForm = document.getElementById("pages-form");
    let readForm = document.getElementById("read-checkbox");

    let bookIndex = 0; // Track the index of books

    BtnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        const book = new Book(titleForm.value, authorForm.value, pagesForm.value, readForm.checked);
        addBookToLibrary(book);
        dialog.close();
    
        createElement(book, bookIndex);
        bookIndex++;
    
        titleForm.value = "";
        authorForm.value = "";
        pagesForm.value = "";
        readForm.checked = false;

    });

    function ReadButtonColor() {
        if (book.read) {
            book.read = false;
            readButton.style.backgroundColor = "green"; // Assuming the default color is green
        } else {
            book.read = true;
            readButton.style.backgroundColor = "red";
        }
    }
    
    function createElement(book, index) {
        const domElement = document.createElement("div");
        domElement.classList.add("cardBook");
    
        const container = document.getElementById("card-container");
        container.appendChild(domElement);
    
        const titleDiv = document.createElement("div");
        titleDiv.textContent = `Title: ${book.title}`;
        domElement.appendChild(titleDiv);
    
        const authorDiv = document.createElement("div");
        authorDiv.textContent = `Author: ${book.author}`;
        domElement.appendChild(authorDiv);
    
        const pagesDiv = document.createElement("div");
        pagesDiv.textContent = `Pages: ${book.pages}`;
        domElement.appendChild(pagesDiv);
    
        const readButton = document.createElement("button");
        readButton.textContent = "Read";
        readButton.classList.add("buttonRead");
        if (book.read) {
            readButton.style.backgroundColor = "green"; 
        } else {
            readButton.style.backgroundColor = "red";
        }
        
        readButton.addEventListener("click", () => {
            if (book.read) {
                book.read = false;
                readButton.style.backgroundColor = "red"; 
            } else {
                book.read = true;
                readButton.style.backgroundColor = "green";
            }
        });
    
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("buttonRemove");
        removeButton.addEventListener("click", () => {  
            myLibrary.splice(index, 1); // Remove book from array
            domElement.remove(); // Remove book from DOM
    
        });
    
        domElement.appendChild(readButton);
        domElement.appendChild(removeButton);
    }
}