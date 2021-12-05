const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const mongoose = require("mongoose"); //Handle MongoDB operations

require('dotenv/config');
const authJwt = require('./helpers/jwt');

const api = process.env.API_URL;

//allow app to request api from server
app.use(cors()); 
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny")); //display log request
app.use(authJwt());

//routes
const BPSRoutes = require('./routes/BloodPressures');
const CategoryRoutes = require('./routes/Categories');
const ExerciseRoutes = require('./routes/Exercises');
const FoodRoutes = require('./routes/Foods');
const GlucoseRoutes = require('./routes/Glucoses');
const InsulinRoutes = require('./routes/Insulins');
const MedicationRoutes = require('./routes/Medications');
const NutritionRoutes = require('./routes/Nutritions');
const UserRoutes = require('./routes/Users');


app.use(`${api}/BloodPressures`, BPSRoutes);
app.use(`${api}/Categories`, CategoryRoutes);
app.use(`${api}/ExerciseRoutes`, ExerciseRoutes);
app.use(`${api}/Foods`, FoodRoutes);
app.use(`${api}/Glucoses`, GlucoseRoutes);
app.use(`${api}/Insulins`, InsulinRoutes);
app.use(`${api}/Medications`, MedicationRoutes);
app.use(`${api}/Nutritions`, NutritionRoutes);
app.use(`${api}/Users`, UserRoutes);

//Database connection
mongoose.connect(process.env.CONNECTION_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

