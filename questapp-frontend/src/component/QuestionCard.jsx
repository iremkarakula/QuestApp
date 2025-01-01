
import { ChevronDown, Heart, Link } from 'lucide-react'
import React from 'react'

function QuestionCard({ post }) {
    return (
        <div className='bg-white w-full max-w-2xl m-auto p-4'>
            <div className='space-y-4 w-full'>
                <div className='flex space-x-4 items-center w-full'>
                    <div className='rounded-full w-20 h-20 border bg-gray-500 flex-shrink-0'>
                        <img
                            src=""
                            className='w-full ' />
                    </div>

                    <div className='min-w-0 break-words '>
                        {post.title}
                    </div>



                </div>
                <div className="whitespace-normal break-words">
                    {post.text}
                </div>
                <div className="flex justify-between items-center pt-4">
                    <div className='flex items-center gap-2'>
                        <Heart />
                        <span>4 Beğeni</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>4 Cevap </span>
                        <ChevronDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard