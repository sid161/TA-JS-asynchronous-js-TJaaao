const img = document.querySelector("img");
const name = document.querySelector("h3");
const workingAt = document.querySelector("p");
const following = document.querySelector(".following");
const followers = document.querySelector(".followers");
const input = document.querySelector('input');
    
    function displayUI(data){
             img.src = data.avatar_url;     // image coming from initialisation
            name.innerText = data.name;
            workingAt.innerText = data.company;
            following.innerText = `Following: ${data.following}`;  // this is wrapped becoz it will increase or decreasse
            followers.innerText = `Followers: ${data.followers}`;
    }

    
     function handleChange(event){
        if(event.keyCode === 13){
            let xhr = new XMLHttpRequest(); // new object created
            xhr.open('GET', `https://api.github.com/users/${event.target.value}`); // open method opens up any url accept 2 parameter method and url
            xhr.onload = function() {
            let userData = JSON.parse(xhr.response);  // response gives data in string and to convert in obj we use JSON.parse
            displayUI(userData);
        };
        xhr.onloaderror = function(){
            console.log('Something went wrong');
            };
       
            xhr.send(); // used for sending network req
            event.target.value = ''; // input to be empty after displaying
            
        }
     }
     input.addEventListener('keyup', handleChange);
   //  UpEqjftp_9LDhKWkgtvRFJtk7QdTwReCdw3FPd47uSY
    // https://api.unsplash.com/photos/random

