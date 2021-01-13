const http = require("http");
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.statusCode = 200;
    res.write("Hello world!");
    res.end();
}).listen(port, () => console.log(`Running on port ${port}`));