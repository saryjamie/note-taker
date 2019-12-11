const fs = require('fs');

module.exports = function(app){

    //   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", function(req, res){
        fs.readFile('./db/db.json','utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
             res.json(JSON.parse(data));
          });
    })

    //   * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    app.post("/api/notes", function(req, res){
        fs.readFile('./db/db.json','utf8', (err, data) => {
            if(err) throw err;
            let temp = JSON.parse(data);
            console.log(temp)
            temp.push(req.body)
            fs.writeFile('./db/db.json', JSON.stringify(temp), (err) => {
            if (err) throw err;
                res.json('The file has been saved!')
          });
          });
    })

    //   * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
    app.delete("/api/notes/:id", function(req, res){
        fs.readFile('./db/db.json','utf8', (err, data) => {
            if(err) throw err;
            let temp = JSON.parse(data);
            temp.splice(req.params.id, 1)
            fs.writeFile('./db/db.json', JSON.stringify(temp), (err) => {
                if (err) throw err;
                    res.json('The note has been removed!')
              });
        })
    })

    app.post("/api/clear", function(req, res){
        db.length = 0;

        // res.json({ok: tru});
    })

}








