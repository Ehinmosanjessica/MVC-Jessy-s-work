
// const app = http.createServer((request, response) => {
// //  response.statusCode = 200,
// //  response.setHeader(`content-type`, 'text/plain')

// // response.writeHead(200, {'content-type': 'application/json'}),
// //  response.end('{"data": " I am doing the right thing right?"}')


// if (request.method == 'GET' && request.url == '/') {
//     response.writeHead(200, {'content-type': 'application/json'})
//     return response.end('{"data": "commom I am getting it right?"}')
// } else if  (request.method == 'GET' && request.url == '/host') {
//     response.writeHead(200, {'content-type': 'application'})
//     return response.end('{"data": "Whats up Mr server!"}')
// }
// })



// app.listen(2013, () => {
//     console.log(`Server is Running up on PORT: 2013`)
// })


const http = require('http')


const application = http.createServer((request, response) => {

// response.writeHead(200, {'content-type': 'application/json'})
// response.end('{"data": "Yoo!"}')


if (request.method == 'Get' && request.url =='/') {
    response.writeHead(200, {'content-type': 'application/json'})
    return response.end(`{"data": "Welcome to Jessica's server!"}`)

}else if (request.method == 'Get' && request.url =='/about') {
    response.writeHead(200, {'content-type': 'application/json'})
    return response.end(`{"data": "My name is Jessica, and I'm learning Backend Development"}`)

}else if (request.method == 'Get' && request.url =='/contact') {
    response.writeHead(200, {'content-type': 'application/json'})
    return response.end(`{"data": "You can contact me at jessica@example.com"}`)

} 
// response.writeHead(404, {'content-type': 'application/json'})
// return response.end(`{"data": "Page Not Found"}`)


})




application.listen(2011, () => {
    console.log(`Server is Running up on PORT: 2011`)
})