const express = require('express')
const app = express()
app.get('/',(req, res) => {
    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['python.py']);
    pyProg.stdout.on('data', function(data){
        console.log(data.toString());
        res.write(data);
        res.end('end');

    });



})
const {Pythonshell, PythonShell} = require('python-shell');
let pyshell = new PythonShell('python.py')
pyshell.on('message', function(message){
    console.log(message)
}

)

pyshell.end(function(err){
    if (err){
        throw err;
    }
    console.log('finished')
})

const pythonPromise = () => {
    return new Promise((resolve, reject) => {
        const python = spawn("python", ["./python.py"]);
        python.stdout.on("data", (data) => {
            resolve(data.toString())
        })
    })


}
const expres = require("express")
const port = process.env.PORT 
const app1 = express();
app1.get(/.*/, function(req, res){
    res.sendfile(__dirname + "/dist/index.html")

});
app1.listen(port)



app.get("/:name", async(req, res)=> {
    const dataFromPython = await pythonPromise();
    res.send(dataFromPython + req.params.name)
})

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares =jsonServer.defaults();

server.use(middlewares)
server.use(router);




app.listen(4000, () => console.log('Application listening on port 4000'))