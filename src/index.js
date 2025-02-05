// index.js
import "./styles.css";
import { Item } from "./flashcard.js";

async function translateText(text, targetLang = 'DE') {
    try {
        const API_KEY = "15360195-cc33-4e48-95f5-086840252bab:fx";
        const url = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.translations[0].text;
    } catch (error) {
        console.error('Translation error:', error);
        return text;
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

function showView(viewId) {
    const views = document.getElementsByClassName("view");
    for (let view of views) {
        view.style.display = "none";
    }
    document.getElementById(viewId).style.display = "block";
}

function debounce(func, wait=250) {
    let timeout;
    return function(...args) {
        // Clear the previous timeout to reset the wait time
        clearTimeout(timeout);
        // Set a new timeout to call the function after the specified wait time
        timeout = setTimeout(() => func(...args), wait);
    };
}

function searchTranslation() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const translationResult = document.getElementById("translationResult");
    const addButton = document.getElementById("addFlashcardButton");
    
    translateText(searchInput, "EN").then(result => {
        translationResult.textContent = result;

        // Show the button to add the flashcard
        addButton.style.display = "block";
        addButton.onclick = () => {
            // Check if the item already exists
            const existingItem = Item.items.find(item => item.question.toLowerCase() === searchInput);
            if (!existingItem) {
                new Item(searchInput, result); // Create a new flashcard Item
                console.log(Item.items);
            } else {
                alert("This flashcard already exists!");
            }
        };
        
    }).catch(error => {
        console.log('Error:', error);
    });
}

const debouncedSearch = debounce(searchTranslation, 300);

function displayFlashcards(scheduled = false) {
    const container = document.getElementById('flashcardsContainer');
    container.innerHTML = ''; // Clear existing cards
    
    let cardsToShow = scheduled 
        ? Item.items.filter(item => item.nextReview <= new Date()) 
        : Item.items;

    cardsToShow.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'flashcard';
        
        const question = document.createElement('div');
        question.className = 'flashcard-question';
        question.textContent = item.question;
        
        const answer = document.createElement('div');
        answer.className = 'flashcard-answer';
        answer.textContent = item.answer;

        const nextReview = document.createElement('div');
        nextReview.className = 'flashcard-next-review';
        nextReview.textContent = `Next Review: ${item.nextReview.toLocaleDateString()}`;
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => {
            Item.items.splice(index, 1); // Remove the item from the array
            Item.saveToLocalStorage(); // Update local storage
            displayFlashcards(scheduled); // Refresh the displayed flashcards
        };

        card.appendChild(question);
        card.appendChild(answer);
        card.appendChild(nextReview);
        card.appendChild(deleteButton); // Add the delete button to the card
        container.appendChild(card);
    });
}

window.onload = function() {
    debouncedSearch();
    const showScheduledBtn = document.getElementById('showScheduledBtn');
    let showingScheduled = false;
    
    showScheduledBtn.onclick = () => {
        showingScheduled = !showingScheduled;
        showScheduledBtn.textContent = showingScheduled ? 'View All Cards' : 'View Scheduled Cards';
        displayFlashcards(showingScheduled);
    };
    
    // Show all flashcards initially
    displayFlashcards(false);
};

window.toggleSidebar = toggleSidebar;
window.showView = showView;
window.searchGroceries = debouncedSearch;