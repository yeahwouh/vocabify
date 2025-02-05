class Item {
    static items = [];

    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.eFactor = 2.5;  // Initial E-Factor
        this.interval = 1;    // Initial interval (in days)
        this.nextReview = new Date(Date.now() + 24 * 60 * 60 * 1000); // Next review in 1 day
        Item.items.push(this);
        Item.saveToLocalStorage(); // Save whenever a new item is created
    }

    update(quality) {
        /** Update the item's E-Factor and next review date based on recall quality (0-5). */
        if (quality < 3) {
            this.interval = 1;  // Reset interval if recall is poor
        } else {
            this.interval = Math.round(this.interval * this.eFactor);
        }

        // Update E-Factor using SuperMemo formula
        this.eFactor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        this.eFactor = Math.max(1.3, this.eFactor);  // Ensure minimum value

        // Schedule next review
        this.nextReview = new Date(Date.now() + this.interval * 24 * 60 * 60 * 1000);
        Item.saveToLocalStorage(); // Save whenever an item is updated
    }

    // Add static methods for localStorage handling
    static saveToLocalStorage() {
        const itemsToSave = Item.items.map(item => ({
            ...item,
            nextReview: item.nextReview.toISOString() // Convert Date to string for storage
        }));
        localStorage.setItem('flashcards', JSON.stringify(itemsToSave));
    }

    static loadFromLocalStorage() {
        const savedItems = localStorage.getItem('flashcards');
        if (savedItems) {
            const parsedItems = JSON.parse(savedItems);
            Item.items = parsedItems.map(item => {
                const newItem = new Item(item.question, item.answer);
                newItem.eFactor = item.eFactor;
                newItem.interval = item.interval;
                newItem.nextReview = new Date(item.nextReview);
                return newItem;
            });
            Item.items.pop(); // Remove the duplicate item created by the constructor
        }
    }

    toString() {
        return `${this.question} (Next Review: ${this.nextReview.toDateString()}, E-Factor: ${this.eFactor})`;
    }
}

// Load items when the module is imported
Item.loadFromLocalStorage();

const exampleCards = [
    new Item("What is the capital of Germany?", "Berlin"),
    new Item("What is 3 + 5?", "8"),
    new Item("What is the largest planet in our solar system?", "Jupiter"),
    new Item("What is the chemical symbol for water?", "H2O"),
    new Item("Who wrote 'Romeo and Juliet'?", "William Shakespeare")
];

// // Example usage
// function main() {
//     const items = [
//         new Item("What is the capital of France?", "Paris"),
//         new Item("What is 2 + 2?", "4")
//     ];

//     items.forEach(item => {
//         console.log(`Question: ${item.question}`);
//         console.log(`Answer: ${item.answer}`);
//         const quality = parseInt(prompt("Rate your recall (0-5): "), 10);
//         item.update(quality);
//         console.log(`Updated: ${item.toString()}\n`);
//     });
// }

// main();

export { Item };