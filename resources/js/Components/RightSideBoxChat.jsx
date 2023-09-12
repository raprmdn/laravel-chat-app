import clsx from 'clsx';
import React from 'react';
import { Link, usePage } from "@inertiajs/react";

export default function RightSideBoxChat({ message, isFirstMessage, replyHandleState }) {
    const { auth } = usePage().props;

    return (
        <>
            {/* Right Side Box Chat */}
            <div className="col-start-6 col-end-13 p-1">
                <div className="relative flex flex-row-reverse group">
                    <div className={clsx(message.message_deleted_at ? '' : 'lg:pr-20', "px-3 py-2 text-xs text-gray-300 bg-gray-800 rounded-md lg:text-sm")}>

                        {/* Replied Chat */}
                        {message.reply && !message.message_deleted_at && (
                            <div className="max-w-full px-2 py-1.5 mb-1.5 bg-gray-700/50 border-gray-600 border-l-4 rounded">
                                <div className="text-[10px] lg:text-xs">
                                    <div className="mb-1 text-purple-400">
                                        {message.reply.sender_id === auth.user.id ? 'You' : message.reply.sender_name}
                                    </div>
                                    {!message.reply.message_deleted_at ? (
                                        <div className="overflow-hidden text-gray-300/80" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                                            <div className="break-all whitespace-pre-wrap">{message.reply.message}</div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center mr-1 text-xs italic text-center select-none text-gray-400/60">{message.reply.message}</div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Chat Body */}
                        {!message.message_deleted_at ?
                            (<div className="break-all whitespace-pre-wrap">{message.message}</div>)
                            : (<div className="flex items-center justify-center mr-1 text-xs italic text-center select-none text-gray-400/60">{message.message}</div>)
                        }

                        {/* Chat Timestamp */}
                        {!message.message_deleted_at && (
                            <div className="flex items-center justify-end mr-2 lg:-mt-2.5 lg:-mr-16">
                                <div className="text-[9px] lg:text-[10px] text-gray-400/70">
                                    {message.sent_at}
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="double-check" className={clsx(message.seen_at ? 'text-cyan-500' : 'text-gray-400/80', "w-4 h-4 ml-1 -mr-2")}>
                                    <path fillRule="evenodd" d="M16.5303 6.46967C16.8232 6.76256 16.8232 7.23744 16.5303 7.53033L6.53033 17.5303C6.38968 17.671 6.19891 17.75 6 17.75 5.80109 17.75 5.61032 17.671 5.46967 17.5303L1.46967 13.5303C1.17678 13.2374 1.17678 12.7626 1.46967 12.4697 1.76256 12.1768 2.23744 12.1768 2.53033 12.4697L6 15.9393 15.4697 6.46967C15.7626 6.17678 16.2374 6.17678 16.5303 6.46967zM22.5303 6.46966C22.8232 6.76254 22.8232 7.23742 22.5303 7.53032L12.5308 17.5303C12.2379 17.8232 11.7631 17.8232 11.4702 17.5304L9.96975 16.0304C9.67681 15.7376 9.67674 15.2627 9.96959 14.9697 10.2624 14.6768 10.7373 14.6767 11.0303 14.9696L12.0004 15.9394 21.4697 6.46968C21.7625 6.17678 22.2374 6.17677 22.5303 6.46966z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        )}
                    </div>

                    {!message.message_deleted_at && (
                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-0 flex flex-row items-center justify-center text-xs text-gray-700 opacity-0 -ml-14 group-hover:opacity-100">
                                <button className="mr-1" onClick={() => replyHandleState(message)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="reply" fill="currentColor" className="w-5 h-5">
                                        <path d="M13.6 39.4l28 28c1.3 1.3 3.4.4 3.4-1.4V51.8c.6 0 1.2-.1 1.7-.1 12.8 0 23.2 10.3 23.2 22.9 0 5.2-1.8 9.7-5.4 14-1.4 1.6.5 4.1 2.4 3.1C79.5 85.3 87 73.4 87 59.9c0-20.2-16.7-36.5-37.3-36.5-1.6 0-3.3.1-4.7.3V10c0-1.8-2.1-2.7-3.4-1.4l-28 28c-.8.8-.8 2 0 2.8zm4.2-1.4L41 14.8V26c0 1.2 1.1 2.2 2.4 2 1.6-.3 4-.7 6.4-.7C68.1 27.3 83 41.9 83 59.9c0 9.1-3.9 17.5-10.7 23.4 1-2.7 1.6-5.6 1.6-8.6 0-14.9-12.2-26.9-27.2-26.9-3.1 0-5.7 0-5.7 2.2v11.2L17.8 38z">
                                        </path><path d="M384-510v1684h-1784V-510H384m8-8h-1800v1700H392V-518z"></path>
                                    </svg>
                                </button>
                                <Link as="button" method="delete" href={route('chat.destroy', message.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    )}

                    {isFirstMessage && <div className="absolute top-0 w-4 h-4 bg-gray-800 rounded-br-full -right-2"></div>}
                </div>
            </div>
        </>
    )
}
