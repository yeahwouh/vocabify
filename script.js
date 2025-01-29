const groceries = ["Apples", "Bananas", "Bread", "Milk", "Eggs", "Cheese", "Chicken", "Rice", "Pasta", "Tomatoes", "Carrots", "Onions", "Potatoes", "Cereal", "Coffee"];

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