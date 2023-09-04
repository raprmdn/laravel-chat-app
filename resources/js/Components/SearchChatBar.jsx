import React from 'react';

export default function SearchChatBar() {
    return (
        <>
            <div className="px-2.5">
                <label htmlFor="search" className="sr-only">
                    Search or start a new chat
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div
                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                        aria-hidden="true">
                        <svg className="mr-3 h-3 w-3 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        autoComplete="off"
                        className="focus:ring-gray-700 focus:border-gray-700 block w-full pl-9 text-xs border-gray-700 rounded-md text-gray-300 bg-transparent"
                        placeholder="Search or start a new chat"
                    />
                </div>
            </div>
        </>
    )
}
