
//You can't pass IDs as Strings to Mongo, need to pass them as an ObjectID object
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    //CREATE
    app.post('/notes', function(req, res) {
        //Create a notes
        console.log("Creating a note:");
        console.log(req.body);

        const note = {
          title: req.body.title,
          text: req.body.body
        };

        db.collection('notes').insert(note, (err, result) => {
            if (err) {
              res.send({"error" : "Cannot create a note"});
            } else {
              res.send(result.ops[0]);
            }
        });
    });

    //READ
    app.get('/notes/:id', (req, res) => {
        //Return the note assigned to that ID
        //Get the parameters (from the URL)
        const details = { "_id": new ObjectID(req.params.id)};
        db.collection('notes').findOne(details, function(err, item) {
            if (err) {
              res.send({"error" : "Cannot find note with id "+req.params.id});
            } else {
              res.send(item);
            }
        });
    });

    //UPDATE
    app.put('/notes/:id', (req, res) => {
        const details = {"_id": new ObjectID(req.params.id)};
        const note = {
          title: req.body.title,
          text: req.body.body
        };
        db.collection('notes').update(details, note, (err, result) => {
            if (err) {
              res.send({"error" : "Cannot update note with id "+req.params.id});
            } else {
              res.send(note);
            }
        });
    });

    //DELETE
    app.delete('/notes/:id', (req, res) => {
      const details = { "_id": new ObjectID(req.params.id)};
      db.collection('notes').remove(details, function(err, item) {
          if (err) {
            res.send({"error" : "Cannot remove note with id "+req.params.id});
          } else {
            res.send("Note "+req.params.id+" deleted");
          }
      });
    });
};
