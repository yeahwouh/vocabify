class Item {
    static items = [];

    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.eFactor = 2.5;  // Initial E-Factor
        this.interval = 1;    // Initial interval (in days)
        this.nextReview = new Date(Date.now() + 24 * 60 * 60 * 1000); // Next review in 1 day
        Item.items.push(this);
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
    }

    toString() {
        return `${this.question} (Next Review: ${this.nextReview.toDateString()}, E-Factor: ${this.eFactor})`;
    }
}

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