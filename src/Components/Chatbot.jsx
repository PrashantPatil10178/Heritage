import React, { useState, useEffect, useRef } from "react";
import { Input, Button, Card, List, Modal } from "antd";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "antd/dist/reset.css"; // Import Ant Design styles

const { TextArea } = Input;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are a chatbot specializing in heritage and cultural topics. Only provide information related to heritage, culture, traditions, history, and related subjects. Reject all other topics.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const chatContainerRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        messages: newMessages,
      });

      // Optimizing the chatbot response
      const content = response.data.choices[0].message.content
        .split(". ")
        .map((point, index) => `${index + 1}. ${point}`)
        .join("\n");

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content,
        },
      ]);
    } catch (error) {
      alert("Error Fetching the data");
      console.error("Error fetching response:", error);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="relative p-4 max-w-lg mx-auto z-50">
      <Button
        type="default"
        shape="circle"
        icon={<FontAwesomeIcon icon={faComments} />}
        className="fixed bottom-4 right-4 bg-blue-600 text-white hover:bg-blue-700 text-3xl p-6 flex items-center justify-center"
        onClick={() => setVisible(true)}
      />

      <Modal
        title="Chat with Us"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={800} // Increase the width of the modal
        bodyStyle={{ padding: "50px", height: "500px" }} // Increase the height for the chat container
      >
        <div
          className="chat-container"
          ref={chatContainerRef}
          style={{ height: "calc(100% - 70px)", overflowY: "auto" }} // Adjust height to fit the modal
        >
          <List
            dataSource={messages}
            renderItem={(msg) => (
              <List.Item
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
                style={{ marginBottom: "10px" }} // Adding margin between messages
              >
                <Card
                  className={`p-4 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-black"
                  }`}
                  style={{
                    maxWidth: "60%", // Adjust width as needed
                    wordBreak: "break-word",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Optional: Adds a shadow for depth
                  }}
                >
                  {msg.content}
                </Card>
              </List.Item>
            )}
          />
        </div>
        <TextArea
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onPressEnter={handleSendMessage}
          placeholder="Type your message..."
          className="mb-2"
        />
        <Button
          type="primary"
          onClick={handleSendMessage}
          loading={loading}
          className="w-full"
        >
          Send
        </Button>
      </Modal>
    </div>
  );
};

export default Chatbot;
