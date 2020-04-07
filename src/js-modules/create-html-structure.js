import Keyboard from "./keyboard";
import keyboardButtonData from "./keyboard-button-data";

function createHtmlStructure() {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  document.querySelector("body").append(wrapper);
  document.querySelector(".wrapper").append(document.createElement("header"));

  const discription = document.createElement("h1");
  discription.innerText = "Virtual Keyboard";
  document.querySelector("header").append(discription);

  document.querySelector(".wrapper").append(document.createElement("main"));
  const main = document.querySelector("main");

  const switchLanguage = document.createElement("h2");
  switchLanguage.innerHTML = "Keyboard created in Windows operating system <br> Switch language - Left Shift + Left Alt";
  main.append(switchLanguage);

  const sectionKeyboard = document.createElement("section");
  sectionKeyboard.className = "main__section-keyboard";
  main.prepend(sectionKeyboard);

  const keyboardRuLowerCase = new Keyboard(keyboardButtonData, "rus", "valueLowerCase");
  const keyboardRuUpperCase = new Keyboard(keyboardButtonData, "rus", "valueUpperCase");
  const keyboardRuLowerSpecialCase = new Keyboard(keyboardButtonData, "rus", "valueLowerSpecialCase");
  const keyboardRuUpperSpecialCase = new Keyboard(keyboardButtonData, "rus", "valueUpperSpecialCase");
  const keyboardEngLowerCase = new Keyboard(keyboardButtonData, "eng", "valueLowerCase");
  const keyboardEngUpperCase = new Keyboard(keyboardButtonData, "eng", "valueUpperCase");
  const keyboardEngLowerSpecialCase = new Keyboard(keyboardButtonData, "eng", "valueLowerSpecialCase");
  const keyboardEngUpperSpecialCase = new Keyboard(keyboardButtonData, "eng", "valueUpperSpecialCase");
  const textarea = document.createElement("textarea");
  textarea.autofocus = true;

  document.querySelector(".main__section-keyboard").prepend(keyboardEngUpperSpecialCase.dataKeyboard);
  document.querySelector(".main__section-keyboard").prepend(keyboardEngLowerSpecialCase.dataKeyboard);
  document.querySelector(".main__section-keyboard").prepend(keyboardEngUpperCase.dataKeyboard);
  document.querySelector(".main__section-keyboard").prepend(keyboardEngLowerCase.dataKeyboard);
  document.querySelector(".main__section-keyboard").prepend(keyboardRuUpperSpecialCase.dataKeyboard);
  document.querySelector(".main__section-keyboard").prepend(keyboardRuLowerSpecialCase.dataKeyboard);
  document.querySelector(".main__section-keyboard").prepend(keyboardRuUpperCase.dataKeyboard);
  document.querySelector(".main__section-keyboard").prepend(keyboardRuLowerCase.dataKeyboard);
  document.querySelector(".main__section-keyboard").prepend(textarea);

  document.querySelector(".wrapper").append(document.createElement("footer"));
  const createBy = document.createElement("p");
  createBy.innerText = "Virtual keyboard create by @Raizer58";
  document.querySelector("footer").append(createBy);
}

export default createHtmlStructure;
