const betterDeveloper = 'João'

function whoIsBetterCallback(callback, errorCallback) {
    return new Promise((resolve, reject) => {
        if (betterDeveloper != 'Fábio' && betterDeveloper != 'Camila') {
            reject({
                name: 'This is wrong! ',
                message: betterDeveloper + '? Really!'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: 'CDFs are the best!'
            })
        }
    })
}

whoIsBetterCallback()
    .then((result) => {
        console.log(result.name + '? Yeah! ' + result.message)
    }).catch((error) => {
        console.log(error.name + error.message)
    });