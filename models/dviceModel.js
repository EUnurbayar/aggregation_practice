import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
    name:{ 
        type: String
    },
    category:{
       type: String
    },
    manufacturer:{
        type: String
    },
    price:{
        type: Number
    }

});

export default mongoose.model('Device', deviceSchema);