const url = "https://api.unsplash.com/photos/?client_id=Uc1kCpGP3RCSTjoZSQa3jomIdz4rxaFnJSt5-9XPTck"; // 2nd step ye authorisation ke niche url apni access key chipkapo yaha
const searchUrl = "https://api.unsplash.com/search/photos?query=office";
const root = document.querySelector('images');
function fetch(url, sucessHandler) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => sucessHandler(JSON.parse(xhr.response));
    xhr.onerror = function (){
        console.error('Something went wrong');
    };
    xhr.send();
}

fetch(url, function (images)){
    root.innerHTML = "";

    images.forEach(image => {
        let li = document.createElement("li");
        let img = document.createElement('img');
        img.src = img.urls.thumb;
        li.append('img');
    })
}

