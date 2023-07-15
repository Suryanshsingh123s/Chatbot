class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage=message.toLowerCase();
        
        
        if(lowerCaseMessage.includes('hello') || 
        lowerCaseMessage.includes('hi') ||
        lowerCaseMessage.includes('Hi')){
            this.actionProvider.greet();
        }
        if (lowerCaseMessage.includes('ams')  || 
        lowerCaseMessage.includes('services') ) {
          this.actionProvider.AMS();
        }
    }
  }
  
  export default MessageParser;