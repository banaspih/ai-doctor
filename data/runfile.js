const express = require('express')
const { spawn } = require('child_process');
const { PythonShell } = require('python-shell');
const path = require('path')
let cors = require('cors')


// https://www.npmjs.com/package/cors#configuring-cors-w-dynamic-origin
var whitelist = ['https://ai-doctor5.web.app'] //you could add more -> ['http://example1.com', 'http://example2.com']
var corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		}
		else 
		{
			callback(new Error('Not allowed by CORS'))
		}
	}
}

const pathToPythonScript = path.join(__dirname, 'python.py');

//------ not associated with Express part (?)
let pyshell = new PythonShell(pathToPythonScript)

pyshell.on('message', function(message) {
	console.log(message)
})

pyshell.end(function(err) {
	if (err) {
		throw err;
	}
	console.log('finished')
})


//------ Express app

let app = express()
app.use(cors())

const pythonPromise = () => {
	return new Promise((resolve, reject) => {
		const python = spawn("python", [pathToPythonScript]);
		python.stdout.on("data", (data) => {
			resolve(data.toString())
		})
	})
}


app.get("/:name", async (req, res) => {
	const dataFromPython = await pythonPromise();
	res.send(dataFromPython) // I dont think you need the name part back. But since you're not using it, Is this in use?  res.send(dataFromPython + req.params.name)
})

app.get('/', (req, res) => {
	const pyProg = spawn('python', [pathToPythonScript]);
	pyProg.stdout.on('data', function(data) {
		console.log(data.toString());
		res.write(data);
		res.end(); // I'm guessing you don't need the "res.end('end')" for the "data with which the user wants to end the response"
	});
})

const PORT_1 = 4000; //port for the first express app (?)
app.listen(PORT_1, () => console.log('Application listening on port:' + PORT_1))


//------ json-server (It's another express server)

//Is this what you want?
const jsonServer = require('json-server')
const server = jsonServer.create() //Returns an Express server.
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
let JSON_SERVER_PORT = process.env.PORT || 3000

server.use(cors())
server.use(middlewares)
server.use(router)
server.listen(JSON_SERVER_PORT, () => {
	console.log('JSON Server is running on port: ' + JSON_SERVER_PORT )
})



/*
	I haven't read every file and I really don't know your intention
	If my assumptions were correct, you would be better off using flask within python 
	and interact with python that way
*/

//My guess is: this is not in use, since there's no '/dist/index.html' in the repo
//Express App 2
// const PORT_2 = process.env.PORT;
// const app2 = express();
// app2.get(/.*/, function(req, res) {
// 	res.sendfile(__dirname + "/dist/index.html")
// });
// app2.listen(PORT_2, () => console.log('Application listening on port: ' + PORT_2))
