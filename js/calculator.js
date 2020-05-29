export default function Calculator() {
    this.name = "calculatrice";
    this.element = null;

    this.init = function() {
        this.element = document.createElement("div");
        this.element.classList.add("calculator");
        document.body.prepend(this.element);

        
        let button = document.createElement("button");
        button.textContent = "1";
        this.element.append(button);
    }

}