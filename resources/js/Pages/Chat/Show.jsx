import React from 'react';
import App from "@/Layouts/App.jsx";
import { Head, usePage } from "@inertiajs/react";
import MineProfileChat from "@/Components/MineProfileChat.jsx";
import SearchChatBar from "@/Components/SearchChatBar.jsx";
import ChatListUser from "@/Components/ChatListUser.jsx";
import HeaderUserChatBox from "@/Components/HeaderUserChatBox.jsx";
import ChatInputMessage from "@/Components/ChatInputMessage.jsx";
import DateChatIndicator from "@/Components/DateChatIndicator.jsx";
import LeftSideBoxChat from "@/Components/LeftSideBoxChat.jsx";
import RigthSideBoxChat from "@/Components/RigthSideBoxChat.jsx";

export default function Show() {
    const { auth, user } = usePage().props;
    const { data: users } = usePage().props.users;

    return (
        <>
            <Head title="Chat " />

            <div className="px-1 lg:px-6 mx-auto max-w-screen-2xl xl:px-0">
                <div className="h-screen py-6">
                    <div className="flex h-full overflow-hidden border border-gray-700 rounded-lg shadow">
                        <div className="hidden lg:flex flex-col w-full px-5 py-2 pb-5 lg:w-1/3 lg:border-r lg:border-gray-700">

                            {/* You */}
                            <MineProfileChat auth={auth} />

                            {/* Search */}
                            <SearchChatBar />

                            {/* List User */}
                            <div className="flex-1 mt-3 overflow-auto">
                                {
                                    users.map((user, i) => (
                                        <div className="py-0" key={i}>
                                            <ChatListUser user={user} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex-col flex lg:w-2/3 w-full">
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

                            <div className="flex-1 h-screen px-2 lg:px-8 pb-5 overflow-y-scroll">
                                <div className="grid grid-cols-12">
                                    <DateChatIndicator />

                                    <LeftSideBoxChat />
                                    <LeftSideBoxChat />
                                    <LeftSideBoxChat />
                                    <RigthSideBoxChat />

                                    <DateChatIndicator />

                                    <RigthSideBoxChat />
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
