import React, { useState } from 'react'

interface RecipeComponent{
    solanaid: string
    name: string
    ingredients: string[]
    equipments: string[]
    procedure: string
}

const RecipePost:React.FC<RecipeComponent> = ({ solanaid, name, ingredients, equipments, procedure  }) => {
    return (
            <div className='m-4 bg-accent-800 text-white rounded-md overflow-hidden w-full'>
                <div className='py-4 px-10 '>
                <header>
                    <div className='text-white font-bold text-xl'>
                        {name}
                    </div>
                    <div className='text-sm italic text-accent-300'>{`published by ${solanaid}`}</div>
                </header>
                <article className='py-2 grid grid-cols-2 gap-5'>
                    <div className='p-4 bg-accent-900 rounded-md'>
                        <div className='text-base font-bold mb-2'>Ingredients:</div>
                            <ul className='mx-5'>
                                {ingredients.map((val, key)=>(
                                    <li key={key}>{val}</li>
                                    ))}
                            </ul>
                    </div>
                    <div className='p-4 bg-accent-900 rounded-md'>
                        <div className='text-base font-bold mb-2'>Equipments:</div>
                            <ul className='mx-5'>
                                {equipments.map((val, key)=>(
                                    <li key={key}>{val}</li>
                                ))}
                            </ul>
                    </div >
                    <div className='col-span-2 p-4 bg-accent-900 rounded-md'>
                        <div className='text-base font-bold mb-2'>Procedure:</div>
                            <ol className='mx-5'>
                                {procedure}
                            </ol>
                    </div>
                </article>
                <footer></footer>
                </div>
            </div>
    )
}

export default RecipePost
