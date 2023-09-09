import React from 'react';
import { Head, router, usePage } from "@inertiajs/react";
import App from "@/Layouts/App.jsx";
import MineProfileChat from "@/Components/MineProfileChat.jsx";
import SearchChatBar from "@/Components/SearchChatBar.jsx";
import ChatListUser from "@/Components/ChatListUser.jsx";

export default function Index() {
    const { auth } = usePage().props;

    Echo.private('message.' + auth.user.uuid)
        .listen('ReadMessageEvent', () => {
            router.reload({
                preserveScroll: true,
                preserveState: true,
            })
        })
        .listen('NewMessageEvent', () => {
            router.reload({
                preserveScroll: true,
                preserveState: true,
            })
        });

    return (
        <>
            <Head title="Chats" />

            <div className="px-6 mx-auto max-w-screen-2xl xl:px-0">
                <div className="h-screen py-6">
                    <div className="flex h-full overflow-hidden border border-gray-700 rounded-lg shadow">
                        <div className="flex flex-col w-full px-5 py-2 pb-5 lg:w-1/3 lg:border-r lg:border-gray-700">
                            <MineProfileChat auth={auth} />
                            <SearchChatBar />
                            <ChatListUser  />
                        </div>

                        <div className="flex-col hidden lg:flex lg:w-2/3">
                            <div className="flex items-center justify-center h-screen">
                               <div className="font-semibold tracking-tight text-gray-300">
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
