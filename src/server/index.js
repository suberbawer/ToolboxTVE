const express = require('express')

const app = express()

app.use(express.static('dist'))

app.get('/api/getText', (req, res) => {
	const param = req.query.txt
	param ? res.send({ txt: param }) : res.status(500).send({ errMsg: 'Something went wrong'}) // We can use an util error handler here, no needed this time.
})

app.listen(8080)

module.exports = app
