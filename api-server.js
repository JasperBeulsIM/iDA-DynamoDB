/**
 * My API Server
 */
const express = require("express");
const morgan = require("morgan");

// DynamoDB
const AWS = require("aws-sdk");
AWS.config.update({region: "eu-west-1"});
const dynamodb = new AWS.DynamoDB();

const app = express();

export function putItem(table, item, callback) {
    let params = {
        TableName: table,
        Item: {}
    };

    for (let key of Object.keys(item)) {
        let value;
        if (typeof item[key] === "string") {
            value = {S: item[key]};
        } else if (typeof item[key] === "number") {
            value = {N: "" + item[key]};
        } else if (typeof item[key] === typeof Array) {
            value = {SS: item[key]};
        }
        params.Item[key] = value;
    }
    dynamodb.putItem(params,callback);
}

export function getAllItems(table, callback) {
    let params = {
        TableName: table,
    };

    dynamodb.scan(params,callback);
}

export function getItem(table, idName, id, callback) {
    let params = {
        TableName: table,
        Key: {}
    };

    params.Key[idName] = {S: id};

    dynamodb.getItem(params,callback);

}

dynamodb.getItem(params, function (err, data) {
    if (err) { // error
        console.log(err, err.stack);
    }
    else { // Sucessful response
        console.log(data);
    }
}

// Add logging to the mix, couple morgan middleware
const logger = morgan("tiny");
app.use(logger);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/person", (req, res) => res.json(
    // dynamoDBInstance.get() => later
    // Return js obj mock
    dynamodb.getItem(params, function (err, data) {
            if (err) { // error
                console.log(err, err.stack);
            }
            else { // Sucessful response
                console.log(data);
            }
        }
    )
));


app.post("/jaser", (req, res) => {
    // Get data from request (req)
    // Do something or save to DynamoDB
    // Send answer
    res.status(201).json({
        "status": "ok",
    });
});

app.listen(4000, () => console.log("Example app listening on port 4000!"));