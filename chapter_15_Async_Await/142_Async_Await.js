/**getToken()
    .then(function (token) {
        return getUser(token);
    })
    .then(function (user) {
        console.log(user);
    });


async function run() {
    let token = await getToken();
    let user = await getUser();
}*/


function getToken() {
    return Promise.resolve("abc123");
}

function getUser(token) {
    return Promise.resolve({ name: "Megha", token });
}

async function run() {
    let token = await getToken();
    let user = await getUser(token);
    console.log(user);
}

run();