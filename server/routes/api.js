
//
//	APP VARIABLES
//

const express = require('express');
const router = express.Router();
const googleTrends = require('google-trends-api');

//
//	INTEREST OVER TIME API
//

router.get('/interestOverTime', function (req, res) {

	// Params
	const keyword = req.query.keyword;
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;

	// Header response type
	res.setHeader('Content-Type', 'application/json');

	// Google Trends API call
	googleTrends.interestOverTime({
		keyword: keyword,
		startTime: new Date(startTime),
		endTime: new Date(endTime),
		geo: 'NL',
		category: 32
	}).then(function(results){
			// Success
			res.status(200).json({content: results});
		})
		.catch(function(err){
			// Error
			res.status(400).json({content: err});
		});
});

//
//	RELATED TOPICS API
//

router.get('/relatedTopics', function (req, res) {

	// Params
	const keyword = req.query.keyword;
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;

	// Header response type
	res.setHeader('Content-Type', 'application/json');

	// Google Trends API call
	googleTrends.relatedTopics({
		keyword: keyword,
		startTime: new Date(startTime),
		endTime: new Date(endTime),
		geo: 'NL',
		category: 32
	}).then(function(results){
			// Success
			res.status(200).json({content: results});
		})
		.catch(function(err){
			// Error
			res.status(400).json({content: err});
		});
});

//
//	EXPORT MODULE (router)
//

module.exports = router;
