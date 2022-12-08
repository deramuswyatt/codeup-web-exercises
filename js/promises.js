"use strict"


// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(resp => resp.json())
// .then(data => console.log(data))
// // .catch(error => {
// //     console.log(("do something Dido"));
// //     console.log(error);
// });

// fetch(url, {headers: {'Authorization': 'gitKey'}})

fetch('https://api.github.com/users', {headers: {'Authorization': "gitKey"}}).then( response => {
    response.json().then( users => {
        users.forEach( userObj  => {
            // do something with the username login
            // Octokit.js
// https://github.com/octokit/core.js#readme
            const octokit = new Octokit({
                auth: 'gitKey'
            })

            // await octokit.request('GET /repos/{owner}/{repo}/events{?per_page,page}', {
            //     owner: 'OWNER',
            //     repo: 'REPO'
            // })
            console.log(userObj.login);
        });
    });
});

