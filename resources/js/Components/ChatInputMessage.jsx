import React, { useState } from 'react';

export default function ChatInputMessage() {
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setMessage(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    const customKeyEvent = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            console.log(message);
        }
    }

    return (
        <>
            <form className="flex items-center flex-1">
            <textarea
                name="message"
                id="message"
                autoComplete="off"
                className="flex-1 py-1.5 text-sm text-white bg-transparent border-0 rounded-md focus:ring-0"
                placeholder="Type a message"
                value={message}
                rows={1}
                onChange={handleInputChange}
                onKeyDown={customKeyEvent}
                style={{ maxHeight: '100px', resize: 'none', overflowY: message ? 'auto' : 'hidden' }}
            />

            <button type="button" className="flex items-center justify-center w-10 h-10 ml-3 text-gray-500 transition duration-150 rotate-45 rounded-full hover:text-gray-400 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
            </button>
        </form>
        </>
    );
}
