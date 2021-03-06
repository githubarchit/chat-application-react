import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
    const { chats,activeChat,userName,messages } = props;
    const chat = chats && chats[activeChat]; //in this line if chats is true or they xist then chat will store the active chat
    const renderReadRecipts = (message, isMyMessage) => chat.people.map((person, index)=> person.last_read === message.id &&(
        <div
        key = {'read_${index}'}
        className = "read-receipt "
        style = {{
            float : isMyMessage ? "left" : "right",
            backgroundImage : person.person.avatar && `url(${person.person.avatar})`,
        }}
        ></div>
    ) );
    
    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map( (keys,index) => {
            const message = messages[keys];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.userName;
            return(
            <div key={'msg_${index}'} style={{width:"100%"}}>
                <div className="message-block">
                    {
                        isMyMessage
                        ?<MyMessage message={message}/>
                        :<TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                    }
                </div>

                <div className="read-reciepts" style={{marginRight: isMyMessage ? '18px' : '0px',marginLeft: isMyMessage ? '0px':'68px'}}>
                    {renderReadRecipts(message,isMyMessage)}
                </div>
            </div>
            )
        })

        }
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">

                </div>
                {renderMessages()}
                <div style = {{height:'100px'}}></div>
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;