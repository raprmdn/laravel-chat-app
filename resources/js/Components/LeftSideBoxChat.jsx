import React from 'react';

export default function () {
    return (
        <>
            {/* Left Side Box Chat */}
            <div className="col-start-1 col-end-9 p-1">
                <div className="flex flex-row">
                    <div className="relative flex">
                        <div className="py-2 pl-3 pr-3 lg:pr-12 text-xs lg:text-sm text-gray-300 bg-gray-800 rounded-md">

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.

                            {/* Chat Timestamp */}
                            <div className="flex items-center justify-end lg:-mt-2.5 lg:-mr-9">
                                <div className="text-[9px] lg:text-[10px] text-gray-400/70">
                                    12:30
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 w-4 h-4 bg-gray-800 rounded-bl-full -left-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
