const form = document.getElementById('add-blog-form');
const blogEntries = document.getElementById('blog-entries');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;

    // Create a new blog entry element
    const blogEntry = document.createElement('div');
    blogEntry.classList.add('blog-entry');

    const blogTitle = document.createElement('h3');
    blogTitle.textContent = title;

    const blogContent = document.createElement('p');
    blogContent.textContent = content;

    // Append title and content to the blog entry
    blogEntry.appendChild(blogTitle);
    blogEntry.appendChild(blogContent);

    // Add the new blog entry to the list
    blogEntries.appendChild(blogEntry);

    // Clear the form
    form.reset();
});
