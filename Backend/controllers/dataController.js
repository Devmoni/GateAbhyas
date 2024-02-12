// dataController.js
const dataService = require('../services/dataService');

exports.getData = async (req, res) => {
    try {
        const data = await dataService.getData();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
