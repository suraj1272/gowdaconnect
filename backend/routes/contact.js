const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Create a new contact message
router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message',
      });
    }

    // Create new contact document
    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });

    // Save to database
    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form',
      error: error.message,
    });
  }
});

// Get all contact messages (for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
      error: error.message,
    });
  }
});

// Get single contact message
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact',
      error: error.message,
    });
  }
});

module.exports = router;
