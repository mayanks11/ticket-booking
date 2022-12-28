const router = require('express').Router();
const bus = require('../models/bus');

// Insert 
router.post('/api/bus', async(req, res) => {
    try {
        const newItem = new bus({
            from: req.body.from,
            to: req.body.to,
            seats: req.body.seats,
            avaiableSeats: req.body.avaiableSeats,
            busId: req.body.busId,
            contact: req.body.contact,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime
        })
        const save = await newItem.save()
        res.status(200).json(newItem);
    } catch (error) {
        res.json(error)
    }
})

router.post('/api/search', async(req, res) => {
    try {
        const reqFrom = req.body.from;
        const reqTo = req.body.to;
        const item = await bus.find({from: reqFrom, to: reqTo});
        res.status(200).json(item);
    } catch (error) {
        res.json(error);
    }
})

router.delete('/api/bus/:id', async (req,res)=>{    
    try {
        console.log(req.params.id)
        const deleteItem = await bus.deleteOne({busId: req.params.id});
        res.status(200).json('Item deleted');
    } catch (error) {
        res.json(error)
    }
})

router.get("/api/buses", async(req, res) => {
    try {
        const entries = await bus.find({})
        res.status(200).json(entries);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;