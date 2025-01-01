import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios';
import React, { useState } from 'react'

function QuestionForm() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = async () => {

        try {
            const response = await axios.post("http://localhost:8080/post/createpost", { title, text });
            console.log("başarılı")

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form className='bg-white w-full max-w-2xl m-auto p-4' onSubmit={handleSubmit}>
            <div className='space-y-4'>
                <div className='flex space-x-4 items-center'>
                    <div className='rounded-full w-20 h-20 border bg-gray-500'>
                        <img
                            src=""
                            className='w-full' />
                    </div>
                    <div className='flex-grow'>
                        <Textarea
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Başlık giriniz"
                            maxLength={60}
                            required
                            className="w-full resize-none ring-offset-2 
                              h-10 min-h-10 " />
                    </div>
                </div>
                <div>
                    <Textarea
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Bir soru giriniz"
                        maxLength={250}
                        required
                        className="w-full resize-none ring-offset-2 h-24" />
                </div>
                <div className="flex justify-between items-start">
                    <p className='text-gray-500'>
                        {text.length}/250 karakter
                    </p>
                    <Button type="submit">
                        Gönder
                    </Button>
                </div>
            </div>




        </form >
    )
}

export default QuestionForm