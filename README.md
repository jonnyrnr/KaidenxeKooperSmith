# Missing Child Flyer - Kaidence Kooper Smith

This is a webpage flyer for missing child **Kaidence Kooper Smith** from **Queen Creek, Arizona**.

## 🚨 URGENT - Have Information?

If you have any information about Kaidence Kooper Smith, please:
- Call 911 immediately
- Contact Queen Creek Police Department
- Submit a tip through the webpage

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **SMS Automation**: Submit tips that can be sent via SMS to authorities (requires backend setup)
- **Social Sharing**: Easy sharing on Facebook, Twitter, and direct link copying
- **Print-Friendly**: Optimized layout for printing physical flyers
- **Contact Information**: Multiple ways to report information

## How to Use

### View the Flyer Locally

1. Clone or download this repository
2. Open `index.html` in a web browser
3. The flyer will display with all information about Kaidence

### Deploy the Flyer

You can deploy this flyer to any web hosting service:

- **GitHub Pages**: Enable GitHub Pages in repository settings
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Connect your repository to Vercel (recommended - includes optimized config)
  1. Go to [vercel.com](https://vercel.com) and sign in
  2. Click "Add New Project" and import this repository
  3. Vercel will auto-detect the settings from `vercel.json`
  4. Click "Deploy" - your site will be live in seconds!
- **Any web server**: Upload all files to your web hosting

### Set Up SMS Automation

The tip submission form includes SMS automation capabilities. To enable this feature:

1. Read the `SMS_SETUP.md` file for detailed instructions
2. Set up a Twilio account or alternative SMS service
3. Create a backend API to handle tip submissions
4. Update `script.js` to point to your backend API endpoint

For now, the form simulates tip submission. In production, you would:
- Create a backend server (Node.js, Python, PHP, etc.)
- Integrate with Twilio API or similar SMS service
- Update the `sendSMSTip()` function to call your backend

## Files

- `index.html` - Main webpage with flyer content
- `styles.css` - Styling and responsive design
- `script.js` - JavaScript for form handling and social sharing
- `vercel.json` - Vercel deployment configuration with security headers
- `SMS_SETUP.md` - Instructions for setting up SMS automation
- `README.md` - This file

## Customization

To update information:
1. Edit `index.html` to change child details, contact information
2. Edit `styles.css` to change colors and styling
3. Add photos by replacing the photo placeholder section

## Please Help

Share this flyer widely to help bring Kaidence home safely. Every share could make a difference.

Please reach out with any information 
