import express, { urlencoded } from 'express';
const app = express()

const port = 3000;

app.listen(port, () => {
    console.log('Listening on port 3000')
});

app.use(urlencoded({
    extended: true
}))

app.get('/HelloWorld', function (req, res) {
    console.log('Hello, world!');
    res.status(200).send('Hello, world!');
})

app.get('/HelloWorld/hello', function (req, res) {
    console.log('Hello, world!');
    res.status(200).send('Hello, world!');
})

app.get('*', function(req, res){
    res.status(404).send('Oops! That page does not exist.');
  });

