const Contact = require('../models/Contact');

const sendContactMessage = async (req, res) => {
  try {
    const message = await Contact.create(req.body);
    res.status(201).json({ message: "Message sent!", data: message });
  } catch (error) {
    res.status(400).json({ message: "Failed to send message" });
  }
};

module.exports = {
  sendContactMessage
};