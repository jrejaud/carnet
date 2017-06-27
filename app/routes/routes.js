module.exports = function(app, db) {
    app.post('/notes', function(req, res) {
        //Create a notes
        console.log("Note body:")
        console.log(req.body);
        res.send("Created a note!");
    });
};
