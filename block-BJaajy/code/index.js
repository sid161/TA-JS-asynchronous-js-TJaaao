let times = [1,2,3,4];
let timesPromise = times.map(second => new Promise((res) => {
    setTimeout(() => res(Math.random(), second * 1000))
})
);

Promise.all(timesPromise).then(console.log);

Promise.all(ti)
const gitUser = ['akshay','akash','siddharth','shubham','narendra'];
const usersPromises = gitUser.map((user) => {
   return fetch(`https:\\www.github.com\`${user}`)
    .then((res) => res.json()

    );
});

Promise.all(usersPromises).then(users => {
    users.forEach(user => console.log(user.followers));
});


let promiseOne = fetch( `https://random.dog/woof.json`)
.then((resolve) => resolve.json());

let promiseTwo = fetch(`https://aws.random.cat/meow`)
.then((resolve) => resolve.json());

Promise.race([promiseOne, promiseTwo]).then(console.log);

Promise.allSettled([one,two,three]).then(console.log);
Promise.all([one, two, tree]).then(console.log);