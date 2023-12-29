
const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
  try {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });
    // console.log("1231242343242354", req.body.email);

    let existingOrder = await Order.findOne({ 'email': req.body.email });

    if (existingOrder === null) {
      // Create a new order
      await Order.create({
        email: req.body.email,
        order_data: [data]
      });
    } else {
      // Update existing order
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server Error', message: error.message });
  }
});

module.exports = router;


