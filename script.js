document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        { 
            text: "Eco-Friendly Paper Products for a Greener Future!", 
            description: "From food bags to pizza boxes, our sustainable paper products help you make a positive impact on the planet."
        },
        { 
            text: "Say no to plastic, use cloth bags!", 
            description: "Reduce waste and choose a sustainable lifestyle with reusable cloth bags."
        },
        { 
            text: "A small change can make a big impact – switch to cloth bags!", 
            description: "Every cloth bag used is one less plastic bag in the ocean."
        },
        { 
            text: "Go green with reusable bags!", 
            description: "Sustainable choices start with the bags we carry every day."
        },
        { 
            text: "Cloth bags: Stronger, Greener, Better!", 
            description: "Invest in a durable and eco-friendly future by using cloth bags."
        },
        { 
            text: "Save the planet, one bag at a time!", 
            description: "Your simple switch to cloth bags helps create a cleaner world."
        }
    ];

    const images = [
        "C:\Users\Admin\Downloads\varadweb\bag7.jpg",
        "C:\Users\Admin\Downloads\varadweb\bag2.jpg",
        "C:\Users\Admin\Downloads\varadweb\bag3.jpg",
        "C:\Users\Admin\Downloads\varadweb\bag4.jpg",
        "C:\Users\Admin\Downloads\varadweb\bag5.jpg"
    ];

    let index = 0;
    function changeQuote() {
        let quoteElement = document.getElementById("quote");
        let descriptionElement = document.getElementById("quote-description");
        
        // Fade out effect
        quoteElement.style.opacity = 0;
        descriptionElement.style.opacity = 0;

        setTimeout(() => {
            quoteElement.textContent = quotes[index].text;
            descriptionElement.textContent = quotes[index].description;

            // Fade in new text
            quoteElement.style.opacity = 1;
            descriptionElement.style.opacity = 1;

            // Loop back to first quote after all are displayed
            index = (index + 1) % quotes.length;
        }, 500); // Delay for smooth transition
    }

    // IMAGE SLIDER FUNCTION
    let imgIndex = 0;
    function changeImage() {
        let imageElement = document.getElementById("slider-image");

        // Fade out effect
        imageElement.style.opacity = 0;

        setTimeout(() => {
            imageElement.src = images[imgIndex];

            // Fade in new image
            imageElement.style.opacity = 1;

            // Loop back to first image after all are displayed
            imgIndex = (imgIndex + 1) % images.length;
        }, 500);
    }

    // Change quote every 3 seconds
    setInterval(changeQuote, 3000);
    
    // Change image every 3 seconds (synchronized with quotes)
    setInterval(changeImage, 3000);
    

    document.addEventListener("DOMContentLoaded", function () {
        if (!firebase.apps.length) {
            console.log("Firebase is not initialized properly.");
            return;
        }
        
        console.log("Firebase initialized:", firebase.app().name);
    
        // Reference to Firebase Database
        const database = firebase.database();
        const contactRef = database.ref("contacts");
    
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();
    
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
    
            contactRef.push({
                name: name,
                email: email,
                message: message
            }).then(() => {
                alert("Message sent successfully!");
            }).catch(error => {
                console.error("Error:", error);
            });
    
            document.getElementById("contactForm").reset();
        });
    });
  
    
});

