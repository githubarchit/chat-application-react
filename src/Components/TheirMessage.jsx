const TheirMessage = ({lastMessage, message}) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !=message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser &&  (
                <div className="message-avatar"
                style={{backgroundImage:message.sender && `url(${message.sender.avatar})`}}
                />
            )}

            {message.attachments && message.attachments.length>0
            ? <img src={message.attachment[0].file} alt="message-attachement"className="message-image" style = {{marginLeft:isFirstMessageByUser ? '4px':'48px'}} />
                : <div className="message" style={{float:'left' ,baclgroundColor:"#CABCDC" ,marginLeft:isFirstMessageByUser ? '4px':'48px'}}>
                {message.text}
            </div>}
        </div>
    )}

export default TheirMessage;