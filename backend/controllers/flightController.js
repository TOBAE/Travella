const getFlights = require("../model/flight");
const {v4: uuid} = require("uuid");

// Add Flight
exports.addFlight = async(req,res) => {
    try{

        const {from, to, date, promoCode} =  await req.body;

        const newFlight = {
            id: uuid(),
            from,
            to,
            date,
            promoCode
        }       
    
        getFlights.create(newFlight);
        if(!newFlight){
            res.status(400).json({
                message: 'Invalid Flight',
            })
        }
        res.status(201).json({
            message: 'Flight Created',
            newFlight,
        })
    }
    catch (error){
        res.status(500).json({meassage: error.message})
    }
};


//Get All Flight
exports.getFlights = async(req, res) => {
    try{
        const allFlights = await getFlights.find();

        if (allFlights.length === 0){
            return res.status(404).json({
                message: 'No Flight Found',
            });
        }

        res.status(200).json({
            meassage: "All flights",
            allFlights,
        })
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
}


//Get Single Flight
exports.getFlight = async(req,res) =>{
    try{
        let id = {_id: req.params.id};
  
        const flight = await getFlights.findOne(id);
        
        if(!flight) return res.status(400).json({
            message: 'Flight Not Found',
        })
        
        return res.status(200).json({
            message: "Flight Found",
            flight,
        })
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Update Flight
exports.updateFlight = async (req, res) => {
    try{
        let id = {_id: req.params.id};
        const flight = await req.body;
        const updateFlight = await getFlights.findOneAndUpdate(id, flight, {new: true});
    
        if(!updateFlight){
            res.status(400).json({
                message: "Flight Not Updated",
                getFlights: updateFlight,
            });
        }

        res.status(200).json({
            message: "Flight Updated",
            getFlights: updateFlight,
        });
         
    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    }

  };

  
// Delete Flight
  exports.deleteFlight = async (req, res) => {
    try{
        let id = {_id: req.params.id};

        const deleted = await getFlights.findByIdAndDelete(id);

        if(!deleted) {
            return res.status(400).json({
                meassage: 'Flights Not Deleted'
            })
        }

        res.status(200).json({
            message: "Flight deleted",
            deleted,
        });
    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  };