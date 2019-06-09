const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

/* tried to add another api. But didn't worked
const api2 = require('./server/routes/api2');*/


const port = 3000;

const app = express();

/*to prevent CORS error*/
var cors = require('cors');
app.use(cors());

//giving the access to distributable folder
app.use(express.static(path.join(__dirname,'dist'))); //spesifing the folder where all the angular code is placed

//parsers the text as url encoded data
app.use(bodyParser.urlencoded({extended:true}));
//parses text as json
app.use(bodyParser.json());

//for api router
app.use('/api',api);

//app.use('/api2',api2);      attempted to add another api.Didn't worked

//for any other router
app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'dist/service-station/index.html'));
});

app.listen(port,function(){
    console.log('server running on port ' + port);
});