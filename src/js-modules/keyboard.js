
class Keyboard {
  constructor(data, lang, keyboardKey) {
    function createKeyboard(arg) {
      let keyboard = document.createElement("div");
      keyboard.id = `${lang}-${keyboardKey}`;
      keyboard.className = "section-keyboard__keyboard";

      arg[lang].forEach(el => {
        keyboard.innerHTML += `<button class="keyboard__${el.code}">${el[keyboardKey]}</button>`;
      });

      return keyboard;
    }

    this.dataKeyboard = createKeyboard(data);
    this.lang = lang;
    this.keyboardKey = keyboardKey;
  }
}

export default Keyboard;
