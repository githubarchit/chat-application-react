const MyMessage = ({message}) => {
    if(message.attachements && message.attachements.length>0) {
        return(
            <img src={message.attachment[0].file} alt="message-attachement"className="message-image" style = {{float:'right'}} />

        );
    }

    return (
        <div className="message" style={{float:'right',marginRight:'18px',color:"White" ,baclgroundColor:"#3b2a50"}}>
            {message.text}
        </div>
    )
}

export default MyMessage;