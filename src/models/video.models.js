import mongoose,{Schema} from moongose;
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,  //automatically will trim the white spaces
        index:true, //will improve the in query optimization

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,  
       

    },
    fullname:{
        type:String,
        required:true,
        
        index:true,
        trim:true,  
       

    },
    avatar:{
        type:String,
        required:true,

    },
    coverImage:{
        type:String

    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required "]
    },
    refreshToken:{
        type:String
    }
},{timestamps:true});
export const User=new moongose.model("User",userSchema);