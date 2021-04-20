let modalWindow = document.querySelector('.modal-window');
let modalClose = document.querySelector('.modal-close');
let openButton = document.querySelector('.btn');
let booksUL = document.querySelector('.book-list');
let charactersUL = document.querySelector('.characters');

const booksUrl = 'https://www.anapioficeandfire.com/api/books';

function displayCharacters(characters){
    characters.map((character) => fetch(character).then((res) => res.json())).then((characterData) => {
        characterData.forEach((character) => {
            let li = document.createElement('li');
            li.innerText = `${ch.name} : (${ch.aliases.join(' ')})`
            charactersUL.append('li');
        })
    }) ;         // display character in array form
}

function displayBooks(data){
    data.forEach((book) => {
        booksUL.innerHTML = '';
        let li = document.createElement('li');
        let h3 = document.createElement('h3');
        h3.innerText = book.name;
        let p = document.createElement('p');
        p.innerText = book.authors.join('');
        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = `Show Characters (${book.characters.length})`;

        button.addEventListener('click', () => {
            modalWindow.style.display = 'block';
            displayCharacters(book.characters);
            modalWindow.querySelector('.modal-close').addEventListener('click', () => {
                modalWindow.style.display = "none";
            });
        })
        li.append(h3,p,button);
        booksUL.append(li);
    })
}

function fetchBooks() {
    fetch(booksUrl).then((res) => res.json()).then(booksData => {
        displayBooks(booksData);
    })
}

fetchBooks();

