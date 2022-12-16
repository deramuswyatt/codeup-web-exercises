"use strict"


    const lastCommit = (username) => {
    // let pushEvents = {}
        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': 'gitKey'}})
            .then(response => response.json())
            .then(users => {
                let date = users[0].created_at
                let formattedDate = date.substring(0,10)
                console.log(formattedDate)
                return
            }).catch(error => console.log(error))


    }
console.log(lastCommit("deramuswyatt"))
//




