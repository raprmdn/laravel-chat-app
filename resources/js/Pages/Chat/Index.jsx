import React from 'react';
import { Head, Link } from "@inertiajs/react";
import App from "@/Layouts/App.jsx";

export default function Index({auth}) {
    return (
        <>
            <Head title="Chats" />

            <div className="relative min-h-screen bg-dots-lighter bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-0">
                    <div className="py-6 h-screen">
                        <div className="flex border border-gray-700 rounded-lg shadow h-full overflow-hidden">
                            <div className="w-1/3 flex flex-col border-gray-700 border-r px-5 py-2 pb-5">

                                {/* You */}
                                <div className="py-2 pt-5 px-3 flex flex-row justify-between items-center">
                                    <div className="flex w-full items-center pb-3">
                                        <div className="flex min-w-0 items-center justify-between space-x-3.5">
                                            <div className="inline-block relative">
                                                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-700">
                                                    <span className="font-medium leading-none text-white">
                                                        {auth.user.name.charAt(0).toUpperCase()}
                                                    </span>
                                                </span>
                                                <span className="absolute bottom-0 right-0.5 block h-2 w-2 rounded-full ring-2 ring-gray-200 bg-green-500"/>
                                            </div>
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

                                {/* Search */}
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

                                {/* List User */}
                                <div className="flex-1 overflow-auto mt-3">
                                    {
                                        [...Array(50)].map((_, i) => (
                                            <div className="py-0" key={i}>
                                                <Link href={'#'}
                                                      className="flex w-full items-center hover:bg-gray-800/60 px-2.5 py-3 rounded-md">
                                                    <div className="flex-2 items-center mr-3">
                                                        <div className="inline-block relative">
                                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-700">
                                                                <span
                                                                    className="font-medium leading-none text-white">
                                                                    {auth.user.name.charAt(0).toUpperCase()}
                                                                </span>
                                                            </span>
                                                            <span className="absolute bottom-0 right-0.5 block h-2 w-2 rounded-full ring-2 ring-gray-200 bg-green-500"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 flex flex-col min-w-0 pr-2">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-100 text-sm font-medium truncate mb-1.5">
                                                                {auth.user.name}
                                                            </span>
                                                            <span className="text-[10px] text-gray-400 mb-1">
                                                                11:12
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-xs truncate">
                                                                Chat to another user will appear here
                                                            </span>
                                                            <span className="inline-flex items-center px-1.5 rounded-full text-[10px] bg-purple-500 text-white">
                                                                1
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="w-2/3 flex flex-col">
                                {/*    */}
                            </div>
                        </div>
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

            {/*<div className="grid grid-cols-1 lg:grid-cols-12 divide-x divide-gray-300">*/}
            {/*    <div className="bg-white/80 p-5 lg:col-span-4">*/}
            {/*        /!* You *!/*/}
            {/*        <div className="flex w-full items-center pb-5 px-2.5">*/}
            {/*            <div className="flex min-w-0 items-center justify-between space-x-3.5">*/}
            {/*                <div className="inline-block relative">*/}
            {/*                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">*/}
            {/*                            <span className="font-medium leading-none text-white">*/}
            {/*                                {auth.user.name.charAt(0).toUpperCase()}*/}
            {/*                            </span>*/}
            {/*                        </span>*/}
            {/*                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />*/}
            {/*                </div>*/}
            {/*                <div className="flex-1 flex flex-col min-w-0">*/}
            {/*                        <span className="text-gray-900 text-sm font-medium truncate">*/}
            {/*                            {auth.user.name}*/}
            {/*                        </span>*/}
            {/*                    <span className="text-gray-500 text-xs truncate">*/}
            {/*                            @{auth.user.username}*/}
            {/*                        </span>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Search or Start a new Chat *!/*/}
            {/*        <div className="px-2.5">*/}
            {/*            <label htmlFor="search" className="sr-only">*/}
            {/*                Search or start a new chat*/}
            {/*            </label>*/}
            {/*            <div className="mt-1 relative rounded-md shadow-sm">*/}
            {/*                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">*/}
            {/*                    <svg className="mr-3 h-3 w-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">*/}
            {/*                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>*/}
            {/*                    </svg>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    name="search"*/}
            {/*                    id="search"*/}
            {/*                    autoComplete="off"*/}
            {/*                    className="focus:ring-gray-300 focus:border-gray-300 block w-full pl-9 text-xs border-gray-300 rounded-md text-gray-600"*/}
            {/*                    placeholder="Search or start a new chat"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="flex-1 mt-2 max-h-screen overflow-y-auto">*/}
            {/*            <div className="pt-2">*/}
            {/*                {*/}
            {/*                    [...Array(15)].map((_, i) => (*/}
            {/*                        <div className="py-0" key={i}>*/}
            {/*                            <Link href={'#'} className="flex w-full items-center hover:bg-gray-100 px-2.5 py-3 rounded-md">*/}
            {/*                                <div className="flex-2 items-center mr-3">*/}
            {/*                                    <div className="inline-block relative">*/}
            {/*                                                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">*/}
            {/*                                                        <span className="font-medium leading-none text-white">*/}
            {/*                                                            {auth.user.name.charAt(0).toUpperCase()}*/}
            {/*                                                        </span>*/}
            {/*                                                    </span>*/}
            {/*                                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="flex-1 flex flex-col min-w-0 pr-2">*/}
            {/*                                    <div className="flex items-center justify-between">*/}
            {/*                                                    <span className="text-gray-900 text-sm font-medium truncate mb-0.5">*/}
            {/*                                                        {auth.user.name}*/}
            {/*                                                    </span>*/}
            {/*                                        <span className="text-[10px] text-gray-400">*/}
            {/*                                                        11:12*/}
            {/*                                                    </span>*/}
            {/*                                    </div>*/}
            {/*                                    <div className="flex items-center justify-between">*/}
            {/*                                                    <span className="text-gray-400 text-xs truncate">*/}
            {/*                                                        Chat to another user will appear here*/}
            {/*                                                    </span>*/}
            {/*                                        <span className="inline-flex items-center px-1 py-[0.090rem] rounded-full text-[9px] bg-blue-400 text-white">*/}
            {/*                                                        999*/}
            {/*                                                    </span>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </Link>*/}
            {/*                        </div>*/}
            {/*                    ))*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}


            {/*    <div className="hidden lg:block p-6 lg:col-span-8 h-screen">*/}
            {/*        Hello*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

Index.layout = (page) => <App children={page}/>;
