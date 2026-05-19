document.addEventListener('DOMContentLoaded', function() {
    // Getting references to various DOM elements
    const homeLink = document.getElementById('home-link');
    const newPostLink = document.getElementById('new-post-link');
    const categoriesLink = document.getElementById('categories-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const homeSection = document.getElementById('home');
    const newPostSection = document.getElementById('new-post');
    const categoriesSection = document.getElementById('categories');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    const postForm = document.getElementById('post-form');
    const featuredSection = document.getElementById('featured');
    const postsSection = document.getElementById('posts');
    const categoryList = document.getElementById('category-list');

    // Event listener for Home link
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        displaySection(homeSection);
        loadPosts();
    });

    // Event listener for New Post link
    newPostLink.addEventListener('click', function(event) {
        event.preventDefault();
        displaySection(newPostSection);
    });

    // Event listener for Categories link
    categoriesLink.addEventListener('click', function(event) {
        event.preventDefault();
        displaySection(categoriesSection);
        loadCategories();
    });

    // Event listener for About link
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        displaySection(aboutSection);
    });

    // Event listener for Contact link
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        displaySection(contactSection);
    });

    // Event listener for form submission to create a new post
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Sending a POST request to create a new post
        fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
        .then(response => response.json())
        .then(data => {
            alert('Post created successfully!');
            postForm.reset();
            homeLink.click();
        })
        .catch(error => console.error('Error:', error));
    });

    // Function to display the selected section and hide others
    function displaySection(section) {
        homeSection.style.display = 'none';
        newPostSection.style.display = 'none';
        categoriesSection.style.display = 'none';
        aboutSection.style.display = 'none';
        contactSection.style.display = 'none';
        section.style.display = 'block';
    }

    // Function to load posts from the server
    function loadPosts() {
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => {
                featuredSection.innerHTML = '';
                postsSection.innerHTML = '';
                data.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.className = 'article';
                    postElement.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                        <small>Posted on ${new Date(post.date).toLocaleDateString()}</small>
                    `;
                    postsSection.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    // Function to load categories (dummy implementation)
    function loadCategories() {
        categoryList.innerHTML = '';
        const categories = ['Technology', 'Lifestyle', 'Business', 'Entertainment', 'Travel'];
        categories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category';
            categoryElement.innerHTML = `<h3>${category}</h3>`;
            categoryList.appendChild(categoryElement);
        });
    }

    // Load the posts initially when the page loads
    loadPosts();
});
