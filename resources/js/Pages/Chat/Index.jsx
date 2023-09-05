import React from 'react';
import { Head } from "@inertiajs/react";
import App from "@/Layouts/App.jsx";
import MineProfileChat from "@/Components/MineProfileChat.jsx";
import SearchChatBar from "@/Components/SearchChatBar.jsx";
import ChatListUser from "@/Components/ChatListUser.jsx";
import HeaderUserChatBox from "@/Components/HeaderUserChatBox.jsx";
import ChatInputMessage from '@/Components/ChatInputMessage';

export default function Index({auth}) {

    return (
        <>
            <Head title="Chats" />

            <div className="relative min-h-screen bg-gray-900 bg-dots-lighter selection:bg-red-500 selection:text-white">
                <div className="px-6 mx-auto max-w-screen-2xl xl:px-0">
                    <div className="h-screen py-6">
                        <div className="flex h-full overflow-hidden border border-gray-700 rounded-lg shadow">
                            <div className="flex flex-col w-full px-5 py-2 pb-5 lg:w-1/3 lg:border-r lg:border-gray-700">

                                {/* You */}
                                <MineProfileChat auth={auth} />

                                {/* Search */}
                                <SearchChatBar />

                                {/* List User */}
                                <div className="flex-1 mt-3 overflow-auto">
                                    {
                                        [...Array(50)].map((_, i) => (
                                            <div className="py-0" key={i}>
                                                <ChatListUser auth={auth} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex-col hidden lg:flex lg:w-2/3">
                                {/* Header Chat User */}
                                <div className="px-6 py-5 border-b border-gray-700">
                                    <div className="flex items-center justify-between">
                                        <HeaderUserChatBox />
                                        <div className="pr-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                            </svg>

                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 h-screen px-8 pb-5 overflow-y-scroll">
                                    <div className="grid grid-cols-12">

                                        {/* Date Indicator */}
                                        <div className="col-start-1 col-end-12 my-3">
                                            <div className="flex items-center justify-center">
                                                <div className="w-full h-0.5 bg-gray-800/70"></div>
                                                <div className="px-4 py-0.5 text-[10.2px] text-gray-400 border border-gray-700 rounded bg-gray-800/40 tracking-wide leading-relaxed">
                                                    Yesterday
                                                </div>
                                                <div className="w-full h-0.5 bg-gray-800/70"></div>
                                            </div>
                                        </div>

                                        {/* Left Side Box Chat */}
                                        <div className="col-start-1 col-end-9 p-1">
                                            <div className="flex flex-row">
                                                <div className="relative flex">
                                                    <div className="py-2 pl-3 pr-12 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        <div className="flex items-center justify-end -mt-2.5 -mr-9">
                                                            <div className="text-[10px] text-gray-400/70">
                                                                12:30
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-0 w-4 h-4 bg-gray-800 rounded-bl-full -left-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-1 col-end-9 p-1">
                                            <div className="flex flex-row">
                                                <div className="py-2 pl-3 pr-12 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                    Lorem ipsum dolor sit Lorem ipsum dolor sit voluptatum.
                                                    <div className="flex items-center justify-end -mt-2.5 -mr-9">
                                                        <div className="text-[10px] text-gray-400/70">
                                                            12:30
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-1 col-end-9 p-1">
                                            <div className="flex flex-row">
                                                <div className="py-2 pl-3 pr-12 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                    Lorem.
                                                    <div className="flex items-center justify-end -mt-2.5 -mr-9">
                                                        <div className="text-[10px] text-gray-400/70">
                                                            12:30
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side Box Chat */}
                                        <div className="col-start-6 col-end-13 p-1">
                                            <div className="relative flex flex-row-reverse">
                                                <div className="py-2 pl-3 pr-20 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                        Lorem.
                                                        <div className="flex items-center justify-end -mt-2.5 -mr-16">
                                                            <div className="text-[10px] text-gray-400/70">
                                                                12:30
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="double-check" className="w-4 h-4 ml-1 -mr-2 text-cyan-500">
                                                                <path fillRule="evenodd" d="M16.5303 6.46967C16.8232 6.76256 16.8232 7.23744 16.5303 7.53033L6.53033 17.5303C6.38968 17.671 6.19891 17.75 6 17.75 5.80109 17.75 5.61032 17.671 5.46967 17.5303L1.46967 13.5303C1.17678 13.2374 1.17678 12.7626 1.46967 12.4697 1.76256 12.1768 2.23744 12.1768 2.53033 12.4697L6 15.9393 15.4697 6.46967C15.7626 6.17678 16.2374 6.17678 16.5303 6.46967zM22.5303 6.46966C22.8232 6.76254 22.8232 7.23742 22.5303 7.53032L12.5308 17.5303C12.2379 17.8232 11.7631 17.8232 11.4702 17.5304L9.96975 16.0304C9.67681 15.7376 9.67674 15.2627 9.96959 14.9697 10.2624 14.6768 10.7373 14.6767 11.0303 14.9696L12.0004 15.9394 21.4697 6.46968C21.7625 6.17678 22.2374 6.17677 22.5303 6.46966z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                <div className="absolute top-0 w-4 h-4 bg-gray-800 rounded-br-full -right-2"></div>
                                            </div>
                                        </div>
                                        <div className="col-start-6 col-end-13 p-1">
                                            <div className="flex flex-row-reverse">
                                                <div className="py-2 pl-3 pr-20 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                    Lorem ipsum dolor sit.
                                                    <div className="flex items-center justify-end -mt-2.5 -mr-16">
                                                        <div className="text-[10px] text-gray-400/70">
                                                            12:30
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="double-check" className="w-4 h-4 ml-1 -mr-2 text-cyan-500">
                                                            <path fillRule="evenodd" d="M16.5303 6.46967C16.8232 6.76256 16.8232 7.23744 16.5303 7.53033L6.53033 17.5303C6.38968 17.671 6.19891 17.75 6 17.75 5.80109 17.75 5.61032 17.671 5.46967 17.5303L1.46967 13.5303C1.17678 13.2374 1.17678 12.7626 1.46967 12.4697 1.76256 12.1768 2.23744 12.1768 2.53033 12.4697L6 15.9393 15.4697 6.46967C15.7626 6.17678 16.2374 6.17678 16.5303 6.46967zM22.5303 6.46966C22.8232 6.76254 22.8232 7.23742 22.5303 7.53032L12.5308 17.5303C12.2379 17.8232 11.7631 17.8232 11.4702 17.5304L9.96975 16.0304C9.67681 15.7376 9.67674 15.2627 9.96959 14.9697 10.2624 14.6768 10.7373 14.6767 11.0303 14.9696L12.0004 15.9394 21.4697 6.46968C21.7625 6.17678 22.2374 6.17677 22.5303 6.46966z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-6 col-end-13 p-1">
                                            <div className="flex flex-row-reverse">
                                                <div className="py-2 pl-3 pr-20 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                    <div className="flex items-center justify-end -mt-2.5 -mr-16">
                                                        <div className="text-[10px] text-gray-400/70">
                                                            12:30
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="double-check" className="w-4 h-4 ml-1 -mr-2 text-cyan-500">
                                                            <path fillRule="evenodd" d="M16.5303 6.46967C16.8232 6.76256 16.8232 7.23744 16.5303 7.53033L6.53033 17.5303C6.38968 17.671 6.19891 17.75 6 17.75 5.80109 17.75 5.61032 17.671 5.46967 17.5303L1.46967 13.5303C1.17678 13.2374 1.17678 12.7626 1.46967 12.4697 1.76256 12.1768 2.23744 12.1768 2.53033 12.4697L6 15.9393 15.4697 6.46967C15.7626 6.17678 16.2374 6.17678 16.5303 6.46967zM22.5303 6.46966C22.8232 6.76254 22.8232 7.23742 22.5303 7.53032L12.5308 17.5303C12.2379 17.8232 11.7631 17.8232 11.4702 17.5304L9.96975 16.0304C9.67681 15.7376 9.67674 15.2627 9.96959 14.9697 10.2624 14.6768 10.7373 14.6767 11.0303 14.9696L12.0004 15.9394 21.4697 6.46968C21.7625 6.17678 22.2374 6.17677 22.5303 6.46966z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Date Indicator */}
                                        <div className="col-start-1 col-end-12 my-3">
                                            <div className="flex items-center justify-center">
                                                <div className="w-full h-0.5 bg-gray-800/70"></div>
                                                <div className="px-4 py-0.5 text-[10.2px] text-gray-400 border border-gray-700 rounded bg-gray-800/40 tracking-wide leading-relaxed">
                                                    Today
                                                </div>
                                                <div className="w-full h-0.5 bg-gray-800/70"></div>
                                            </div>
                                        </div>

                                        {/* Left Side Box Chat */}
                                        <div className="col-start-1 col-end-9 p-1">
                                            <div className="flex flex-row">
                                                <div className="relative flex">
                                                    <div className="py-2 pl-3 pr-12 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                                        <div className="flex items-center justify-end -mt-2.5 -mr-9">
                                                            <div className="text-[10px] text-gray-400/70">
                                                                12:30
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-0 w-4 h-4 bg-gray-800 rounded-bl-full -left-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-1 col-end-9 p-1">
                                            <div className="flex flex-row">
                                                <div className="py-2 pl-3 pr-12 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                    Lorem ipsum dolor sit Lorem ipsum dolor sit voluptatum.
                                                    <div className="flex items-center justify-end -mt-2.5 -mr-9">
                                                        <div className="text-[10px] text-gray-400/70">
                                                            12:30
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-1 col-end-9 p-1">
                                            <div className="flex flex-row">
                                                <div className="py-2 pl-3 pr-12 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                    Lorem ipsum dolor sit Lorem ipsum dolor sit voluptatum.
                                                    Lorem ipsum dolor sit Lorem ipsum dolor sit voluptatum.
                                                    <div className="flex items-center justify-end -mt-2.5 -mr-9">
                                                        <div className="text-[10px] text-gray-400/70">
                                                            12:30
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side Box Chat */}
                                        <div className="col-start-6 col-end-13 p-1">
                                            <div className="relative flex flex-row-reverse">
                                                <div className="py-2 pl-3 pr-20 text-sm text-gray-300 bg-gray-800 rounded-md">
                                                        Lorem.
                                                        <div className="flex items-center justify-end -mt-2.5 -mr-16">
                                                            <div className="text-[10px] text-gray-400/70">
                                                                12:30
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="double-check" className="w-4 h-4 ml-1 -mr-2 text-gray-400/70">
                                                                <path fillRule="evenodd" d="M16.5303 6.46967C16.8232 6.76256 16.8232 7.23744 16.5303 7.53033L6.53033 17.5303C6.38968 17.671 6.19891 17.75 6 17.75 5.80109 17.75 5.61032 17.671 5.46967 17.5303L1.46967 13.5303C1.17678 13.2374 1.17678 12.7626 1.46967 12.4697 1.76256 12.1768 2.23744 12.1768 2.53033 12.4697L6 15.9393 15.4697 6.46967C15.7626 6.17678 16.2374 6.17678 16.5303 6.46967zM22.5303 6.46966C22.8232 6.76254 22.8232 7.23742 22.5303 7.53032L12.5308 17.5303C12.2379 17.8232 11.7631 17.8232 11.4702 17.5304L9.96975 16.0304C9.67681 15.7376 9.67674 15.2627 9.96959 14.9697 10.2624 14.6768 10.7373 14.6767 11.0303 14.9696L12.0004 15.9394 21.4697 6.46968C21.7625 6.17678 22.2374 6.17677 22.5303 6.46966z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                <div className="absolute top-0 w-4 h-4 bg-gray-800 rounded-br-full -right-2"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                                <div className="flex px-6 py-1.5 border-t border-gray-700">
                                    <ChatInputMessage />
                                </div>
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
        </>
    )
}

Index.layout = (page) => <App children={page}/>;
