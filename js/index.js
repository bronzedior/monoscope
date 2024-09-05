window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 200) { 
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

function toggleSearchBar() {
    var searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('search-bar-active');
}

const topics = [
    {
        img: 'assets/topics/Image-1.png',
        title: 'State dinner in Paris hosted by Macron for Biden',
        description: 'President Joe Biden heralded the close ties between the United States and France on Saturday, calling his current visit “the most remarkable trip” that he’s made to the country as French President Emmanuel Macron hosted his US counterpart for an official state visit in Paris.'
    },
    {
        img: 'assets/topics/Image-2.png',
        title: 'Belmont Stakes 2024: Predictions, Field, Odds',
        description: 'Demling excels in major horse races like the Belmont Stakes 2024. He has hit 11 of the last 16 Derby-Oaks doubles at Churchill Downs and has accurately predicted 10 of the last 20 bets in 2023 and the trifecta again in 2024. Those who follow his advice have seen substantial returns.'
    },
    {
        img: 'assets/topics/Image-3.png',
        title: 'At 45, he’s competing with women half his age',
        description: 'Bill May, along with his U.S. Olympic swimming teammates, has been training diligently in Los Angeles for the upcoming Olympic Games. If May successfully secures a spot on the U.S. Olympic team, he will make history as the first man to ever compete in artistic swimming at the Games.'
    }
];

let currentIndex = 0;

function changeImage(direction) {
    currentIndex = (currentIndex + direction + topics.length) % topics.length;
    document.getElementById('trending-img').src = topics[currentIndex].img;
    document.getElementById('trending-title').innerText = topics[currentIndex].title;
    document.getElementById('trending-description').innerText = topics[currentIndex].description;
}

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

function handleSearch2(event) {
    if (event.key === 'Enter') {
        const searchQuery = document.getElementById('searchInput2').value.trim();
        if (searchQuery) {
            window.location.href = `searchPage.html`;
        }
    }
}
