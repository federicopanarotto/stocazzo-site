// const button = document.querySelector("#btn");
// const sasso = document.querySelector("#top");
// const center = document.querySelector("#center");
// const textArea = document.querySelector("#text");
// const blinkCursor = document.querySelector("#cursor");

// const menu = document.querySelector("#menu");
// const options = document.querySelector("#options")
// const slider = document.querySelector("#slider");
// const sliderText = document.querySelector("#text-slider");
// const optionText = document.querySelector("#option-text");

// const sliderValue = document.querySelector("#value");

// var slider_ = document.getElementById("slider");
// var output = document.getElementById("value");
// output.innerHTML = slider.value;

// let speed = 1000;
// let timer;

// clear();

// function clear() {
//     clearInterval(timer);
// }



// // mode = true => bianco, mode = false => nero
// let mode = false;
// let pressed = false;

// button.addEventListener("click", changeMode);

// function changeMode() {
//     if (mode) {
//         sasso.classList.remove("top-black");
//         sasso.classList.add("top-white");
//         center.classList.remove("center-black");
//         center.classList.add("center-white");
//         blinkCursor.classList.remove("white");
//         blinkCursor.classList.add("black");
//         options.classList.remove("black");
//         options.classList.add("white");
//         slider.classList.remove("slider-black");
//         slider.classList.add("slider-white");
//         sliderText.classList.remove("white-5");
//         sliderText.classList.add("black-5");
//         optionText.classList.remove("white-6");
//         optionText.classList.add("black-6");
//         output.classList.remove("white-5");
//         output.classList.add("black-5");
//         mode = false;
//     } else {
//         sasso.classList.remove("top-white");
//         sasso.classList.add("top-black");
//         center.classList.remove("center-white");
//         center.classList.add("center-black");
//         blinkCursor.classList.remove("black");
//         blinkCursor.classList.add("white");
//         options.classList.remove("white");
//         options.classList.add("black");
//         slider.classList.remove("slider-white");
//         slider.classList.add("slider-black");
//         sliderText.classList.remove("black-5");
//         sliderText.classList.add("white-5");
//         optionText.classList.remove("black-6");
//         optionText.classList.add("white-6");
//         output.classList.remove("black-5");
//         output.classList.add("white-5");
//         mode = true;
//     }
//     pressed = true;
// }

// let clicked = false;

// menu.addEventListener("click", () => {
//     if (!clicked) {
//         options.classList.add("transition");
//         options.style.visibility = "visible";
//         clicked = true;
//     } else {
//         options.classList.remove("transition");
//         options.style.visibility = "hidden";
//         clicked = false;
//     }
// });

// let counter = 0;

// function writeWord() {
//     switch (counter) {
//         case 0:
//             textArea.textContent = "S";
//             counter++;
//             break;
//         case 1:
//             textArea.textContent += "T";
//             counter++;
//             break;
//         case 2:
//             textArea.textContent += "O";
//             counter++;
//             break;
//         case 3:
//             textArea.textContent += "C";
//             counter++;
//             break;
//         case 4:
//             textArea.textContent += "A";
//             counter++;
//             break;
//         case 5:
//             textArea.textContent += "Z";
//             counter++;
//             break;
//         case 6:
//             textArea.textContent += "Z";
//             counter++;
//             break;
//         case 7:
//             textArea.textContent += "O";
//             counter++;
//             break;
//         case 8:
//             counter++;
//             break;
//         case 9:
//             counter++;
//             break;
//         case 10:
//             textArea.textContent = "STOCAZZ";
//             counter++;
//             break;
//         case 11:
//             textArea.textContent = "STOCAZ";
//             counter++;
//             break;
//         case 12:
//             textArea.textContent = "STOCA";
//             counter++;
//             break;
//         case 13:
//             textArea.textContent = "STOC";
//             counter++;
//             break;
//         case 14:
//             textArea.textContent = "STO";
//             counter++;
//             break;
//         case 15:
//             textArea.textContent = "ST";
//             counter++;
//             break;
//         case 16:
//             textArea.textContent = "S";
//             counter++;
//             break;
//         case 17:
//             textArea.textContent = "";
//             counter++;
//             break;
//         case 18:
//             counter++;
//             break;
//         case 19:
//             counter++;
//             break;
//         case 20:
//             counter++;
//             break;
//         default:
//             counter = 0;
//     }
// }

// let active = false;

// function blinkingCursor() {
//     if (!active) {
//         blinkCursor.style.visibility = "hidden";
//         active = true;
//     } else {
//         blinkCursor.style.visibility = "visible";
//         active = false;
//     }
// }

// setInterval(writeWord, 500);
// setInterval(blinkingCursor, 500);

const changeModeButton = document.querySelector("#nav-button");
const contentArea = document.querySelector("#main");

changeModeButton.addEventListener("click", chageMode);

function chageMode() {
    let currentClass = contentArea.className;
    contentArea.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}


const textArea = document.querySelector("#container-text");
let counter = 10;

function writeWord() {
    switch (counter) {
        case 0:
            textArea.textContent = "S";
            counter++;
            break;
        case 1:
            textArea.textContent += "T";
            counter++;
            break;
        case 2:
            textArea.textContent += "O";
            counter++;
            break;
        case 3:
            textArea.textContent += "C";
            counter++;
            break;
        case 4:
            textArea.textContent += "A";
            counter++;
            break;
        case 5:
            textArea.textContent += "Z";
            counter++;
            break;
        case 6:
            textArea.textContent += "Z";
            counter++;
            break;
        case 7:
            textArea.textContent += "O";
            counter++;
            break;
        case 8:
            counter++;
            break;
        case 9:
            counter++;
            break;
        case 10:
            textArea.textContent = "STOCAZZ";
            counter++;
            break;
        case 11:
            textArea.textContent = "STOCAZ";
            counter++;
            break;
        case 12:
            textArea.textContent = "STOCA";
            counter++;
            break;
        case 13:
            textArea.textContent = "STOC";
            counter++;
            break;
        case 14:
            textArea.textContent = "STO";
            counter++;
            break;
        case 15:
            textArea.textContent = "ST";
            counter++;
            break;
        case 16:
            textArea.textContent = "S";
            counter++;
            break;
        case 17:
            textArea.textContent = "";
            counter++;
            break;
        case 18:
            counter++;
            break;
        case 19:
            counter++;
            break;
        case 20:
            counter++;
            break;
        default:
            counter = 0;
    }
}

let interval1 = 1000;
let interval2 = 1000;
let intervalID1;
let intervalID2;

function startInterval(interID, inter, typeFunction) {
    intervalID = setInterval(() => {
        typeFunction();
    }, inter);
}

function resetInteval1() {
    clearInterval(intervalID1);
    startInterval(interval1);
}

function resetInteval2() {
    clearInterval(intervalID2);
    startInterval(interval2);
}


const sliderTextSpeed = document.querySelector("#slider-text");
const sliderWindowSpeed = document.querySelector("#slider-window");
const sliderOutputText = document.querySelector("#options-slider-value-text");
const sliderOutputWindow = document.querySelector("#options-slider-value-window");

let textSpeed = 0;
let textSpeedID;
let windowSpeed = 0;
let windowSpeedID;

sliderTextSpeed.addEventListener("mousemove", () => {
    textSpeed = sliderTextSpeed.value;
    sliderOutputText.textContent = sliderTextSpeed.value;
    if (textSpeed !== 0) {
        resetInteval1();
        startInterval(textSpeedID, textSpeed, writeWord);
    }
});

sliderWindowSpeed.addEventListener("mousemove", () => {
    windowSpeed = sliderWindowSpeed.value;
    sliderOutputWindow.textContent = sliderWindowSpeed.value;
    if (textSpeed !== 0) {
        resetInteval2();
        startInterval(windowSpeedID, windowSpeed, chageMode);
    }
});