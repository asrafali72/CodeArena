const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
    roomId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    player1: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    player2: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    problemId: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['WAITING', 'ACTIVE', 'FINISHED'], 
        default: 'WAITING' 
    },
    winner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }
}, { timestamps: true });

module.exports = mongoose.model('Battle', battleSchema);