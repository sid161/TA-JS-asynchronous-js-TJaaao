let url = `https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30`;
let newsElem = document.querySelector('.news');
let select = document.querySelector(select);

function renderNews(news){
    news.forEach((newsItem) => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = newsItem.imageUrl;
        let div = document.createElement('div');
        let span = document.createElement('span');
        span.classList.add('source');
        span.innerText = newsItem.newsSite;
        let h3 = document.createElement('h3');
        h3.innerText = newsItem.title;
        let a = document.createElement('a');
        a.href = newsItem.url;
        let button = document.createElement('button');
        a.append(button);
        button.innerText = 'Read More';
        div.append(span,h3,button);
        li.append(img,div)
        newsElem.append(li);
    });
}

function displayOptions(sources) {
    sources.forEach(source => {
        let option = document.createElement('option');   // ui of select
        option.innerText = source;
        option.value = source
        select.append(option)
    })
}

fetch(url)
.then((res) => res.json())
.then((news) => {
    console.log(news);
    renderNews(news); // func created above is called
    let allSources = Array.from(new Set(news.map((n) => n.)))
})

select.addEventListener('change', (event) => {
    
})