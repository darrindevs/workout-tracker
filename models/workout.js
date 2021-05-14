const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Select an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Name your exercise"
        },
        weight: {
            type: Number,
            required: "Enter the weight in lbs"
            
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number,
            required: "Enter the exercise duration in minutes"
        },
        distance: {
            type: Number
        }
    }]
    
});

//todo figure out how to get the combined 
//? is this where we need to do that?
//todo  Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the MongoDB documentation on the $addFields, the MongoDB documentation on the $sum operator, and the Mongoose documentation on aggregate functions to learn how it can be accomplished.

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

