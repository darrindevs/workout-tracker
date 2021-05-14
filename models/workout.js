//✅
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
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


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

