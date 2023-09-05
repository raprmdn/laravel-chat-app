import React, { useRef } from 'react';
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
    const { auth, user } = usePage().props;
    const scrollRef = useRef(null)

    scrollRef.current?.scrollTo(0, 999999999)

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
                            {/* Header Chat User */}
                            <div className="px-6 py-5 border-b border-gray-700">
                                <div className="flex items-center justify-between">
                                    <HeaderUserChatBox user={user} />
                                    <div className="pr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 h-screen px-2 pb-5 overflow-y-scroll lg:px-8" ref={scrollRef}>
                                <div className="grid grid-cols-12">
                                    <DateChatIndicator />
                                    <LeftSideBoxChat />
                                    <LeftSideBoxChat />
                                    <LeftSideBoxChat />
                                    <RightSideBoxChat />
                                    <DateChatIndicator />
                                    <RightSideBoxChat />
                                    <LeftSideBoxChat />
                                    <LeftSideBoxChat />
                                </div>
                            </div>

                            <div className="flex px-6 py-1.5 border-t border-gray-700">
                                <ChatInputMessage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Show.layout = (page) => <App children={page}/>;
