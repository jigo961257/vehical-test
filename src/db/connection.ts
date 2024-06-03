import { Connection, Request, ConnectionConfiguration } from 'tedious'

// try to updaet the post if it's nessaory to change it.
const config: ConnectionConfiguration = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'your_username', // update me
            password: 'your_password', // update me
        }
    },
    options: {
        database: "CVISDB1",
    }
}

const connection = new Connection(config)

connection.on('connect', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connect the DB.");

    }
})

connection.connect();
