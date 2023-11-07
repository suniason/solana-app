import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import RecipePost from './post'

interface RecipeComponent{
    solanaid: string
    name: string
    ingredients: string[]
    equipments: string[]
    procedure: string
}


const RecipeList:React.FC<RecipeComponent> = ({ solanaid, name, ingredients, equipments, procedure}) => {
    const[isOpen, setIsOpen] = useState<boolean>(false)

return (
    <div className=''>
        <div onClick={()=>setIsOpen(true)} className='bg-accent-800 px-8 py-3 rounded-lg cursor-pointer hover:scale-110 transition-all'>
            <div className='text-white text-xl font-bold'>{name}</div>
            <div className='text-primary-200'>{`Published by ${solanaid}`}</div>
        </div>
            <Modal
            width={800}
            open={isOpen}
            centered
            onCancel={()=>setIsOpen(false)}
            footer={[
                <Button className='bg-primary-700' key="back" onClick={()=>setIsOpen(false)}>
                  Return
                </Button>
            ]}
            >  
             <RecipePost solanaid={solanaid} name={name} ingredients={ingredients} equipments={equipments} procedure={procedure} />

            </Modal>
    </div>
)
}

export default RecipeList
