const express = require("express");
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get("/", async (req, res, next) => {
	try {
		const celebrities = await Celebrity.find();
		res.render('celebrities/index', { celebrities }); // Рендерим файл index.ejs из папки views/celebrities
	} catch (error) {
		next(error);
	}
});

module.exports = router;
