// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
var API_Random = "https://secrets-api.appbrewery.com/random";

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req,res) => {
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.    
    try {
        const apiResult = await axios.get(API_Random);
        res.render("index.ejs", {
            secret: apiResult.data.secret,
            user: apiResult.data.username,
        });
        
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
        
    }
    
});



// 6. Listen on your predefined port and start the server.
app.listen(port, ()=> {
    console.log("App is running at " + port);
});
