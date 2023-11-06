import React from 'react'
import Reply from '../reply/replies'

interface PostComponent{
    title: string
    solanaid: string
    text: string
    replies: Reply[]
}

interface Reply{
    solanaid: string
    content: string
}

const Post:React.FC<PostComponent> = ({title, solanaid, text, replies}) => {
    return (
        <div className='m-4 bg-accent-800 py-4 px-10 text-white'>
            <header>
                <div className='text-white font-bold'>
                    {title}
                </div>
                <div className='text-sm italic'>{`by ${solanaid}`}</div>
            </header>
            <article className='py-2 bg-re'>{text}</article>
            <footer></footer>
            <div >
                <div>
                    <input type="text" placeholder='Reply' className='w-full bg-accent-600 px-3 py-1 rounded-full' />
                </div>
                {replies.map((val, key)=>(
                    <Reply key={key} solanaid={val.solanaid} text={val.content}/>
                ))}
            </div>
        </div>
    )
}

export default Post
