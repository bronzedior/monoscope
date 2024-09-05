var currentDropdown = null;

function toggleDropdown(dropdownId, event) {
    event.preventDefault();
    var dropdownContent = document.getElementById(dropdownId).querySelector('.dropdown-content');

    if (currentDropdown && currentDropdown !== dropdownContent) {
        currentDropdown.style.display = 'none';
    }

    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    
    currentDropdown = dropdownContent.style.display === 'block' ? dropdownContent : null;
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        const searchQuery = document.getElementById('searchInput').value.trim();
        if (searchQuery) {
            window.location.href = `searchPage.html`;
        }
    }
}