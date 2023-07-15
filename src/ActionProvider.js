class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    default
    handleDefault = () => {
       const message = this.createChatBotMessage(
         "I'm sorry .I didn't get that. How can I help? Here is the overview.",
         {
           withAvatar: true,
           widget: "sherbotOptions",
         }
       );
    
       this.updateChatbotState(message);
     };

    handleSoftware=()=>{
        const message1=this.createChatBotMessage(
            "We are now venturing into manufacturing facility for the high end embedded systems. While demand graphs have moved northwards across sectors, demand for high technology products, specifically electronic products, has registered significant growth. ",
            {
                widget:"Software",
                withAvator:true,
            }
            
        );
        this.updateChatbotState(message1);
    };

    greet(){
        const greetingMessage = this.createChatBotMessage("Hello");
        this.updateChatbotState(greetingMessage);
    }

    AMS(){
      const amsMessage = this.createChatBotMessage("With maintenance cost rising and software audits becoming more frequent, managing IT assets within an organization has become a high priority, Aigutech Developed Relion which is a connected frame work which Eliminate infrastructure debt by making you Know what you have, where it is, Optimize operational efficiencies by offering Auditing, monitoring, and change control, service response times, Improve migration planning by making you understand device and services dependencies.",
      {
        widget:"AMS",
        withAvator:true,
    });
      this.updateChatbotState(amsMessage);
    }

    updateChatbotState(message){
       
       this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}
  
  export default ActionProvider;