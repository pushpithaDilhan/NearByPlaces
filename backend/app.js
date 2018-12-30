const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// use data repository instead of a database
var data = {
			'kandy':['Dalada Maligawa', 'Magul maduwa'],
			'colombo':['Nelum Kuluna','Vihara Maha Devi Park','Museum','Old Parliment','Pettah'],
			'galle':['Fort','Rumassala','Hikkaduwa','Cricket Ground']
		};

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/getLocations', (req, res)=>{
	const typedWord = req.body.typedCity;
	res.json({msg:true, data:data[typedWord]});
})


app.listen(3001, ()=>{
	console.log('listening to port 3001')
})