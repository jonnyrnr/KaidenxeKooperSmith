// Update last updated timestamp
function updateTimestamp() {
    const timestampElement = document.getElementById('last-updated');
    if (timestampElement) {
        const now = new Date();
        timestampElement.textContent = now.toLocaleString();
    }
}

// SMS Tip Form Handler
document.addEventListener('DOMContentLoaded', function() {
    updateTimestamp();
    
    const form = document.getElementById('sms-tip-form');
    const messageDiv = document.getElementById('form-message');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const phone = document.getElementById('phone').value;
            const tip = document.getElementById('tip').value;
            const anonymous = document.getElementById('anonymous').checked;
            
            // Show loading state
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // SMS automation would typically connect to a backend service like Twilio
                // For demonstration, we'll simulate the API call
                const response = await sendSMSTip({
                    phone: anonymous ? 'Anonymous' : phone,
                    tip: tip,
                    timestamp: new Date().toISOString()
                });
                
                // Show success message
                messageDiv.className = 'form-message success';
                messageDiv.textContent = 'Thank you! Your tip has been submitted successfully. If you provided contact information, someone may follow up with you.';
                
                // Reset form
                form.reset();
                
                // Hide message after 10 seconds
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 10000);
                
            } catch (error) {
                // Show error message
                messageDiv.className = 'form-message error';
                messageDiv.textContent = 'There was an error submitting your tip. Please try calling the emergency contacts instead.';
                console.error('Error submitting tip:', error);
            } finally {
                // Restore button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

// Simulated SMS sending function
// In production, this would call a backend API that integrates with Twilio or similar
async function sendSMSTip(data) {
    // This is a placeholder for the actual SMS API integration
    // In a real implementation, you would:
    // 1. Send this data to your backend server
    // 2. Your backend would use Twilio API to send SMS to authorities
    // 3. Store the tip in a database for follow-up
    
    return new Promise((resolve, reject) => {
        // Simulate API call delay
        setTimeout(() => {
            // Simulate successful submission
            console.log('Tip submitted:', data);
            
            // In production, you would check the actual API response
            // For now, we'll simulate success
            resolve({
                success: true,
                message: 'Tip submitted successfully'
            });
            
            // Uncomment below to test error handling
            // reject(new Error('API Error'));
        }, 1500);
    });
}

// Social sharing functions
function shareFlyer(platform) {
    const url = window.location.href;
    const text = 'MISSING CHILD: Kaidence Kooper Smith from Queen Creek, AZ. Please help spread the word!';
    
    let shareUrl;
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

function copyLink() {
    const url = window.location.href;
    
    // Try to use the modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard! Share it to help bring Kaidence home.');
        }).catch(err => {
            // Fallback for older browsers
            fallbackCopyLink(url);
        });
    } else {
        fallbackCopyLink(url);
    }
}

function fallbackCopyLink(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('Link copied to clipboard! Share it to help bring Kaidence home.');
    } catch (err) {
        alert('Unable to copy link. Please copy manually: ' + text);
    }
    
    document.body.removeChild(textArea);
}

// Add print functionality
function printFlyer() {
    window.print();
}

// Optional: Add keyboard shortcut for printing (Ctrl+P is default, but we can add custom)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printFlyer();
    }
});
