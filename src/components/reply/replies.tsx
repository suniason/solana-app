import React from 'react'

interface ReplyComp{
    solanaid: string
    text: string
}

const Reply:React.FC<ReplyComp> = ({solanaid, text}) => {
    return (
        <div>
             <header>reply by {solanaid}</header>           
             <article>{text}</article>           
        </div>
    )
}

export default Reply
