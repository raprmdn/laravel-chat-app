import React, { useState } from 'react';
import { Link } from "@inertiajs/react";

export default function HeaderUserChatBox({ user, isOnline, isTyping }) {
    return (
        <>
            <div className="flex items-center">
                <Link href={route('chat.index')} className="flex lg:hidden items-center -ml-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </Link>
                <div className="relative inline-block">
                    <span className="inline-flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-gray-700 rounded-full">
                        <span className="font-medium leading-none text-white">
                            {user.name.charAt(0).toUpperCase()}
                        </span>
                    </span>
                </div>
                <div className="flex flex-col flex-1 min-w-0 ml-4">
                    <div className="text-xs lg:text-sm font-medium text-gray-100 truncate">
                        {user.name}
                    </div>
                    <div className="text-gray-400 text-[10px] lg:text-xs truncate mt-0.5 tracking-tight">
                        {
                            isTyping ? `${user.name} is typing...` : (
                                isOnline ? 'Online' : `${user.last_seen_at}`
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
