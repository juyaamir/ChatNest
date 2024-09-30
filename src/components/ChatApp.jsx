import { useEffect, useState } from "react";
import io from 'socket.io-client';
import React from 'react';

// Connect to the server
const socket = io('http://localhost:8000');

const ChatApp = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);



    // Assume that 'me' is the user's id or username
    const user = 'me';

    // Listen for incoming messages
    useEffect(() => {
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        // Clean up when component unmounts
        return () => {
            socket.off('chat message');
        }
    }, []);

    // Handle message submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            // Emit message to the server
            socket.emit('chat message', { text: message, sender: user });
            // Clear input field
            setMessage('');
        }
    };


    return (
        <div className="pb-12">

            <ul>
                {
                    messages.map((msg, index) => (
                        <li key={index}
                            className={`px-4 py-2 ${msg.sender === user ? 'outgoing ' : 'incoming'}`}
                        >
                            {msg.text}
                        </li>
                    ))
                }
            </ul>
            <form onSubmit={handleSubmit}
                className="bg-green-500 text-white h-12 flex items-center absolute bottom-0 left-0 right-0
                backdrop-filter backdrop-blur-lg"
            >
                <input type="text"
                    className="border-none focus:outline-none flex-grow px-4 rounded-full text-black"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                />
                <button type="submit"
                    className="bg-gray-700 border-none text-white outline-none px-4 m-1 rounded-md"
                >Send</button>
            </form>
        </div>
    )
}

export default ChatApp;