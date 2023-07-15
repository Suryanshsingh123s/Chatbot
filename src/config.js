import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./components/Options/Options";
import LinkList from "./components/LinkList/LinkList";
import BotAvatar from "./components/BotAvatar";

const config = {
    initialMessages: [
        createChatBotMessage("Hello How May I help You ?"),
        
        createChatBotMessage("What do you want to go ahead with?", {
            widget: "sherbotOptions",
            withAvatar: true,
        }),
      ],
    
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
      },  

    customStyles : {
        botMessageBox : {
            backgroundColor: '#000000',
        },
        chatButton :{
            backgroundColor : '#000000',
        },
    },

    widgets: [
        {
            widgetName: "sherbotOptions",
            widgetFunc: (props) => <Options {...props} />,
        },

        {
            widgetName:"Software",
            widgetFunc:(props)=><LinkList {...props} />,
            props: {
                options:[
                    {
                        text:"Know more about softwares here",
                        url:"https://basera01.netlify.app/rooms/single-basic#demo",
                        id:1,
                    },
                ],
            },
        },
        {
            widgetName:"AMS",
            widgetFunc:(props)=><LinkList {...props} />,
            props: {
                options:[
                    {
                        text:"Know more about ams here",
                        url:"http://aigutech.com/web/solutions/",
                        id:1,
                    },
                ],
            },
        },
        
    ],
}

export default config;