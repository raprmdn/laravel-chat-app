import React from 'react';
import { Link, router, usePage } from "@inertiajs/react";
import ProfilePictureOnChat from "@/Components/ProfilePictureOnChat.jsx";
import clsx from "clsx";

export default function ChatListUser({ setReply }) {
    const { chat_with: chatWithUser } = usePage().props;
    const { data: users } = usePage().props.users;

    const visitUser = (user) => {
        router.visit(route('chat.show', user.uuid), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setReply(null)
            }
        });
    }

    return (
        <>
            <div className="flex-1 mt-3 overflow-y-auto" scroll-region="true">
                {
                    users.map((user) => (
                        <button key={user.uuid} onClick={() => visitUser(user)}
                            className={clsx(user.id === chatWithUser?.id ? 'bg-gray-800' : 'bg-transparent', 'flex w-full items-center hover:bg-gray-800/60 px-2.5 py-3 rounded-md')}>
                            <div className="items-center mr-3 flex-2">
                                <ProfilePictureOnChat user={user} />
                            </div>
                            <div className="flex flex-col flex-1 min-w-0 pr-2">
                                <div className="flex items-center justify-between">
                                    <div className="text-gray-100 text-sm font-medium truncate mb-1.5">
                                        {user.name}
                                    </div>
                                    <div className="text-[10px] text-gray-400 mb-1">
                                        11:12
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-gray-400 truncate">
                                        Chat to another user will appear here
                                    </div>
                                    <div className="inline-flex items-center px-1.5 rounded-full text-[10px] bg-purple-500 text-white">
                                        1
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))
                }
            </div>
        </>
    )
}
