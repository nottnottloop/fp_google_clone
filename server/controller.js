const express = require ('express');
const router = express.Router();

const results = require("./results");

const notFound = (req, res) => {
	res.status(404);
	res.send(JSON.stringify([{title: "404!", desc: "Oops, you searched something that doesn't exist! Yup definitely doesn't exist", url: ""}], null, 2));
}

router.get('/', (req, res) => {
		res.set('Content-Type', 'application/json');
		notFound(req, res);
});

router.get('/:id', (req, res) => {
	res.set('Content-Type', 'application/json');
		if (results[req.params.id]) {
			res.status(200);
			res.send(JSON.stringify(results[req.params.id], null, 2));
		} else {
			notFound(req, res);
		}
});

module.exports = router;
