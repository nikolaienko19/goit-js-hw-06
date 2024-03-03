class Storage {
    #items = [];

    constructor(items) {
        this.#items = items;
    }
    
    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }
    
    removeItem(itemToRemove) {
        const removeNumber = this.#items.indexOf(itemToRemove);
        if (removeNumber !== -1) {
            this.#items.splice(removeNumber, 1);
        }
    }
}





const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]