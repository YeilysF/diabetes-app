const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const mongoose = require("mongoose"); //Handle MongoDB operations
require('dotenv/config');

const api = process.env.API_URL;

//allow app to request api from server
app.use(cors()); 
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny")); //display log request

//routes
const UserRoutes = require('./routes/Users');
const FoodRoutes = require('./routes/Foods');
const MealRoutes = require('./routes/Meals');
const NutritionRoutes = require('./routes/Nutritions');

app.use(`${api}/Users`, UserRoutes);
app.use(`${api}/Foods`, FoodRoutes);
app.use(`${api}/Meals`, MealRoutes);
app.use(`${api}/Nutritions`, NutritionRoutes);

//Database connection
mongoose.connect(process.env.CONNECTION_DB, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    dbName: "diabetes-app-database"
  })
.then(() => {
    console.log('Database Connection is Ready ....')
})
.catch((err) => {
    console.log(err);
});

//Server
app.listen(3000, ()=> {
    //console.log(api);
    console.log('server is running http://localhost:3000');
})
app.use(express.json());

