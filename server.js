const express = require('express')
const app = express()
const path = require('path')

app.get('/favicon.ico', (req, res) => {
	res.status(204).end()
})

app.use(
	express.static('public', {
		setHeaders: (res, path) => {
			if (path.endsWith('.css')) {
				res.setHeader('Content-Type', 'text/css')
			}
		},
	})
)
app.get('/scripts.js', (req, res) => {
	res.setHeader('Content-Type', 'application/javascript')
	res.sendFile(__dirname + '/scripts.js')
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))

	// res.send('Hello World')
})

app.listen(3000, () => {
	console.log('Server is running on port 3000')
})
