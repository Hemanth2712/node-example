const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

// For getting all bikes
Router.get("/bikes", (req, res) => {
    mysqlConnection.query("select * from bikes", (err, results, field) => {

        if (!err) {
            res.send(results);
        } else {
            Console.log(err)
        }
    });
});

// For getting an specific bike

Router.get("/bike/:id", (req, res) => {
    mysqlConnection.query("select * from bikes where idbikes = ?", [req.params.id], (err, results, field) => {

        if (!err) {
            res.send(results);
        } else {
            Console.log(err)
        }
    });
});

// For Inserting records / create method

Router.post("/bikes/add", (req, res) => {
    mysqlConnection.query("INSERT INTO bikes (idbikes,bike_name) values (?,?)", [req.body.bikeID, req.body.bikeName], (err, results, field) => {

        if (!err) {
            res.send("Record inserted");
        } else {
            Console.log(err)
        }
    });
});


// For updating

Router.put("/bike/update", (req, res) => {
    mysqlConnection.query("update bikes set bike_name = ? where idbikes = ?", [req.body.bikeName, req.body.bikeID], (err, results, field) => {

        if (!err) {
            res.send("updated Successfully");
        } else {
            Console.log(err)
        }
    });
});

// For Deleting records

Router.delete("/bike/delete/:id", (req, res) => {
    mysqlConnection.query("delete from bikes where idbikes = ?", [req.params.id], (err, results, field) => {

        if (!err) {
            res.send("Deleted successfully");
        } else {
            Console.log(err)
        }
    });
});

module.exports = Router;