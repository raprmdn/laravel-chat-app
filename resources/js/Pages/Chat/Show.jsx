import React, { Fragment, useEffect, useRef, useState } from 'react';
import App from "@/Layouts/App.jsx";
import { Head, usePage } from "@inertiajs/react";
import MineProfileChat from "@/Components/MineProfileChat.jsx";
import SearchChatBar from "@/Components/SearchChatBar.jsx";
import ChatListUser from "@/Components/ChatListUser.jsx";
import HeaderUserChatBox from "@/Components/HeaderUserChatBox.jsx";
import ChatInputMessage from "@/Components/ChatInputMessage.jsx";
import DateChatIndicator from "@/Components/DateChatIndicator.jsx";
import LeftSideBoxChat from "@/Components/LeftSideBoxChat.jsx";
import RightSideBoxChat from "@/Components/RightSideBoxChat.jsx";

export default function Show() {
    const { auth, chat_with: chatWithUser, messages } = usePage().props;
    const scrollRef = useRef(null)
    const [reply, setReply] = useState(null)

    const replyHandleState = (message) => {
        setReply(message)
    }

    useEffect(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current?.scrollHeight)
    }, [messages, reply])

    const renderMessage = (messages, auth) => {
        return messages.map((date) => (
            <Fragment key={date.date}>
                <DateChatIndicator date={date.date} />
                {date.messages.map((message, idx) => {
                    const isFirstMessage = idx === 0 || message.sender_id !== date.messages[idx - 1].sender_id;
                    return <Fragment key={message.id}>
                    {
                        message.sender_id === auth.user.id ? (
                            <RightSideBoxChat message={message} isFirstMessage={isFirstMessage} replyHandleState={replyHandleState}/>
                        ) : (
                            <LeftSideBoxChat message={message} isFirstMessage={isFirstMessage} replyHandleState={replyHandleState}/>
                        )
                    }
                    </Fragment>
                })}
            </Fragment>
        ))
    }

    return (
        <>
            <Head title="Chat " />

            <div className="px-1 mx-auto lg:px-6 max-w-screen-2xl xl:px-0">
                <div className="h-screen py-6">
                    <div className="flex h-full overflow-hidden border border-gray-700 rounded-lg shadow">
                        <div className="flex-col hidden w-full px-5 py-2 pb-5 lg:flex lg:w-1/3 lg:border-r lg:border-gray-700">
                            <MineProfileChat auth={auth} />
                            <SearchChatBar />
                            <ChatListUser />
                        </div>

                        <div className="flex flex-col w-full lg:w-2/3">
                            <div className="px-6 py-5 border-b border-gray-700">
                                <div className="flex items-center justify-between">
                                    <HeaderUserChatBox user={chatWithUser} />
                                    <div className="pr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 h-screen px-2 pb-5 overflow-y-scroll lg:px-8" ref={scrollRef}>
                                <div className="grid grid-cols-12">
                                    { renderMessage(messages, auth) }
                                </div>
                            </div>

                            <div className={`transform transition-transform ${reply ? 'translate-y-0' : 'translate-y-full'} duration-150 ease-in-out`}>
                                {reply && (
                                    <div className="flex items-center py-2 border-t border-gray-700 px-9">
                                        <div className="flex items-center justify-between w-full px-2 py-1.5 bg-gray-700/50 border-gray-600 border-l-4 rounded">
                                            <div className="text-[10px] lg:text-xs">
                                                <div className="mb-1 text-purple-400">
                                                    {reply.sender_id === auth.user.id ? 'You' : chatWithUser.name}
                                                </div>
                                                <div className="overflow-hidden text-gray-300/80" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                                                    <div className="whitespace-pre-wrap">{reply.message}</div>
                                                </div>
                                            </div>
                                            <button onClick={() => replyHandleState(null)} className="w-6 h-6 text-gray-500 transition duration-300 rounded-full hover:text-gray-400 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex px-6 py-1.5 border-t border-gray-700 z-50">
                                <ChatInputMessage reply={reply} setReply={setReply} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Show.layout = (page) => <App children={page}/>;
