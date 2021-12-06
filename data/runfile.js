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
app.get("/:name", async(req, res)=> {
    const dataFromPython = await pythonPromise();
    res.send(dataFromPython + req.params.name)
})




app.listen(4000, () => console.log('Application listening on port 4000'))