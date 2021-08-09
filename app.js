const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// setup
const app = express()
app.use(cors())

// app
app.get('/api', (req, res) => {
	res.json({
		message: 'Hello from the server',
	})
})

// server
const db = process.env.DB_CONNECTION.replace(
	/<password>/,
	process.env.DB_PW
).replace(/<db_name>/, process.env.DB_NAME)

mongoose
	.connect(db, {
		useCreateIndex: true,
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: true,
	})
	.then(
		() => {
			console.log('database connected successfully')
		},
		(err) => console.error(err)
	)
const port = process.env.PORT
app.listen(port, () => {
	console.log(`server listening on port ${port}`)
})
