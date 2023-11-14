const express = require("express");
const { json } = require("express");
const connect = require("./config/database");
const userRoute = require("./routes/userRouter");
const flightRouter = require("./routes/flightRouter");

connect ();

const app = express();
app.use(json());
// app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", userRoute);
app.use("/api/users", userRoute);
app.use("/flights", flightRouter);

app.get("/", (req,res) => {
    res.send("<h1>Booking Flight App</h1>");
});

app.listen(5000, () => console.log(`Server Running at Port 5000`));



