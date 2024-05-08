// import mongoose from "mongoose";

// const Connection = async (url) => {
//     try {

//         await mongoose.connect(url);
//         console.log("Connection is successfull......")
//     }catch{
//         console.log("Error while connecting.....")
//     }
// }

// export default Connection;


import mongoose from "mongoose";

const Connection = async (URL) =>{
    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log("Connection is Successfull...................................");
    }catch(e){
        console.log("Error in connecting...........", e);
    }
}


export default Connection