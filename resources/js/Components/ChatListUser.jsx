import React from 'react';
import { Link } from "@inertiajs/react";
import ProfilePictureOnChat from "@/Components/ProfilePictureOnChat.jsx";

export default function ChatListUser({ user }) {
    return (
        <>
            <Link preserveScroll preserveState href={route('chat.show', user.uuid)} className="flex w-full items-center hover:bg-gray-800/60 px-2.5 py-3 rounded-md">
                <div className="flex-2 items-center mr-3">
                    <ProfilePictureOnChat user={user} />
                </div>
                <div className="flex-1 flex flex-col min-w-0 pr-2">
                    <div className="flex items-center justify-between">
                        <div className="text-gray-100 text-sm font-medium truncate mb-1.5">
                            {user.name}
                        </div>
                        <div className="text-[10px] text-gray-400 mb-1">
                            11:12
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-gray-400 text-xs truncate">
                            Chat to another user will appear here
                        </div>
                        <div className="inline-flex items-center px-1.5 rounded-full text-[10px] bg-purple-500 text-white">
                            1
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
