let promise = new Promise((resolve,reject) => {
    setTimeout((val) => {
        resolve(9);
    },1000)
}).then((value) => {
    setTimeout(() => {
        resolve(10);
    },2000)
}).then((value) => {
    setTimeout(() => {
        resolve(11)
    },3000)
}).then((value) => {
    setTimeout(() => {
        resolve(12)
    },4000)
})

const gitUser = ['akshay','akash','siddharth','shubham','narendra'];
const gitUserData = Promise.all(gitUser.map(user) => {
    fetch(`https:\\www.github.com\user\getify`)
    .then((res) => res.json)
    .then((value) => console.log(value))'
})

fetch( `https://random.dog/woof.json`)
.then((resolve) => resolve.json())
.then((value) => console.log(value))