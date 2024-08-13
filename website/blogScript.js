
document.addEventListener('DOMContentLoaded', async function () {
    const markdownFiles = ['blogs/blog000/research.md', 'blogs/blog000/research.md']; // Replace with your Markdown file paths
    const container = document.querySelector('.blog-posts');

    for (const file of markdownFiles) {
        try {
            const response = await fetch(file);
            const markdownContent = await response.text();
            const htmlContent = await convertMarkdownToHTML(markdownContent);
            createBlogPostCard(container, htmlContent);
        } catch (error) {
            console.error('Error fetching or rendering Markdown:', error);
        }
    }
});

async function convertMarkdownToHTML(markdownContent) {
    try {
        const response = await fetch('https://api.github.com/markdown', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'Accept': 'application/vnd.github.v3+json' // Specify GitHub API version
            },
            body: JSON.stringify({
                text: markdownContent
            })
        });
        return await response.text();
    } catch (error) {
        console.error('Error converting Markdown to HTML:', error);
        return '';
    }
}

function createBlogPostCard(container, htmlContent) {
    const blogPost = document.createElement('div');
    blogPost.classList.add('col-md-6'); // Each post occupies half of the row's width on medium-sized screens and above
    blogPost.innerHTML = `
        <div class="card mb-4">
            <div class="card-body">
                ${htmlContent}
            </div>
        </div>
    `;
    container.appendChild(blogPost);

    // Add event listener to open full blog post when card is clicked
    blogPost.addEventListener('click', function () {
        // Implement logic to open full blog post
        // For example, you can redirect to the full blog post page
        // window.location.href = 'path/to/full/blog/post/page';
    });
}
