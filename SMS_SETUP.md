# SMS Automation Configuration

This file contains configuration for SMS automation integration.
In production, you would integrate with a service like Twilio.

## Twilio Setup Instructions

1. Sign up for a Twilio account at https://www.twilio.com/
2. Get your Account SID and Auth Token from the Twilio Console
3. Purchase a Twilio phone number
4. Set up a backend server (Node.js, Python, etc.) to handle SMS requests

## Environment Variables Needed

```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
RECIPIENT_PHONE_NUMBER=number_to_receive_tips
```

## Example Backend Implementation (Node.js)

```javascript
const express = require('express');
const twilio = require('twilio');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post('/api/submit-tip', async (req, res) => {
    const { phone, tip, timestamp } = req.body;
    
    try {
        const message = await client.messages.create({
            body: `New tip about Kaidence Kooper Smith:\n\nFrom: ${phone}\nTime: ${timestamp}\n\nTip: ${tip}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.RECIPIENT_PHONE_NUMBER
        });
        
        res.json({ success: true, messageId: message.sid });
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log('SMS tip server running on port 3000');
});
```

## Alternative: Using FormSubmit or EmailJS

If you want a simpler solution without a backend:
- Use EmailJS (https://www.emailjs.com/) to send tips via email
- Use Zapier to convert emails to SMS
- Use Google Forms with SMS notifications

## Security Considerations

- Never expose API keys in frontend code
- Always use HTTPS for the backend API
- Validate and sanitize all input
- Implement rate limiting to prevent abuse
- Store tips securely with encryption
- Consider GDPR/privacy compliance for storing contact information
