import React, { useEffect } from 'react';
import { useForm, usePage } from "@inertiajs/react";

export default function ChatInputMessage(props) {
    const { chat_with: chatWithUser } = usePage().props;
    const { data, setData, reset, post, processing } = useForm({
        message: '',
        reply_id: props.reply?.id,
    });

    useEffect(() => {
        setData('reply_id', props.reply?.id);
    }, [props.reply])

    const handleInputChange = (e) => {
        setData('message', e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    const customKeyEvent = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!processing && data.message) {
                submitHandler(e);
            }
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        post(route('chat.store', chatWithUser.uuid), {
            onStart: () => {
                reset();
                e.target.style.height = 'auto';
                props.setReply(null);
                props.setIsTyping(false);
            },
            preserveScroll: true,
        });
    }

    const onTyping = () => {
        setTimeout(() => {
            Echo.private(`message.${chatWithUser.uuid}`)
                .whisper('typing', {
                    name: chatWithUser.name
                })
        }, 300)
    }

    return (
        <>
            <form className="flex items-center flex-1" onSubmit={submitHandler}>
                <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    className="flex-1 py-1.5 text-xs lg:text-sm text-white bg-transparent border-0 rounded-md focus:ring-0"
                    placeholder="Type a message"
                    value={data.message}
                    rows={1}
                    onChange={handleInputChange}
                    onKeyDown={customKeyEvent}
                    onKeyUp={onTyping}
                    style={{ maxHeight: '100px', resize: 'none', overflowY: data.message ? 'auto' : 'hidden' }}
                />

                <button type="submit" disabled={processing} className="flex items-center justify-center w-8 h-8 -mt-1 text-gray-500 transition duration-150 rotate-45 rounded-full lg:w-10 lg:h-10 hover:text-gray-400 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                </button>
            </form>
        </>
    );
}
