/**
 * My API Server
 */
const express = require("express");
const morgan = require("morgan");
const myPetsTable = require("./myPetsTable.js");

const app = express();

// Add logging to the mix, couple morgan middleware
const logger = morgan("tiny");
app.use(logger);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/persons", (req, res) => res.json(myPetsTable.get(
    // dynamoDBInstance.get() => later
    // Return js obj mock
)));

app.post("/jaser", (req, res) => {
    // Get data from request (req)
    // Do something or save to DynamoDB
    // Send answer
    res.status(201).json({
        "status": "ok",
    });
});

app.listen(4000, () => console.log("Example app listening on port 4000!"));