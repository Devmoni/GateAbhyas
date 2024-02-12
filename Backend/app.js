const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/', dataRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
