var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

var router = express.Router();

router.post('/add', function(req, res){
	var x = Math.abs(req.body.num1) + Math.abs(req.body.num2);
	res.json({addition: x});
});

router.post('/divide', (req, res) => {
	var x = req.body.num1 / req.body.num2;
	res.json({division: x});
});

router.get('/ns/:lim', (req, res) => {
	var x = parseInt(req.params.lim);
	var y = ((x) * (x + 1)) / 2;
	res.json({sum_till_n: y});
});


router.put('/insert', (req, res) => {
	var {list, to_insert}  = req.body;
	if(list[list.length - 1] % 2 == 0) {
	    list.push(to_insert);
    }
	res.json({new_list: list});
});



app.use('/api/v1/testing/', router);
app.listen(8081, () => {console.log("server started on port 8081. You can access it via http://localhost:8081/");});
