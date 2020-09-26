const express = require('express');
const bodyParser = require('body-parser')  ;                /* робим запит до модуля 'body-parser'*/
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/dataSite'));           /*вказує корневу папку де лежать файли сайта*/

app.use(bodyParser.json());

                                                                // create application/json parser
let jsonParser = bodyParser.json();

                                                                    // create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });

                                                                // get file from root directory
app.get('/', (req, res) => {
    res.sendFile('indexx.html')
});


app.post('/about',urlencodedParser,  (req, res) => {

    let body = req.body;

    if(body.login ==='hall' && body.password==='hall') {

        res.writeHead(301,{Location: 'http://localhost:3000/hall/hall.html'});
        res.end();
    }

});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
