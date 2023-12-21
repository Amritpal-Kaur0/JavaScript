const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mongowithjwt');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    }
},
{
    timestamps: true,
}
);

// AdminSchema.pre('save', function (next) {
//     if (!isValidUsername(this.username)) {
//         const validationError = new mongoose.Error.ValidationError(this);
//         validationError.errors.username = new mongoose.Error.ValidatorError({
//             message: 'Invalid username',
//             path: 'username',
//             value: this.username
//         });
//         return next(validationError);
//     }
//     if (!isValidPassword(this.password)) {
//         const validationError = new mongoose.Error.ValidationError(this);
//         validationError.errors.password = new mongoose.Error.ValidatorError({
//             message: 'Invalid password',
//             path: 'password',
//             value: this.password
//         });
//         return next(validationError);
//     }
//     next();
// });
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    purchasedCourses: [
        {
          type: mongoose.Types.ObjectId,
          ref:'Course',
        },
      ],
},
{
    timestamps: true,
}
);

const CourseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    imageLink:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        required:true
    },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}