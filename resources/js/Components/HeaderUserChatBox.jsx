import React from 'react';

export default function HeaderUserChatBox() {
    return (
        <>
            <div className="flex items-center">
                <div className="relative inline-block">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full">
                        <span className="font-medium leading-none text-white">
                            PP
                        </span>
                    </span>
                </div>
                <div className="flex flex-col flex-1 min-w-0 ml-4">
                    <div className="text-sm font-medium text-gray-100 truncate">
                        Rafi Putra Ramadhan
                    </div>
                    <div className="text-gray-400 text-xs truncate mt-0.5 tracking-tight">
                        Online
                    </div>
                </div>
            </div>
        </>
    )
}
