
import { ChevronDown, Heart, Link } from 'lucide-react'
import React from 'react'

function QuestionCard() {
    return (
        <div className='bg-white w-full max-w-2xl m-auto p-4'>
            <div className='space-y-4'>
                <div className='flex space-x-4 items-center'>
                    <div className='rounded-full w-20 h-20 border bg-gray-500 flex-shrink-0'>
                        <img
                            src=""
                            className='w-full ' />
                    </div>

                    <div  >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>

                </div>
                <div>
                    <p className="w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <div className='flex items-center gap-2'>
                        <Heart />
                        <span>4 Beğeni</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>4 Yorum </span>
                        <ChevronDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard