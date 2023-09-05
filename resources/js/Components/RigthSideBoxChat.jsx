import React from 'react';

export default function RigthSideBoxChat() {
    return (
        <>
            {/* Right Side Box Chat */}
            <div className="col-start-6 col-end-13 p-1">
                <div className="relative flex flex-row-reverse">
                    <div className="py-2 pl-3 pr-3 lg:pr-20 text-xs lg:text-sm text-gray-300 bg-gray-800 rounded-md">

                        {/* Replied Chat */}
                        <div className="max-w-full px-2 py-1.5 mb-1.5 bg-gray-700/50 border-gray-600 border-l-4 rounded">
                            <div className="text-[10px] lg:text-xs">
                                <div className="mb-1 text-purple-400">
                                    Rafi Putra Ramadhan
                                </div>
                                <div className="overflow-hidden text-gray-300/80" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        Lorem.

                        {/* Chat Timestamp */}
                        <div className="flex items-center justify-end mr-2 lg:-mt-2.5 lg:-mr-16">
                            <div className="text-[9px] lg:text-[10px] text-gray-400/70">
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
        </>
    )
}
