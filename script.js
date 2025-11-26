// script.js

// Function to generate the HTML for a single resource card
function createResourceCard(resource) {
    // Uses the 'reviewed' boolean property to display the tag
    const reviewedTag = resource.reviewed 
        ? `<span class="tag reviewed-tag">Reviewed</span>` 
        : `<span class="tag not-reviewed-tag">Not Reviewed</span>`;
    
    // Uses 'resource.title' for the heading
    return `
        <div class="resource-card">
            <h3>${resource.title}</h3> 
            ${reviewedTag}
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank" class="link">Visit Resource Site &rarr;</a>
            <p class="testimonial">"${resource.testimonial}"</p>
        </div>
    `;
}

// Main function to load and filter resources
function loadResources(category) {
    // FIX 1: Correctly references the global array defined in resources.js
    const data = window.resourcesData; 
    
    const container = document.getElementById('resource-container');

    if (!container) {
        console.error("Resource container not found.");
        return;
    }

    // FIX 2: Filters the data. It checks if the resource's 'dimensions' array 
    // includes the current page's 'category' (e.g., checks if ["Mind"] includes "Mind")
    const filteredResources = data.filter(res => 
        res.dimensions && res.dimensions.includes(category)
    );
    
    // 2. Generate the HTML for the filtered resources
    const cardsHTML = filteredResources.map(createResourceCard).join('');
    
    // 3. Update the DOM
    container.innerHTML = cardsHTML || '<p>No resources found for this category yet. Check back soon!</p>';
}

// --- Dynamic Page Title Update ---
function updatePageTitle(categoryKey) {
    // These keys match the capitalized PAGE_CATEGORY set in the HTML files
    const titles = {
        'Body': 'Body (Physical & Somatic Well-Being)',
        'Mind': 'Mind (Emotional & Cognitive Health)',
        'Soul': 'Soul (Spiritual & Existential Connection)',
        'Family': 'Family (Intergenerational & Kinship Support)',
        'Community': 'Community (Social & Civic Engagement)',
        'Work/Study': 'Work/Study (Career & Academic Stress)',
        'Identity & Culture': 'Identity & Culture (Belonging & Affirmation)'
    };

    const titleElement = document.getElementById('category-title');
    if (titleElement) {
        titleElement.textContent = titles[categoryKey] || 'Resource Navigator';
    }
    
    document.title = `${titles[categoryKey]} | Holistic Well-Being Navigator`;
}

// --- Run on page load for category pages ---
document.addEventListener('DOMContentLoaded', () => {
    // PAGE_CATEGORY is set via an inline script tag in the HTML pages
    if (typeof PAGE_CATEGORY !== 'undefined') {
        loadResources(PAGE_CATEGORY);
        updatePageTitle(PAGE_CATEGORY);
    }
});
