import React from 'react';
import ProfilePictureOnChat from "@/Components/ProfilePictureOnChat.jsx";
import { Link } from '@inertiajs/react';

export default function MineProfileChat({ auth }) {
    return (
        <>
            <div className="flex flex-row items-center justify-between px-3 py-2 pt-5">
                <div className="flex items-center w-full pb-3">
                    <div className="flex flex-row min-w-0 items-center justify-between space-x-3.5">
                        <ProfilePictureOnChat user={auth.user} />
                        <div className="flex flex-col flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-100 truncate">
                                {auth.user.name}
                            </span>
                            <span className="text-xs text-gray-400 truncate">
                                @{auth.user.username}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <Link as="button" method="post" href={route('logout')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}
