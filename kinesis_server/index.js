const { Neurosity } = require("@neurosity/sdk");
const axios = require('axios');
var ks = require('node-key-sender');
require("dotenv").config();


//Neurosity API Auth

const deviceId = process.env.DEVICE_ID || "";
const email = process.env.EMAIL || "";
const password = process.env.PASSWORD || "";

//Verify ENV variables

const verifyEnvs = (email, password, deviceId) => {
    const invalidEnv = (env) => {
      return env === "" || env === 0;
    };
    if (invalidEnv(email) || invalidEnv(password) || invalidEnv(deviceId)) {
      console.error(
        "Please verify deviceId, email and password are in .env file, quitting..."
      );
      process.exit(0);
    }
  };
  verifyEnvs(email, password, deviceId);
  
  console.log(`${email} attempting to authenticate to ${deviceId}`);


const neurosity_jump = new Neurosity({
    deviceId
  });
const neurosity_duck = new Neurosity({
    deviceId
});


// Main function

const main = async () => {
    await neurosity_jump
      .login({
        email,
        password
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });   

      
    console.log("Logged in");
    const sali = true;
    
    neurosity_jump.predictions("rightIndexFinger").subscribe((prediction) => {
        console.log("prediction", prediction);
        if (prediction.probability > 0.15){
            axios.post('http://localhost:5000/jump')
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
                    }
                });
    ///TODO: Add neurosity_duck, so it does not overload the Flask server. 
    
  };
  
  main();