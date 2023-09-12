import React, { useEffect } from 'react';
import MineProfileChat from "@/Components/MineProfileChat.jsx";
import SearchChatBar from "@/Components/SearchChatBar.jsx";
import ChatListUser from "@/Components/ChatListUser.jsx";
import { router, usePage } from "@inertiajs/react";
import { debounce } from "lodash";

export default function ({ children }) {
    const { auth } = usePage().props;

    useEffect(() => {
        const debouncedReload = debounce(() => {
            router.reload({
                preserveScroll: true,
                only: ['messages', 'users'],
            });
        }, 350);

        Echo.private('message.' + auth.user.uuid)
            .listen('ReadMessageEvent', () => {
                debouncedReload();
            })
            .listen('NewMessageEvent', () => {
                debouncedReload();
            });

        return () => {
            Echo.private('message.' + auth.user.uuid)
                .stopListening('ReadMessageEvent', () => {
                    debouncedReload();
                })
                .stopListening('NewMessageEvent');
        };
    }, []);

    const renderSidebarScreen = () => {
        const currentPath = route().current();
        let className = "px-5 py-2 pb-5 lg:w-1/3 lg:border-r lg:border-gray-700 "

        if (currentPath === 'chat.index') className += "flex flex-col w-full"
        else  className += "hidden flex-col lg:flex"

        return className;
    }

    return (
        <>
            <div className="relative min-h-screen bg-gray-900 bg-dots-lighter selection:bg-red-500 selection:text-white">
                <div className="px-6 mx-auto max-w-screen-2xl xl:px-0">
                    <div className="h-screen py-6">
                        <div className="flex h-full overflow-hidden border border-gray-700 rounded-lg shadow">
                            <div className={renderSidebarScreen()}>
                                <MineProfileChat auth={auth} />
                                <SearchChatBar />
                                <ChatListUser />
                            </div>

                            {children}

                        </div>
                    </div>
                </div>

                <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
            </div>

        </>
    )
}
