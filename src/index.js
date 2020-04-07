import "./scss/style.scss";
import createHtmlStructure from "./js-modules/create-html-structure.js";

// добавить на shift eventlistener на mousemoveout

createHtmlStructure();

let variablesState = {
  language: "rus",
  currentKeyboardStatus: "valueLowerCase",
  specialKey: false,
  caretPosition: 0
};

const main = document.querySelector("main");
const keyboardContainer = main.querySelectorAll("div");
const sectionKeyboard = document.querySelector(".main__section-keyboard");
const textareaKeyboard = document.querySelector(".main__section-keyboard>textarea");

if (localStorage.language) {
  variablesState.language = localStorage.language;
} else localStorage.setItem("language", "rus");

function keyboardLayoutSelection(language, caseKeyboard) { // выбор нужной раскладки клавиатуры
  keyboardContainer.forEach(el => {
    if (el.id === `${language}-${caseKeyboard}`) {
      el.classList.add("section-keyboard__keyboard_display-active");
    } else { el.classList.remove("section-keyboard__keyboard_display-active"); }
  });
}

function buttonDown(event) { // нажатие кнопок виртуальной клавиатуры
  let keyPositionForEnter;

  switch (event.target.classList[0]) {
    case "keyboard__ShiftLeft":
      variablesState.specialKey = true;
      if (variablesState.currentKeyboardStatus === "valueLowerCase") {
        keyboardLayoutSelection(variablesState.language, "valueUpperSpecialCase");
      } else { keyboardLayoutSelection(variablesState.language, "valueLowerSpecialCase"); }
      break;
    case "keyboard__ShiftRight":
      variablesState.specialKey = true;
      if (variablesState.currentKeyboardStatus === "valueLowerCase") {
        keyboardLayoutSelection(variablesState.language, "valueUpperSpecialCase");
      } else { keyboardLayoutSelection(variablesState.language, "valueLowerSpecialCase"); }
      break;
    case "keyboard__CapsLock":
      if (!event.target.classList.contains("keyboard__button_active")) {
        variablesState.currentKeyboardStatus = "valueUpperCase";
        if (!variablesState.specialKey) {
          keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
        } else { keyboardLayoutSelection(variablesState.language, "valueLowerSpecialCase"); }
      } else if (event.target.classList.contains("keyboard__button_active")) {
        variablesState.currentKeyboardStatus = "valueLowerCase";
        if (!variablesState.specialKey) {
          keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
        } else { keyboardLayoutSelection(variablesState.language, "valueUpperSpecialCase"); }
      }
      sectionKeyboard.querySelectorAll(".keyboard__CapsLock").forEach(el => el.classList.toggle("keyboard__button_active"));
      break;
    case "keyboard__Digit7": // решение для вставки &
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + event.target.innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Backspace":
      if (variablesState.caretPosition > 0) {
        if (textareaKeyboard.selectionStart < textareaKeyboard.selectionEnd) {
          textareaKeyboard.value = textareaKeyboard.value.slice(0, textareaKeyboard.selectionStart)
          + textareaKeyboard.value.slice(textareaKeyboard.selectionEnd);
        } else {
          textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition - 1)
          + textareaKeyboard.value.slice(variablesState.caretPosition);
          variablesState.caretPosition -= 1;
        }
      }
      break;
    case "keyboard__Delete":
      if (textareaKeyboard.selectionStart < textareaKeyboard.selectionEnd) {
        textareaKeyboard.value = textareaKeyboard.value.slice(0, textareaKeyboard.selectionStart)
        + textareaKeyboard.value.slice(textareaKeyboard.selectionEnd);
      } else {
        textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
        + textareaKeyboard.value.slice(variablesState.caretPosition + 1);
      }
      break;
    case "keyboard__Enter":
      keyPositionForEnter = textareaKeyboard.textLength - variablesState.caretPosition;
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + "\n" + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition = textareaKeyboard.textLength - keyPositionForEnter;
      break;
    case "keyboard__Space":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition) + " " + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Tab":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition) + "        " + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 8;
      break;
    case "keyboard__ControlLeft":
      break;
    case "keyboard__ControlRight":
      break;
    case "keyboard__AltLeft":
      break;
    case "keyboard__AltRight":
      break;
    case "keyboard__MetaLeft":
      break;
    case "section-keyboard__keyboard":
      break;
    case "main__section-keyboard":
      break;
    case undefined:
      break;
    default: // все остальные кнопки
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + event.target.innerText + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
  }

  textareaKeyboard.focus();

  if (event.target.type !== "textarea") { // отслеживание изменения положения каретки textarea пользователем
    textareaKeyboard.selectionStart = variablesState.caretPosition;
    textareaKeyboard.selectionEnd = variablesState.caretPosition;
  }
}

function buttonUp(event) { // отпускание кнопок виртуальной клавиатуры
  switch (event.target.classList[0]) {
    case "keyboard__ShiftLeft":
      keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
      variablesState.specialKey = false;
      break;
    case "keyboard__ShiftRight":
      keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
      variablesState.specialKey = false;
      break;
    default:
      break;
  }

  textareaKeyboard.focus();
  if (event.target.type === "textarea") {
    variablesState.caretPosition = variablesState.caretPosition === textareaKeyboard.selectionStart
      ? variablesState.caretPosition : textareaKeyboard.selectionStart;
  }
}

function keyDown(event) { // нажатие кнопок физической клавиатуры
  event.preventDefault();
  let keyPositionForEnter;
  let keyActiveShift = false;
  let activeKeyboardLayout = document.querySelector(".main__section-keyboard>.section-keyboard__keyboard_display-active");

  switch (`keyboard__${event.code}`) {
    case "keyboard__ShiftLeft":
      variablesState.specialKey = true;
      sectionKeyboard.querySelectorAll(".keyboard__ShiftRight").forEach(el => {
        if (el.classList.contains("keyboard__button_active")) {
          keyActiveShift = true;
        }
      });
      if (!keyActiveShift) {
        if (variablesState.currentKeyboardStatus === "valueLowerCase") {
          keyboardLayoutSelection(variablesState.language, "valueUpperSpecialCase");
        } else { keyboardLayoutSelection(variablesState.language, "valueLowerSpecialCase"); }
        sectionKeyboard.querySelectorAll(`.keyboard__${event.code}`).forEach(el => el.classList.add("keyboard__button_active"));
      }
      break;
    case "keyboard__ShiftRight":
      variablesState.specialKey = true;
      sectionKeyboard.querySelectorAll(".keyboard__ShiftLeft").forEach(el => {
        if (el.classList.contains("keyboard__button_active")) {
          keyActiveShift = true;
        }
      });
      if (!keyActiveShift) {
        if (variablesState.currentKeyboardStatus === "valueLowerCase") {
          keyboardLayoutSelection(variablesState.language, "valueUpperSpecialCase");
        } else { keyboardLayoutSelection(variablesState.language, "valueLowerSpecialCase"); }
        sectionKeyboard.querySelectorAll(`.keyboard__${event.code}`).forEach(el => el.classList.add("keyboard__button_active"));
      }
      break;
    case "keyboard__CapsLock":
      if (!activeKeyboardLayout.querySelector(".keyboard__CapsLock").classList.contains("keyboard__button_active")) {
        variablesState.currentKeyboardStatus = "valueUpperCase";
        if (!variablesState.specialKey) {
          keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
        } else { keyboardLayoutSelection(variablesState.language, "valueLowerSpecialCase"); }
      } else if (activeKeyboardLayout.querySelector(".keyboard__CapsLock").classList.contains("keyboard__button_active")) {
        variablesState.currentKeyboardStatus = "valueLowerCase";
        if (!variablesState.specialKey) {
          keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
        } else { keyboardLayoutSelection(variablesState.language, "valueUpperSpecialCase"); }
      }
      sectionKeyboard.querySelectorAll(".keyboard__CapsLock").forEach(el => el.classList.toggle("keyboard__button_active"));
      break;
    case "keyboard__Backspace":
      if (variablesState.caretPosition > 0) {
        if (textareaKeyboard.selectionStart < textareaKeyboard.selectionEnd) {
          textareaKeyboard.value = textareaKeyboard.value.slice(0, textareaKeyboard.selectionStart)
          + textareaKeyboard.value.slice(textareaKeyboard.selectionEnd);
        } else {
          textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition - 1)
          + textareaKeyboard.value.slice(variablesState.caretPosition);
          variablesState.caretPosition -= 1;
        }
      }
      break;
    case "keyboard__Delete":
      if (textareaKeyboard.selectionStart < textareaKeyboard.selectionEnd) {
        textareaKeyboard.value = textareaKeyboard.value.slice(0, textareaKeyboard.selectionStart)
        + textareaKeyboard.value.slice(textareaKeyboard.selectionEnd);
      } else {
        textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
        + textareaKeyboard.value.slice(variablesState.caretPosition + 1);
      }
      break;
    case "keyboard__Enter":
      keyPositionForEnter = textareaKeyboard.textLength - variablesState.caretPosition;
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + "\n" + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition = textareaKeyboard.textLength - keyPositionForEnter;
      break;
    case "keyboard__Space":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + " " + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Tab":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + "        " + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 8;
      break;
    case "keyboard__ControlLeft":
      break;
    case "keyboard__ControlRight":
      break;
    case "keyboard__AltLeft":
      break;
    case "keyboard__AltRight":
      break;
    case "keyboard__MetaLeft":
      break;
    case "section-keyboard__keyboard":
      break;
    case "main__section-keyboard":
      break;
    case undefined:
      break;
    case "keyboard__Backquote":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit1":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit2":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit3":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit4":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit5":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit6":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit7": // решение для вставки &
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit8":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit9":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Digit0":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Minus":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Equal":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyQ":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyW":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyE":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyR":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyT":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyY":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyU":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyI":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyO":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyP":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__BracketLeft":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__BracketRight":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Backslash":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyA":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyS":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyD":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
        + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
        + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyF":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyG":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyH":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyJ":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyK":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyL":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Semicolon":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Quote":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyZ":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyX":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyC":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyV":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyB":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyN":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__KeyM":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Comma":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Period":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__Slash":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__ArrowUp":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__ArrowLeft":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__ArrowDown":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    case "keyboard__ArrowRight":
      textareaKeyboard.value = textareaKeyboard.value.slice(0, variablesState.caretPosition)
      + activeKeyboardLayout.querySelector(`.keyboard__${event.code}`).innerText.slice(0, 1)
      + textareaKeyboard.value.slice(variablesState.caretPosition);
      variablesState.caretPosition += 1;
      break;
    default:
      break;
  }

  if (event.code !== "CapsLock" && event.code !== "ShiftLeft" && event.code !== "ShiftRight") {
    sectionKeyboard.querySelectorAll(`.keyboard__${event.code}`).forEach(el => el.classList.add("keyboard__button_active"));
  }

  textareaKeyboard.focus();
  textareaKeyboard.selectionStart = variablesState.caretPosition;
  textareaKeyboard.selectionEnd = variablesState.caretPosition;
}

function keyUp(event) { // отпускание кнопок физической клавиатуры
  if (event.code !== "CapsLock") {
    sectionKeyboard.querySelectorAll(`.keyboard__${event.code}`).forEach(el => el.classList.remove("keyboard__button_active"));
  }

  switch (`keyboard__${event.code}`) {
    case "keyboard__ShiftLeft":
      keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
      variablesState.specialKey = false;
      break;
    case "keyboard__ShiftRight":
      keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
      variablesState.specialKey = false;
      break;
    default:
      break;
  }

  if (event.shiftKey && event.code === "AltLeft") { // переключение языковой раскладки
    if (variablesState.language === "rus") {
      variablesState.language = "eng";
      localStorage.setItem("language", "eng");
    } else {
      variablesState.language = "rus";
      localStorage.setItem("language", "rus");
    }
    if (!variablesState.specialKey) {
      keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
    } else if (variablesState.specialKey) {
      if (variablesState.currentKeyboardStatus === "valueUpperCase") {
        keyboardLayoutSelection(variablesState.language, "valueLowerSpecialCase");
      } else { keyboardLayoutSelection(variablesState.language, "valueUpperSpecialCase"); }
    }
  }
  if (event.altKey && event.code === "ShiftLeft") { // переключение языковой раскладки
    if (variablesState.language === "rus") {
      variablesState.language = "eng";
      localStorage.setItem("language", "eng");
    } else {
      variablesState.language = "rus";
      localStorage.setItem("language", "rus");
    }
    if (!variablesState.specialKey) {
      keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
    } else if (variablesState.specialKey) {
      if (variablesState.currentKeyboardStatus === "valueUpperCase") {
        keyboardLayoutSelection(variablesState.language, "valueLowerSpecialCase");
      } else { keyboardLayoutSelection(variablesState.language, "valueUpperSpecialCase"); }
    }
  }

  textareaKeyboard.focus();
  textareaKeyboard.selectionStart = variablesState.caretPosition;
}

keyboardLayoutSelection(variablesState.language, variablesState.currentKeyboardStatus);
sectionKeyboard.addEventListener("mousedown", buttonDown);
sectionKeyboard.addEventListener("mouseup", buttonUp);
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
