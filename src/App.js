import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import img1 from './assets/discord-logo-png-7617.png'


function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <div id='mybutton'><button className="bot"><img src={img1} alt='png' onClick={() => setVisible(true)}   /></button></div>
      <ReactModal isOpen={visible} onRequestClose={() => setVisible(false)} className="bot-contain">
        <div className="App">
          <header className="App-header">
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
          </header>
        </div>
      </ReactModal>
    </>
  );
}

export default App;