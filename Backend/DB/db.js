const mongoose=require('mongoose')
 const connectDB=async()=>{
    try{  await mongoose.connect('mongodb+srv://sumitra6789012345_db_user:silambu1234@cluster0.1js1td8.mongodb.net/?appName=Cluster0')
    console.log("db connected sucessfully");   

    }catch(err)
    {
        console.log(err);
        
    }
  
}
module.exports={connectDB}
