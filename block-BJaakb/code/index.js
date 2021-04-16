function fetchData(url) {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
        }
        xhr.onerror = () => reject('something went wrong');
        xhr.send();
    })
        
    };

    let dataPromise = fetchData('https://api.github.com/users').then(userInfo => userInfo.followers_url)
    .then(followersURL => {
        return fetchData(followersURL);
    }
