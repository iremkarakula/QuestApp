import QuestionCard from '@/component/QuestionCard'
import QuestionForm from '@/component/QuestionForm'
import React from 'react'

function Home() {

    return (
        <div className='space-y-4 py-4'>
            <QuestionForm />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />



        </div>
    )
}

export default Home