import React, {useState} from 'react';
import AceEditor from "react-ace";
// import { XTerm } from "xterm-for-react";
import socketIOClient from "socket.io-client";

//socket connection to the server
const socket = socketIOClient('http://localhost:3000');

// importing all mode which are lanuages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-coffee";

// importing all themes for the editor
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-clouds_midnight";

const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "eclipse",
  "twilight",
  "xcode",
  "solarized_dark",
  "solarized_light",
  "terminal",
  "clouds_midnight",
];

const modes = [
  "javascript",
  "java",
  "python",
  "sass",
  "html",
  "css",
  "coffee",
];

const fontSizes = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//this will render code editor to SessionRoom
function CodeEditor() {
  const [mode, setMode] = useState("javascript");
  const [code, setCode] = useState(``);
  const [theme, setTheme] = useState("monokai");
  const [fontSize, setFontSize] = useState(16);
 
  // send text to server on every handle change
  const handleTextChange = (text) => {
    socket.emit('textcode', text)
  };

  // but we need to update state, we can also 
  // change state but send out the text
  socket.on('textcode', (code) => {
    setCode(code)
  })  
  
  
  return (
    <div>
       <AceEditor
          theme={theme}
          value={code}
          mode={mode}
          fontSize={fontSize}
          onChange={handleTextChange}
        />
    </div>
  )
}

export default CodeEditor; 


// const handleTextChange = (text) => {
//   socket.emit('textCode', {text}) 
//  }; 

//  socket.on('textCode', (data) => {
//    setCode(data); 
//  })