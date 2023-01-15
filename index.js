class Book {
    constructor(position, title, author, pages) {
        this.position = position;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }

    info() {
        console.log(`${this.title} ${this.author} ${this.pages} ${this.read}`);
    }
}


class Library {
    constructor() {
        this.books = [];
    }
    
    addBook(newBook) {
        this.books.push(newBook);
        // Create card for new book
        let newBookCard = $('<div/>')
        newBookCard.append(`${newBook.title}, by ${newBook.author}`)
        newBookCard.append(`<div>Pages: ${newBook.pages}</div>`);
        newBookCard.append(`<button>Read</button>`);

        let clear_button = $(`<button>Clear</button>`)
        clear_button.on("click", () => {
            // remove book from array
            this.books.splice(newBook.position, 1);
            // remove card from DOM
            let card = clear_button.parent();
            card.remove();
        })
        newBookCard.append(clear_button);

        $('#library-grid').append(newBookCard);
    }
}

let library = new Library;

function handleSubmit() {
    bookTitle = $('#book-title').val();
    bookAuthor = $('#book-author').val();
    bookPages = $('#book-pages').val();

    let newBook = new Book(library.books.length, bookTitle, bookAuthor, bookPages);

    library.addBook(newBook);
}

$(document).ready(function() {
    let test = new Book(library.books.length, 'h', 'h', 2);
    library.addBook(test);

    $('#new-book-form').submit(function(e){
        e.preventDefault();
        handleSubmit();
    })
})