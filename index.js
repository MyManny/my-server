const http = require("http")
let server =http.createServer(function (req, res) {
    // This callback handles each incoming request.
    //this sends the data:
    res.write('Hello, FSD!!')

    //This closes the connection:
    res.end()
})
server.listen(3000, function(){
    console.log("Server is live!")
}) //3000 is a port number