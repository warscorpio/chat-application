const ThierMessage =({lastMessage, message})=>{
  const isFirstMessageByUSer = !lastMessage || lastMessage.sender.username!== message.sender.username;

  return(
    <div className="message-row">
    {isFirstMessageByUSer && (
      <div className="message-avatar"
      style={{backgroundImage: message.sender && `url(${message?.sender?.avatar})`}}
      />
    )}
    {message.attachments && message.attachments.length > 0
      ? (
        <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{marginLeft: isFirstMessageByUSer ? '4px' : '48px'}}
        />
      ) : (
        <div className="message" style={{float:"left", backgroundColor:'#cabcdc'}}>
        {message.text}
        </div>
      )}
    </div>
  );
}
export default ThierMessage;
