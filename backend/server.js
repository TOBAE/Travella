const express = require("express");
// import express from "express";
// import {json} from "express";
const { json } = require("express");
// import cors from "cors";
const cors = require("cors");
// import connect from "./config/database";
const connect = require("./config/database");
// import userRoute from "./routes/userRouter";
const userRoute = require("./routes/userRouter");
// import flightRouter from "./routes/flightRouter";
const flightRouter = require("./routes/flightRouter");

connect ();

const app = express();
app.use(json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", userRoute);
app.use("/api/users", userRoute);
app.use("/flights", flightRouter);

const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Booking Flight App</h1>");
});

app.listen(port, () => console.log(`Server Running at Port ${port}`));