import './App.css';
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './Components/ChatFeed';
function App() {
  return (
    <div className="App">
     <ChatEngine
     height="100vh"
			projectID=
      "1c40d8f0-bee1-47f4-829a-b8d9e65d72f5"
			userName='archit09talwar'
			userSecret='dikshant'
      renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps}/> }
      onNewMessage = {()=> new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}
		/>
    </div>
  );
}

export default App;
