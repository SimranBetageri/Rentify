// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config');
const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
