// index.js
import "./styles.css";

const groceries = ["Apples", "Bananass", "Bread", "Milk", "Eggs", "Cheese", "Chicken", "Rice", "Pasta", "Tomatoes", "Carrots", "Onions", "Potatoes", "Cereal", "Coffee"];

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

// Test it
translateText("Hello, World!", "FR").then(result => {
    console.log(result);
}).catch(error => {
    console.error('Error:', error);
});

document.addEventListener("DOMContentLoaded", () => {
    const groceryList = document.getElementById("groceryList");
    groceries.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        groceryList.appendChild(li);
    });
});

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

function searchGroceries() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const groceryList = document.getElementById("groceryList");
    groceryList.innerHTML = "";

    groceries.forEach(item => {
        if (item.toLowerCase().includes(searchInput)) {
            const li = document.createElement("li");
            li.textContent = item;
            groceryList.appendChild(li);
        }
    });
}

window.onload = function() {
    searchGroceries();
};

window.toggleSidebar = toggleSidebar;
window.showView = showView;
window.searchGroceries = searchGroceries;