// index.js
import "./styles.css";

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
    

    translateText(searchInput, "EN").then(result => {
        
        translationResult.textContent = result;
        
    }).catch(error => {
        console.log('Error:', error);
    });

}

const debouncedSearch = debounce(searchTranslation, 300);

window.onload = function() {
    debouncedSearch();
};

window.toggleSidebar = toggleSidebar;
window.showView = showView;
window.searchGroceries = debouncedSearch;