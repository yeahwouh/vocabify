import datetime
import json
import random

class Item:
    def __init__(self, question, answer):
        self.question = question
        self.answer = answer
        self.e_factor = 2.5  # Initial E-Factor
        self.interval = 1  # Initial interval (in days)
        self.next_review = datetime.date.today() + datetime.timedelta(days=1)

    def update(self, quality):
        """Update the item's E-Factor and next review date based on recall quality (0-5)."""
        if quality < 3:
            self.interval = 1  # Reset interval if recall is poor
        else:
            self.interval = round(self.interval * self.e_factor)
        
        # Update E-Factor using SuperMemo formula
        self.e_factor = self.e_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
        self.e_factor = max(1.3, self.e_factor)  # Ensure minimum value
        
        # Schedule next review
        self.next_review = datetime.date.today() + datetime.timedelta(days=self.interval)

    def __repr__(self):
        return f"{self.question} (Next Review: {self.next_review}, E-Factor: {self.e_factor})"

# Example usage
def main():
    items = [
        Item("What is the capital of France?", "Paris"),
        Item("What is 2 + 2?", "4")
    ]
    
    for item in items:
        print(f"Question: {item.question}")
        print(f"Answer: {item.answer}")
        quality = int(input("Rate your recall (0-5): "))
        item.update(quality)
        print(f"Updated: {item}\n")

if __name__ == "__main__":
    main()

