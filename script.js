// script.js

// Function to generate the HTML for a single resource card
function createResourceCard(resource) {
    const reviewedTag = resource.reviewed 
        ? `<span class="tag reviewed-tag">Reviewed</span>` 
        : `<span class="tag not-reviewed-tag">Not Reviewed</span>`;
    
    return `
        <div class="resource-card">
            <h3>${resource.name}</h3>
            ${reviewedTag}
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank" class="link">Visit Resource Site &rarr;</a>
            <p class="testimonial">"${resource.testimonial}"</p>
        </div>
    `;
}

// Main function to load and filter resources
function loadResources(category) {
    // resources array is assumed to be globally available from resources.js
    const container = document.getElementById('resource-container');

    if (!container) {
        console.error("Resource container not found.");
        return;
    }

    // 1. Filter the resources based on the current page's category
    const filteredResources = resources.filter(res => res.category === category);
    
    // 2. Generate the HTML for the filtered resources
    const cardsHTML = filteredResources.map(createResourceCard).join('');
    
    // 3. Update the DOM
    container.innerHTML = cardsHTML || '<p>No resources found for this category yet. Check back soon!</p>';
}

// --- Dynamic Page Title Update (Optional but nice) ---
function updatePageTitle(categoryKey) {
    const titles = {
        'body': 'Body (Physical & Somatic Well-Being)',
        'mind': 'Mind (Emotional & Cognitive Health)',
        'soul': 'Soul (Spiritual & Existential Connection)',
        'family': 'Family (Intergenerational & Kinship Support)',
        'community': 'Community (Social & Civic Engagement)',
        'workstudy': 'Work/Study (Career & Academic Stress)',
        'identityculture': 'Identity & Culture (Belonging & Affirmation)'
    };

    const titleElement = document.getElementById('category-title');
    if (titleElement) {
        titleElement.textContent = titles[categoryKey] || 'Resource Navigator';
    }
    
    // Also update the document title
    document.title = `${titles[categoryKey]} | Holistic Well-Being Navigator`;
}

// --- Run on page load for category pages ---
// The category is determined by looking at the page's ID or a known variable.
// We will use a script tag right before this one on each HTML page to set the category.
// Example: <script>const PAGE_CATEGORY = 'body';</script>

document.addEventListener('DOMContentLoaded', () => {
    // Check if the global variable is set (only on category pages)
    if (typeof PAGE_CATEGORY !== 'undefined') {
        loadResources(PAGE_CATEGORY);
        updatePageTitle(PAGE_CATEGORY);
    }
});
