export default function Calculator() {
    this.name = "calculatrice";
    this.element = null;


    this.createHTMLElement = function(tag,classes,parentElement,text) {
        let el = document.createElement(tag);
        if(classes) {
            el.classList.add(classes);
        }
        
        if(text) {
            el.textContent = text;
        }

        parentElement.append(el);
        return el; 
    }

    this.init = function() {
        let calculator = this.createHTMLElement("div","calcul",document.body);
        let screen = this.createHTMLElement("header","calcul__head",calculator);
        let ul = this.createHTMLElement("ul","",calculator);
        let li =  this.createHTMLElement("li","",ul);
        
        let lisArr = [
            {
                class: "calcul__operator",
                id: "+",
                text: "+",
                number: 1
            },
            {
                class: "calcul__operator",
                id: "-",
                text: "-",
                number: 1
            },
            {
                class: "calcul__operator",
                id: "*",
                text: "x",
                number: 1
            },
            {
                class: "calcul__operator",
                id: "/",
                text: "/",
                number: 1
            },
            {
                class: "calcul__element",
                id: 7,
                text: "7",
                number: 2
            }
        ]
        
        
        let button;
        
        for(let i=0;i<lisArr.length;i++) {
            button = this.createHTMLElement("button",lisArr[i].class,li,lisArr[i].text);
        }
    }

}