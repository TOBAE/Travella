const express = require("express");
const { json } = require("express");
const connect = require('./config/database');
const flightRouter = require('./routers/flightRouter');

connect ()

const app = express();
app.use(json());


app.use("/flights", flightRouter);


app.get('/', (req, res) => {
    res.send('<h1>Booking Flight App</h1>');
});


app.listen(3000, () => console.log(`Server Running at Port 3000`));



