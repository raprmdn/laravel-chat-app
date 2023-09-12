import React from 'react';
import { Link, usePage } from "@inertiajs/react";
import ProfilePictureOnChat from "@/Components/ProfilePictureOnChat.jsx";
import clsx from "clsx";

export default function ChatListUser() {
    const { chat_with: chatWithUser, auth } = usePage().props;
    const { data: users } = usePage().props.users;

    return (
        <>
            <div className="flex-1 mt-3 overflow-y-auto" scroll-region="true">
                {
                    users.map((user) => {
                        let chat = null;
                        const receiveMessage = user?.receive_messages?.length > 0 && user?.receive_messages[0];
                        const sendMessage = user?.send_messages?.length > 0 && user?.send_messages[0];

                        if (receiveMessage && sendMessage) chat = receiveMessage?.id > sendMessage?.id ? receiveMessage : sendMessage;
                        else if (receiveMessage) chat = receiveMessage;
                        else if (sendMessage) chat = sendMessage;

                        return <Link preserveScroll key={user.uuid} href={route('chat.show', user.uuid)}
                                className={clsx(user.id === chatWithUser?.id ? 'bg-gray-800' : 'bg-transparent', 'flex w-full items-center hover:bg-gray-800/60 px-2.5 py-3 rounded-md')}>
                            <div className="items-center mr-3 flex-2">
                                <ProfilePictureOnChat user={user}/>
                            </div>
                            <div className="flex flex-col flex-1 min-w-0 pr-2">
                                <div className="flex items-center justify-between">
                                    <div className="text-gray-100 text-sm font-medium truncate mb-1.5">
                                        {user.name}
                                    </div>
                                    <div className="text-[10px] text-gray-400 mb-1">
                                        {chat?.sent_at}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-xs text-gray-400">
                                        <div>
                                            {chat?.sender_id === auth.user.id && !chat?.message_deleted_at && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="double-check" className={clsx(chat?.seen_at ? 'text-cyan-500' : 'text-gray-400/80', "w-4 h-4 mr-1")}>
                                                    <path fillRule="evenodd" d="M16.5303 6.46967C16.8232 6.76256 16.8232 7.23744 16.5303 7.53033L6.53033 17.5303C6.38968 17.671 6.19891 17.75 6 17.75 5.80109 17.75 5.61032 17.671 5.46967 17.5303L1.46967 13.5303C1.17678 13.2374 1.17678 12.7626 1.46967 12.4697 1.76256 12.1768 2.23744 12.1768 2.53033 12.4697L6 15.9393 15.4697 6.46967C15.7626 6.17678 16.2374 6.17678 16.5303 6.46967zM22.5303 6.46966C22.8232 6.76254 22.8232 7.23742 22.5303 7.53032L12.5308 17.5303C12.2379 17.8232 11.7631 17.8232 11.4702 17.5304L9.96975 16.0304C9.67681 15.7376 9.67674 15.2627 9.96959 14.9697 10.2624 14.6768 10.7373 14.6767 11.0303 14.9696L12.0004 15.9394 21.4697 6.46968C21.7625 6.17678 22.2374 6.17677 22.5303 6.46966z" clipRule="evenodd"></path>
                                                </svg>
                                            )}
                                        </div>
                                        {chat?.message_deleted_at
                                            ? <span className="mr-2 italic text-gray-500">{chat?.message}</span>
                                            : <div className="overflow-hidden break-all" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>{chat?.message}</div>
                                        }
                                    </div>
                                    {user.messages_count > 0 && (
                                        <div className="inline-flex items-center px-1.5 rounded-full text-[10px] bg-purple-500 text-white">
                                            {user.messages_count}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>
        </>
    )
}
