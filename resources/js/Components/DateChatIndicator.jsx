import React from 'react';

export default function DateChatIndicator({ date }) {
    return (
        <>
            {/* Date Indicator */}
            <div className="col-start-1 col-end-13 my-3">
                <div className="flex items-center justify-center">
                    <div className="px-2 lg:px-4 lg:py-0.5 text-[10.2px] text-gray-400 border border-gray-700 rounded bg-gray-800/40 tracking-wide leading-relaxed">
                        {date}
                    </div>
                </div>
            </div>
        </>
    )
}
