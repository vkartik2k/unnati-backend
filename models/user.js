const mongoose = require('mongoose')
const validator = require('validator');
const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true, 'Please enter First name!']
    },
    lastName:{
        type:String,
        required:false,
    },
    phoneNumber:{
        type:Number,
        required:[true, 'Please fill a valid phone number!'],
        minlength: 10,
        maxlength: 10,
    },
    username:{
        type:String,
        required:[true, 'Please fill username!']
    },
    email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ['STUDENT','ADMIN','ENTREPRENEUR']
    },
    isAdminApproved:{
        type:Boolean,
        default:false
    },
    isAdminRejected:{
        type:Boolean,
        default:false
    },
    isTeacherRejected:{
        type:Boolean,
        default:false
    },
    isTeacherApproved:{
        type:Boolean,
        default:false
    },
    cafe:{
        type:String,
        required:true
    },
    feesPaid:{
        type:Boolean,
        default:false
    },
    receipts:[{
        type: mongoose.Schema.Types.ObjectId,
         ref: "Receipt"
    }],
    createdAt: { type: Date, default: Date.now },
})
mongoose.model('User',userSchema)