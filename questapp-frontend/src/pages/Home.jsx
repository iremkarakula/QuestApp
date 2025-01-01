import QuestionCard from '@/component/QuestionCard'
import QuestionForm from '@/component/QuestionForm'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get("http://localhost:8080/post")
            .then((response) => {
                setPostList(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("hata");
                setLoading(false);
            })
    }, [])

    return (
        <div className='space-y-4 py-4'>
            <QuestionForm />
            {
                postList && postList.map((post) => {
                    return <QuestionCard post={post} />
                })
            }


        </div>
    )
}

export default Home