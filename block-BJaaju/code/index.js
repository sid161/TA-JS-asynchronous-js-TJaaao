let input = document.querySelector('input');
function handleInput(event){
    if(event.keyvalue === 13){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        let randomImg = JSON.parse(xhr.response);
    }
}

input.addEventListener('keyup',handleInput);