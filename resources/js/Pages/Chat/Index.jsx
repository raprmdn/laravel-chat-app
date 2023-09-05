import React from 'react';
import { Head, usePage } from "@inertiajs/react";
import App from "@/Layouts/App.jsx";
import MineProfileChat from "@/Components/MineProfileChat.jsx";
import SearchChatBar from "@/Components/SearchChatBar.jsx";
import ChatListUser from "@/Components/ChatListUser.jsx";
import HeaderUserChatBox from "@/Components/HeaderUserChatBox.jsx";
import ChatInputMessage from '@/Components/ChatInputMessage';

export default function Index() {
    const { auth } = usePage().props;
    const { data: users } = usePage().props.users;

    return (
        <>
            <Head title="Chats" />

            <div className="px-6 mx-auto max-w-screen-2xl xl:px-0">
                <div className="h-screen py-6">
                    <div className="flex h-full overflow-hidden border border-gray-700 rounded-lg shadow">
                        <div className="flex flex-col w-full px-5 py-2 pb-5 lg:w-1/3 lg:border-r lg:border-gray-700">

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

                        <div className="flex-col hidden lg:flex lg:w-2/3">
                            <div className="flex justify-center items-center h-screen">
                               <div className="text-gray-300 tracking-tight font-semibold">
                                   Search and select someone to start chatting with
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Index.layout = (page) => <App children={page}/>;
