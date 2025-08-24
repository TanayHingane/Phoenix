"use client";
import { Mail, Send, Twitter, Youtube } from "lucide-react";
import React, { useState } from "react";
import { Avatar } from "./avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function ChatCard() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Tanay Hingane",
      text: "want to work together? just send me a mail! I will be happy to help 🤩",
      isUser: false,
      isInitial: true,
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [hasUserSentFirstMessage, setHasUserSentFirstMessage] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    let updatedMessages = [...messages];

    if (!hasUserSentFirstMessage) {
      updatedMessages = updatedMessages.filter((msg) => !msg.isInitial);
      setHasUserSentFirstMessage(true);
    }

    const newUserMessage = {
      id: Date.now(),
      sender: "User",
      text: inputMessage,
      isUser: true,
      isInitial: false,
    };
    updatedMessages = [...updatedMessages, newUserMessage];

    setMessages(updatedMessages);

    let customReply = "";
    if (
      inputMessage.toLowerCase().includes("okay") ||
      inputMessage.toLowerCase().includes("ok") ||
      inputMessage.toLowerCase().includes("sure") ||
      inputMessage.toLowerCase().includes("yes")
    ) {
      customReply = "Okay, Contact me through mail! I'll help 📧";
    } else if (inputMessage.toLowerCase().includes("website")) {
      customReply = "Great! Let's connect through mail. 😊";
    } else if (
      inputMessage.toLowerCase().includes("hi") ||
      inputMessage.toLowerCase().includes("hello")
    ) {
      customReply = "Hello! How can I assist you today? 😊";
    } else if (
      inputMessage.toLowerCase().includes("bye") ||
      inputMessage.toLowerCase().includes("goodbye")
    ) {
      customReply = "Goodbye! Feel free to reach out anytime. 👋";
    } else if (inputMessage.toLowerCase().includes("thank")) {
      customReply = "You're welcome! I'm here to help. 👍";
    } else if (inputMessage.toLowerCase().includes("linkedin")) {
      customReply = "Sure! You can DM me on LinkedIn. 😊";
    } else {
      customReply = "Got it! Send me an mail with more details. 👍";
    }

    setTimeout(() => {
      const newCustomMessage = {
        id: Date.now() + 1,
        sender: "Tanay Hingane",
        text: customReply,
        isUser: false,
        isInitial: false,
      };
      setMessages((prevMessages) => [...prevMessages, newCustomMessage]);
    }, 500);

    setInputMessage("");
  };

  return (
    <div className="w-full max-w-full h-[290px] flex flex-col rounded-3xl bg-gray-100 shadow-sm border border-gray-200 p-7 mx-auto">
      {/* Chat messages container */}
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.isUser ? "justify-end" : ""
            }`}
          >
            {!message.isUser && (
              <Avatar className="w-10 h-10 rounded-full object-cover">
                <AvatarImage
                  src="http://github.com/tanayhingane.png"
                  alt="Marco"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </Avatar>
            )}
            <div>
              {!message.isUser && (
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  Tanay Hingane
                </p>
              )}
              <div
                className={`rounded-[30px] px-4 py-2 text-sm max-w-xs ${
                  message.isUser
                    ? "bg-blue-500 text-white rounded-br-[30px] rounded-l-[30px]"
                    : "bg-gray-200 text-black rounded-bl-[30px] rounded-r-[30px]"
                }`}
              >
                {message.text}
              </div>
            </div>
            {message.isUser && (
              <Avatar className="w-10 h-10 rounded-full object-cover">
                <AvatarImage
                  src="/avatars/user.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </Avatar>
            )}
          </div>
        ))}
      </div>

      {/* Footer input area - This will stay at the bottom */}
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-4 px-2">
          <a href="mailto:tanayhingane03@gmail.com?subject=Hello%20I'm%20____%20from%20____%20company&body=I%20want%20to%20start%20a%20new%20project%20about%20____%20and%20time%20duration%20is%20___%20days.">
            <Mail className="text-gray-600 text-xl cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/@Tanay.H03">
            <Youtube className="text-gray-600 text-xl cursor-pointer" />
          </a>
        </div>
        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="iMessage"
            className="w-full rounded-full border border-gray-300 px-4 py-2 pl-4 pr-10 text-sm text-gray-800 focus:outline-none"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl cursor-pointer"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
}
