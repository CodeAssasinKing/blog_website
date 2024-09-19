document.addEventListener('DOMContentLoaded', function() {
    const morePosts = [
        {
            title: "Third Blog Post",
            date: "September 17, 2024",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget...",
            link: "#"
        },
        {
            title: "Fourth Blog Post",
            date: "September 16, 2024",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget...",
            link: "#"
        }
    ];

    const blogSection = document.querySelector('.blog-posts');

    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Load More Posts';
    blogSection.appendChild(loadMoreButton);

    loadMoreButton.addEventListener('click', function() {
        morePosts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>Posted on <span class="date">${post.date}</span></p>
                <p>${post.content}</p>
                <a href="${post.link}">Read More</a>
            `;

            blogSection.insertBefore(postDiv, loadMoreButton);
        });
        loadMoreButton.remove(); // Remove the button after loading all posts
    });
});
