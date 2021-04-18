// DEPENDENCIES
const router = require("express").Router();
const db = require("../models");


router.get('/workouts', (req, res) => {
    //res.send({type: 'GET'});
   db.workouts.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/workouts/range', (req, res) => {
    //res.send({type: 'GET'});
});

router.post('/workouts', (req, res) => {
    //res.send({type:'POST'});
    //console.log(req.body);
    db.workouts.insert(req.body)
        .then(dbworkouts => {
            res.send(dbworkouts);
        })
        .catch(err => {
            res.send(err);
        });
});

router.put('/workouts/:id', (req, res) => {
    // res.send({type:'PUT'});
    db.workouts.update(
        {
          _id: mongojs.ObjectId(req.params.id)
        },
        {
          $push: {
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            weight: req.body.weight,
            reps: req.body.reps,
            sets: req.body.sets,
            distance: req.body.distance
          }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

router.delete('/workouts/:id', (req, res) => {
   // res.send({type:'DELETE'});
   //console.log(req.params.id);
   db.workouts.remove(
        {
        _id: mongojs.ObjectID(req.params.id)
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
     );
});



module.exports = router;