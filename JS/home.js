import fetch from 'node-fetch'
// globalThis.fetch = fetch


fetch('http://localhost:3000/webpagedata')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
