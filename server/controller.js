const express = require ('express');
const router = express.Router();

const results = require("./results");

router.get('/', (req, res) => {
		res.set('Content-Type', 'application/json');
		res.send(JSON.stringify(quotes));
  });

router.get('/random', (req, res) => {
		res.set('Content-Type', 'application/json');
		res.send(JSON.stringify(getRandomQuote()));
});

router.get('/:id', (req, res) => {
	res.set('Content-Type', 'application/json');
		const quoteId = parseInt(req.params.id);
		if (quoteId < quotes.length) {
			res.status(200);
			res.send(JSON.stringify(quotes[quoteId]));
		} else {
			res.status(404);
			res.send('404: quote not found');
		}
});

module.exports = router;
  