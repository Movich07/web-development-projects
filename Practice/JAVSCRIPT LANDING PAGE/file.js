document.addEventListener('DOMContentLoaded', () => {
    // Execute code when the DOM is fully loaded

    const carousels = document.querySelectorAll('.carousel');
    // Select all elements with class 'carousel'

    carousels.forEach(carousel => {
        // Iterate over each carousel element

        const images = [
            'first.jpg',
            'second.jpg',
            'third.jpg'
        ];
        // Array of image sources for the carousel

        let currentIndex = 0;
        // Variable to track the current index of the displayed image

        const carouselImage = carousel.querySelector('.carousel-image');
        // Select the image element within the current carousel

        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        // Select the previous and next buttons within the current carousel

        function showImage(index) {
            carouselImage.src = images[index];
        }
        // Function to display the image at the specified index

        function nextImage() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        }
        // Function to display the next image in the carousel

        function prevImage() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        }
        // Function to display the previous image in the carousel

        // Automatic sliding functionality
        let slideInterval = setInterval(nextImage, 2000);
        // Set interval to call nextImage every 2 seconds (2000 milliseconds)

        // Pause automatic sliding when hovering over carousel
        carousel.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        // Resume automatic sliding when mouse leaves carousel
        carousel.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextImage, 3000);
        });

        // Button click events
        prevButton.addEventListener('click', () => {
            prevImage();
            clearInterval(slideInterval); // Stop automatic sliding on manual control
        });

        nextButton.addEventListener('click', () => {
            nextImage();
            clearInterval(slideInterval); // Stop automatic sliding on manual control
        });
    });

    // Example of dynamically changing styles based on button click
    const nextButton = document.querySelector('.content button');

    nextButton.addEventListener('click', () => {
        // Example: Change background color of .content on button click
        const content = document.querySelector('.content');
        content.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        // Function to generate random hexadecimal color
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
