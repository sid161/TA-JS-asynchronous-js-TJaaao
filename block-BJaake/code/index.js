let news_source = document.querySelector('#news_source');
let news = document.querySelector('#news');


function fetch(url)
let xhr = new XMLHttpRequest();
xhr.open('GET',`https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30`);
xhr.onload = () => {
    resolve(JSON.parse(xhr.reponse))
}
xhr.onerror = () => {
    reject(`Something went wrong`);
}
xhr.send();

fetch(`https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30`);