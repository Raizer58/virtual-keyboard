const keyboardButtonData = {
  rus: [
    {
      code: "Backquote", valueLowerCase: "ё", valueUpperCase: "Ё", valueLowerSpecialCase: "ё", valueUpperSpecialCase: "Ё"
    },
    {
      code: "Digit1", valueLowerCase: "1", valueUpperCase: "1", valueLowerSpecialCase: "!", valueUpperSpecialCase: "!"
    },
    {
      code: "Digit2", valueLowerCase: "2", valueUpperCase: "2", valueLowerSpecialCase: "\"", valueUpperSpecialCase: "\""
    },
    {
      code: "Digit3", valueLowerCase: "3", valueUpperCase: "3", valueLowerSpecialCase: "№", valueUpperSpecialCase: "№"
    },
    {
      code: "Digit4", valueLowerCase: "4", valueUpperCase: "4", valueLowerSpecialCase: ";", valueUpperSpecialCase: ";"
    },
    {
      code: "Digit5", valueLowerCase: "5", valueUpperCase: "5", valueLowerSpecialCase: "%", valueUpperSpecialCase: "%"
    },
    {
      code: "Digit6", valueLowerCase: "6", valueUpperCase: "6", valueLowerSpecialCase: ":", valueUpperSpecialCase: ":"
    },
    {
      code: "Digit7", valueLowerCase: "7", valueUpperCase: "7", valueLowerSpecialCase: "?", valueUpperSpecialCase: "?"
    },
    {
      code: "Digit8", valueLowerCase: "8", valueUpperCase: "8", valueLowerSpecialCase: "*", valueUpperSpecialCase: "*"
    },
    {
      code: "Digit9", valueLowerCase: "9", valueUpperCase: "9", valueLowerSpecialCase: "(", valueUpperSpecialCase: "("
    },
    {
      code: "Digit0", valueLowerCase: "0", valueUpperCase: "0", valueLowerSpecialCase: ")", valueUpperSpecialCase: ")"
    },
    {
      code: "Minus", valueLowerCase: "-", valueUpperCase: "-", valueLowerSpecialCase: "_", valueUpperSpecialCase: "_"
    },
    {
      code: "Equal", valueLowerCase: "=", valueUpperCase: "=", valueLowerSpecialCase: "+", valueUpperSpecialCase: "+"
    },
    {
      code: "Backspace", valueLowerCase: "Backspace", valueUpperCase: "Backspace", valueLowerSpecialCase: "Backspace", valueUpperSpecialCase: "Backspace"
    },

    {
      code: "Tab", valueLowerCase: "Tab", valueUpperCase: "Tab", valueLowerSpecialCase: "Tab", valueUpperSpecialCase: "Tab"
    },
    {
      code: "KeyQ", valueLowerCase: "й", valueUpperCase: "Й", valueLowerSpecialCase: "й", valueUpperSpecialCase: "Й"
    },
    {
      code: "KeyW", valueLowerCase: "ц", valueUpperCase: "Ц", valueLowerSpecialCase: "ц", valueUpperSpecialCase: "Ц"
    },
    {
      code: "KeyE", valueLowerCase: "у", valueUpperCase: "У", valueLowerSpecialCase: "у", valueUpperSpecialCase: "У"
    },
    {
      code: "KeyR", valueLowerCase: "к", valueUpperCase: "К", valueLowerSpecialCase: "к", valueUpperSpecialCase: "К"
    },
    {
      code: "KeyT", valueLowerCase: "е", valueUpperCase: "Е", valueLowerSpecialCase: "е", valueUpperSpecialCase: "Е"
    },
    {
      code: "KeyY", valueLowerCase: "н", valueUpperCase: "Н", valueLowerSpecialCase: "н", valueUpperSpecialCase: "Н"
    },
    {
      code: "KeyU", valueLowerCase: "г", valueUpperCase: "Г", valueLowerSpecialCase: "г", valueUpperSpecialCase: "Г"
    },
    {
      code: "KeyI", valueLowerCase: "ш", valueUpperCase: "Ш", valueLowerSpecialCase: "ш", valueUpperSpecialCase: "Ш"
    },
    {
      code: "KeyO", valueLowerCase: "щ", valueUpperCase: "Щ", valueLowerSpecialCase: "щ", valueUpperSpecialCase: "Щ"
    },
    {
      code: "KeyP", valueLowerCase: "з", valueUpperCase: "З", valueLowerSpecialCase: "з", valueUpperSpecialCase: "З"
    },
    {
      code: "BracketLeft", valueLowerCase: "х", valueUpperCase: "Х", valueLowerSpecialCase: "х", valueUpperSpecialCase: "Х"
    },
    {
      code: "BracketRight", valueLowerCase: "ъ", valueUpperCase: "Ъ", valueLowerSpecialCase: "ъ", valueUpperSpecialCase: "Ъ"
    },
    {
      code: "Backslash", valueLowerCase: "\\", valueUpperCase: "\\", valueLowerSpecialCase: "/", valueUpperSpecialCase: "/"
    },
    {
      code: "Delete", valueLowerCase: "Del", valueUpperCase: "Del", valueLowerSpecialCase: "Del", valueUpperSpecialCase: "Del"
    },

    {
      code: "CapsLock", valueLowerCase: "CapsLock", valueUpperCase: "CapsLock", valueLowerSpecialCase: "CapsLock", valueUpperSpecialCase: "CapsLock"
    },
    {
      code: "KeyA", valueLowerCase: "ф", valueUpperCase: "Ф", valueLowerSpecialCase: "ф", valueUpperSpecialCase: "Ф"
    },
    {
      code: "KeyS", valueLowerCase: "ы", valueUpperCase: "Ы", valueLowerSpecialCase: "ы", valueUpperSpecialCase: "Ы"
    },
    {
      code: "KeyD", valueLowerCase: "в", valueUpperCase: "В", valueLowerSpecialCase: "в", valueUpperSpecialCase: "В"
    },
    {
      code: "KeyF", valueLowerCase: "а", valueUpperCase: "А", valueLowerSpecialCase: "а", valueUpperSpecialCase: "А"
    },
    {
      code: "KeyG", valueLowerCase: "п", valueUpperCase: "П", valueLowerSpecialCase: "п", valueUpperSpecialCase: "П"
    },
    {
      code: "KeyH", valueLowerCase: "р", valueUpperCase: "Р", valueLowerSpecialCase: "р", valueUpperSpecialCase: "Р"
    },
    {
      code: "KeyJ", valueLowerCase: "о", valueUpperCase: "О", valueLowerSpecialCase: "о", valueUpperSpecialCase: "О"
    },
    {
      code: "KeyK", valueLowerCase: "л", valueUpperCase: "Л", valueLowerSpecialCase: "л", valueUpperSpecialCase: "Л"
    },
    {
      code: "KeyL", valueLowerCase: "д", valueUpperCase: "Д", valueLowerSpecialCase: "д", valueUpperSpecialCase: "Д"
    },
    {
      code: "Semicolon", valueLowerCase: "ж", valueUpperCase: "Ж", valueLowerSpecialCase: "ж", valueUpperSpecialCase: "Ж"
    },
    {
      code: "Quote", valueLowerCase: "э", valueUpperCase: "Э", valueLowerSpecialCase: "э", valueUpperSpecialCase: "Э"
    },
    {
      code: "Enter", valueLowerCase: "Enter", valueUpperCase: "Enter", valueLowerSpecialCase: "Enter", valueUpperSpecialCase: "Enter"
    },

    {
      code: "ShiftLeft", valueLowerCase: "Shift", valueUpperCase: "Shift", valueLowerSpecialCase: "Shift", valueUpperSpecialCase: "Shift"
    },
    {
      code: "KeyZ", valueLowerCase: "я", valueUpperCase: "Я", valueLowerSpecialCase: "я", valueUpperSpecialCase: "Я"
    },
    {
      code: "KeyX", valueLowerCase: "ч", valueUpperCase: "Ч", valueLowerSpecialCase: "ч", valueUpperSpecialCase: "Ч"
    },
    {
      code: "KeyC", valueLowerCase: "с", valueUpperCase: "С", valueLowerSpecialCase: "с", valueUpperSpecialCase: "С"
    },
    {
      code: "KeyV", valueLowerCase: "м", valueUpperCase: "М", valueLowerSpecialCase: "м", valueUpperSpecialCase: "М"
    },
    {
      code: "KeyB", valueLowerCase: "и", valueUpperCase: "И", valueLowerSpecialCase: "и", valueUpperSpecialCase: "И"
    },
    {
      code: "KeyN", valueLowerCase: "т", valueUpperCase: "Т", valueLowerSpecialCase: "т", valueUpperSpecialCase: "Т"
    },
    {
      code: "KeyM", valueLowerCase: "ь", valueUpperCase: "Ь", valueLowerSpecialCase: "ь", valueUpperSpecialCase: "Ь"
    },
    {
      code: "Comma", valueLowerCase: "б", valueUpperCase: "Б", valueLowerSpecialCase: "б", valueUpperSpecialCase: "Б"
    },
    {
      code: "Period", valueLowerCase: "ю", valueUpperCase: "Ю", valueLowerSpecialCase: "ю", valueUpperSpecialCase: "Ю"
    },
    {
      code: "Slash", valueLowerCase: ".", valueUpperCase: ".", valueLowerSpecialCase: ",", valueUpperSpecialCase: ","
    },
    {
      code: "ArrowUp", valueLowerCase: "&#8679", valueUpperCase: "&#8679", valueLowerSpecialCase: "&#8679", valueUpperSpecialCase: "&#8679"
    },
    {
      code: "ShiftRight", valueLowerCase: "Shift", valueUpperCase: "Shift", valueLowerSpecialCase: "Shift", valueUpperSpecialCase: "Shift"
    },

    {
      code: "ControlLeft", valueLowerCase: "Ctrl", valueUpperCase: "Ctrl", valueLowerSpecialCase: "Ctrl", valueUpperSpecialCase: "Ctrl"
    },
    {
      code: "MetaLeft", valueLowerCase: "Win", valueUpperCase: "Win", valueLowerSpecialCase: "Win", valueUpperSpecialCase: "Win"
    },
    {
      code: "AltLeft", valueLowerCase: "Alt", valueUpperCase: "Alt", valueLowerSpecialCase: "Alt", valueUpperSpecialCase: "Alt"
    },
    {
      code: "Space", valueLowerCase: "&#160", valueUpperCase: "&#160", valueLowerSpecialCase: "&#160", valueUpperSpecialCase: "&#160"
    },
    {
      code: "AltRight", valueLowerCase: "Alt", valueUpperCase: "Alt", valueLowerSpecialCase: "Alt", valueUpperSpecialCase: "Alt"
    },
    {
      code: "ArrowLeft", valueLowerCase: "&#8678", valueUpperCase: "&#8678", valueLowerSpecialCase: "&#8678", valueUpperSpecialCase: "&#8678"
    },
    {
      code: "ArrowDown", valueLowerCase: "&#8681", valueUpperCase: "&#8681", valueLowerSpecialCase: "&#8681", valueUpperSpecialCase: "&#8681"
    },
    {
      code: "ArrowRight", valueLowerCase: "&#8680", valueUpperCase: "&#8680", valueLowerSpecialCase: "&#8680", valueUpperSpecialCase: "&#8680"
    },
    {
      code: "ControlRight", valueLowerCase: "Ctrl", valueUpperCase: "Ctrl", valueLowerSpecialCase: "Ctrl", valueUpperSpecialCase: "Ctrl"
    }
  ],
  eng: [
    {
      code: "Backquote", valueLowerCase: "`", valueUpperCase: "`", valueLowerSpecialCase: "~", valueUpperSpecialCase: "~"
    },
    {
      code: "Digit1", valueLowerCase: "1", valueUpperCase: "1", valueLowerSpecialCase: "!", valueUpperSpecialCase: "!"
    },
    {
      code: "Digit2", valueLowerCase: "2", valueUpperCase: "2", valueLowerSpecialCase: "@", valueUpperSpecialCase: "@"
    },
    {
      code: "Digit3", valueLowerCase: "3", valueUpperCase: "3", valueLowerSpecialCase: "#", valueUpperSpecialCase: "#"
    },
    {
      code: "Digit4", valueLowerCase: "4", valueUpperCase: "4", valueLowerSpecialCase: "$", valueUpperSpecialCase: "$"
    },
    {
      code: "Digit5", valueLowerCase: "5", valueUpperCase: "5", valueLowerSpecialCase: "%", valueUpperSpecialCase: "%"
    },
    {
      code: "Digit6", valueLowerCase: "6", valueUpperCase: "6", valueLowerSpecialCase: "^", valueUpperSpecialCase: "^"
    },
    {
      code: "Digit7", valueLowerCase: "7", valueUpperCase: "7", valueLowerSpecialCase: "&", valueUpperSpecialCase: "&"
    },
    {
      code: "Digit8", valueLowerCase: "8", valueUpperCase: "8", valueLowerSpecialCase: "*", valueUpperSpecialCase: "*"
    },
    {
      code: "Digit9", valueLowerCase: "9", valueUpperCase: "9", valueLowerSpecialCase: "(", valueUpperSpecialCase: "("
    },
    {
      code: "Digit0", valueLowerCase: "0", valueUpperCase: "0", valueLowerSpecialCase: ")", valueUpperSpecialCase: ")"
    },
    {
      code: "Minus", valueLowerCase: "-", valueUpperCase: "-", valueLowerSpecialCase: "_", valueUpperSpecialCase: "_"
    },
    {
      code: "Equal", valueLowerCase: "=", valueUpperCase: "=", valueLowerSpecialCase: "+", valueUpperSpecialCase: "+"
    },
    {
      code: "Backspace", valueLowerCase: "Backspace", valueUpperCase: "Backspace", valueLowerSpecialCase: "Backspace", valueUpperSpecialCase: "Backspace"
    },

    {
      code: "Tab", valueLowerCase: "Tab", valueUpperCase: "Tab", valueLowerSpecialCase: "Tab", valueUpperSpecialCase: "Tab"
    },
    {
      code: "KeyQ", valueLowerCase: "q", valueUpperCase: "Q", valueLowerSpecialCase: "q", valueUpperSpecialCase: "Q"
    },
    {
      code: "KeyW", valueLowerCase: "w", valueUpperCase: "W", valueLowerSpecialCase: "w", valueUpperSpecialCase: "W"
    },
    {
      code: "KeyE", valueLowerCase: "e", valueUpperCase: "E", valueLowerSpecialCase: "e", valueUpperSpecialCase: "E"
    },
    {
      code: "KeyR", valueLowerCase: "r", valueUpperCase: "R", valueLowerSpecialCase: "r", valueUpperSpecialCase: "R"
    },
    {
      code: "KeyT", valueLowerCase: "t", valueUpperCase: "T", valueLowerSpecialCase: "t", valueUpperSpecialCase: "T"
    },
    {
      code: "KeyY", valueLowerCase: "y", valueUpperCase: "Y", valueLowerSpecialCase: "y", valueUpperSpecialCase: "Y"
    },
    {
      code: "KeyU", valueLowerCase: "u", valueUpperCase: "U", valueLowerSpecialCase: "u", valueUpperSpecialCase: "U"
    },
    {
      code: "KeyI", valueLowerCase: "i", valueUpperCase: "I", valueLowerSpecialCase: "i", valueUpperSpecialCase: "I"
    },
    {
      code: "KeyO", valueLowerCase: "o", valueUpperCase: "O", valueLowerSpecialCase: "o", valueUpperSpecialCase: "O"
    },
    {
      code: "KeyP", valueLowerCase: "p", valueUpperCase: "P", valueLowerSpecialCase: "p", valueUpperSpecialCase: "P"
    },
    {
      code: "BracketLeft", valueLowerCase: "[", valueUpperCase: "[", valueLowerSpecialCase: "{", valueUpperSpecialCase: "{"
    },
    {
      code: "BracketRight", valueLowerCase: "]", valueUpperCase: "]", valueLowerSpecialCase: "}", valueUpperSpecialCase: "}"
    },
    {
      code: "Backslash", valueLowerCase: "\\", valueUpperCase: "\\", valueLowerSpecialCase: "|", valueUpperSpecialCase: "|"
    },
    {
      code: "Delete", valueLowerCase: "Del", valueUpperCase: "Del", valueLowerSpecialCase: "Del", valueUpperSpecialCase: "Del"
    },

    {
      code: "CapsLock", valueLowerCase: "CapsLock", valueUpperCase: "CapsLock", valueLowerSpecialCase: "CapsLock", valueUpperSpecialCase: "CapsLock"
    },
    {
      code: "KeyA", valueLowerCase: "a", valueUpperCase: "A", valueLowerSpecialCase: "a", valueUpperSpecialCase: "A"
    },
    {
      code: "KeyS", valueLowerCase: "s", valueUpperCase: "S", valueLowerSpecialCase: "s", valueUpperSpecialCase: "S"
    },
    {
      code: "KeyD", valueLowerCase: "d", valueUpperCase: "D", valueLowerSpecialCase: "d", valueUpperSpecialCase: "D"
    },
    {
      code: "KeyF", valueLowerCase: "f", valueUpperCase: "F", valueLowerSpecialCase: "f", valueUpperSpecialCase: "F"
    },
    {
      code: "KeyG", valueLowerCase: "g", valueUpperCase: "G", valueLowerSpecialCase: "g", valueUpperSpecialCase: "G"
    },
    {
      code: "KeyH", valueLowerCase: "h", valueUpperCase: "H", valueLowerSpecialCase: "h", valueUpperSpecialCase: "H"
    },
    {
      code: "KeyJ", valueLowerCase: "j", valueUpperCase: "J", valueLowerSpecialCase: "j", valueUpperSpecialCase: "J"
    },
    {
      code: "KeyK", valueLowerCase: "k", valueUpperCase: "K", valueLowerSpecialCase: "k", valueUpperSpecialCase: "K"
    },
    {
      code: "KeyL", valueLowerCase: "l", valueUpperCase: "L", valueLowerSpecialCase: "l", valueUpperSpecialCase: "L"
    },
    {
      code: "Semicolon", valueLowerCase: ";", valueUpperCase: ";", valueLowerSpecialCase: ":", valueUpperSpecialCase: ":"
    },
    {
      code: "Quote", valueLowerCase: "'", valueUpperCase: "'", valueLowerSpecialCase: "\"", valueUpperSpecialCase: "\""
    },
    {
      code: "Enter", valueLowerCase: "Enter", valueUpperCase: "Enter", valueLowerSpecialCase: "Enter", valueUpperSpecialCase: "Enter"
    },

    {
      code: "ShiftLeft", valueLowerCase: "Shift", valueUpperCase: "Shift", valueLowerSpecialCase: "Shift", valueUpperSpecialCase: "Shift"
    },
    {
      code: "KeyZ", valueLowerCase: "z", valueUpperCase: "Z", valueLowerSpecialCase: "z", valueUpperSpecialCase: "Z"
    },
    {
      code: "KeyX", valueLowerCase: "x", valueUpperCase: "X", valueLowerSpecialCase: "x", valueUpperSpecialCase: "X"
    },
    {
      code: "KeyC", valueLowerCase: "c", valueUpperCase: "C", valueLowerSpecialCase: "c", valueUpperSpecialCase: "C"
    },
    {
      code: "KeyV", valueLowerCase: "v", valueUpperCase: "V", valueLowerSpecialCase: "v", valueUpperSpecialCase: "V"
    },
    {
      code: "KeyB", valueLowerCase: "b", valueUpperCase: "B", valueLowerSpecialCase: "b", valueUpperSpecialCase: "B"
    },
    {
      code: "KeyN", valueLowerCase: "n", valueUpperCase: "N", valueLowerSpecialCase: "n", valueUpperSpecialCase: "N"
    },
    {
      code: "KeyM", valueLowerCase: "m", valueUpperCase: "M", valueLowerSpecialCase: "m", valueUpperSpecialCase: "M"
    },
    {
      code: "Comma", valueLowerCase: ",", valueUpperCase: ",", valueLowerSpecialCase: "<", valueUpperSpecialCase: "<"
    },
    {
      code: "Period", valueLowerCase: ".", valueUpperCase: ".", valueLowerSpecialCase: ">", valueUpperSpecialCase: ">"
    },
    {
      code: "Slash", valueLowerCase: "/", valueUpperCase: "/", valueLowerSpecialCase: "?", valueUpperSpecialCase: "?"
    },
    {
      code: "ArrowUp", valueLowerCase: "&#8679", valueUpperCase: "&#8679", valueLowerSpecialCase: "&#8679", valueUpperSpecialCase: "&#8679"
    },
    {
      code: "ShiftRight", valueLowerCase: "Shift", valueUpperCase: "Shift", valueLowerSpecialCase: "Shift", valueUpperSpecialCase: "Shift"
    },

    {
      code: "ControlLeft", valueLowerCase: "Ctrl", valueUpperCase: "Ctrl", valueLowerSpecialCase: "Ctrl", valueUpperSpecialCase: "Ctrl"
    },
    {
      code: "MetaLeft", valueLowerCase: "Win", valueUpperCase: "Win", valueLowerSpecialCase: "Win", valueUpperSpecialCase: "Win"
    },
    {
      code: "AltLeft", valueLowerCase: "Alt", valueUpperCase: "Alt", valueLowerSpecialCase: "Alt", valueUpperSpecialCase: "Alt"
    },
    {
      code: "Space", valueLowerCase: "&#160", valueUpperCase: "&#160", valueLowerSpecialCase: "&#160", valueUpperSpecialCase: "&#160"
    },
    {
      code: "AltRight", valueLowerCase: "Alt", valueUpperCase: "Alt", valueLowerSpecialCase: "Alt", valueUpperSpecialCase: "Alt"
    },
    {
      code: "ArrowLeft", valueLowerCase: "&#8678", valueUpperCase: "&#8678", valueLowerSpecialCase: "&#8678", valueUpperSpecialCase: "&#8678"
    },
    {
      code: "ArrowDown", valueLowerCase: "&#8681", valueUpperCase: "&#8681", valueLowerSpecialCase: "&#8681", valueUpperSpecialCase: "&#8681"
    },
    {
      code: "ArrowRight", valueLowerCase: "&#8680", valueUpperCase: "&#8680", valueLowerSpecialCase: "&#8680", valueUpperSpecialCase: "&#8680"
    },
    {
      code: "ControlRight", valueLowerCase: "Ctrl", valueUpperCase: "Ctrl", valueLowerSpecialCase: "Ctrl", valueUpperSpecialCase: "Ctrl"
    }
  ]
};

export default keyboardButtonData;
