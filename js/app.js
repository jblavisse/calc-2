// import Calculator from './calculator.js';

// let calc = new Calculator();
// calc.init();

// let calc2 = new Calculator();
// calc2.init();


function createHTMLElement(tag,classes,parentElement,text) {
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

let calculator = createHTMLElement("div","calcul",document.body);
let screen = createHTMLElement("header","calcul__head",calculator);
let ul = createHTMLElement("ul","",calculator);
let li =  createHTMLElement("li","",ul);

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

// Idea for addEventListener calculator 
// let class = event.target.className;
// switch(class) {
//     case "calcul__operator": 
//         screen.textContent = event.target.ad
//         break;
//     case "calcul__supp":
//         screen.text = ""

//     case "calcul__total":
//         eval(screen.textContent)
// }


let button;

for(let i=0;i<lisArr.length;i++) {
    button = createHTMLElement("button",lisArr[i].class,li,lisArr[i].text);
}