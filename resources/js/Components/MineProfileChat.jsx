import React from 'react';
import ProfilePictureOnChat from "@/Components/ProfilePictureOnChat.jsx";

export default function MineProfileChat({ auth }) {
    return (
        <>
            <div className="py-2 pt-5 px-3 flex flex-row justify-between items-center">
                <div className="flex w-full items-center pb-3">
                    <div className="flex min-w-0 items-center justify-between space-x-3.5">
                        <ProfilePictureOnChat auth={auth} />
                        <div className="flex-1 flex flex-col min-w-0">
                            <span className="text-gray-100 text-sm font-medium truncate">
                                {auth.user.name}
                            </span>
                            <span className="text-gray-400 text-xs truncate">
                                @{auth.user.username}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
