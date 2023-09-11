import React from 'react';

export default function ProfilePictureOnChat({ user }) {
    return (
        <>
            <div className="inline-block relative">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-700">
                    <span className="font-medium leading-none text-white">
                        {user.name.charAt(0).toUpperCase()}
                    </span>
                </span>
                {/*<span className="absolute bottom-0 right-0.5 block h-2 w-2 rounded-full ring-2 ring-gray-200 bg-green-500"/>*/}
            </div>
        </>
    )
}
