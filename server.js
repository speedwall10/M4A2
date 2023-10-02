const dotenv = require('dotenv');
dotenv.config({ path: './config.env'})
const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})


const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_DBSERVER}/`,{useNewUrlParser: true})
    .then(() => console.log(`MongoDB connection succeeeded`))
    .catch((err)=> console.log(`Error in DB Connection: `+err));