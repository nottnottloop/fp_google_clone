const express = require ('express');
const router = express.Router();

const results = require("./results");

router.get('/', (req, res) => {
		res.set('Content-Type', 'application/json');
		res.send(JSON.stringify(results, null, 2));
});

router.get('/:id', (req, res) => {
	res.set('Content-Type', 'application/json');
		if (results[req.params.id]) {
			res.status(200);
			res.send(JSON.stringify(results[req.params.id]));
		} else {
			res.status(404);
			res.send(JSON.stringify([{title: "404!", desc: "Oops, you searched something that doesn't exist! Yup definitely doesn't exist", url: ""}]));
		}
});

module.exports = router;
  