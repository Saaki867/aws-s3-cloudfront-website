// Set the current date in the footer
document.addEventListener('DOMContentLoaded', function() {
    // Format the current date
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    
    // Update the date element in the footer
    const dateElement = document.getElementById('date');
    if (dateElement) {
        dateElement.textContent = `Date: ${currentDate}`;
    }

    // Add hover effects for cards  
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add animation for services
    const services = document.querySelectorAll('.service');
    services.forEach((service, index) => {
        service.style.opacity = '0';
        service.style.transform = 'translateY(20px)';
        service.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Staggered animation
        setTimeout(() => {
            service.style.opacity = '1';
            service.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// Simple function to demonstrate JavaScript functionality
function showMessage() {
    alert('This site is hosted on AWS S3 and delivered through CloudFront!');
}