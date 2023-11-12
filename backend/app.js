
const express = require('express');
const app = express();
const cors = require("cors");
const methodOverride =  require('method-override');
const port = 3000;

const mainRoute = require('./src/routes/main.route');
const imagesRoute = require('./src/routes/image.route');
const propertyRoute = require('./src/routes/property.route');
const userRoute = require('./src/routes/user.route');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(methodOverride('_method'));

app.use('/', mainRoute);
app.use('/images', imagesRoute);
app.use('/property', propertyRoute);
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`🔥 Server is running at port ${process.env.LOCAL}:${process.env.PORT}`);
});
  
module.exports = app;

// mover los midlewares