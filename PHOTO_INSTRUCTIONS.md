# Adding Kaidence's Photo to the Flyer

## Option 1: Upload Image File to Repository (Recommended)

1. Download the image from the Google share link to your computer
2. Rename the image file to `kaidence-photo.jpg` (or update the `src` in index.html to match your filename)
3. Upload the image file to the root of this repository
4. The webpage will automatically display the photo

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

## Option 2: Use Direct Image URL

If the image is hosted online, you can use a direct URL:

1. Get a direct link to the image (must end in .jpg, .png, etc.)
2. Edit `index.html` line 20
3. Replace `kaidence-photo.jpg` with the direct image URL

Example:
```html
<img src="https://example.com/direct-link-to-image.jpg" alt="Kaidence Kooper Smith" class="child-photo">
```

## Option 3: Convert Google Share Link

Google share links (like `share.google/...`) need to be converted to direct image URLs:

1. Open the Google share link in your browser
2. Right-click on the image
3. Select "Open image in new tab" or "Copy image address"
4. Use that direct URL in the HTML

## Current Setup

The HTML is already configured to display an image. It will:
- Show the image if `kaidence-photo.jpg` exists
- Show a placeholder if the image cannot be loaded
- Automatically fall back to the placeholder on error

## Need Help?

If you need assistance converting the Google share link or uploading the image, please provide:
- A direct image URL, OR
- Upload the image file directly to this repository
