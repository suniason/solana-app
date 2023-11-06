import { EditFilled, ExclamationCircleFilled, HomeFilled } from '@ant-design/icons'
import React from 'react'

const Sidebar:React.FC = () => {
    return (
        <div className="flex h-[50vh] py-5 px-2 text-base justify-center lg:w-full lg:justify-normal">
          <ul className='fixed'>
            <li className="flex items-center justify-center lg:justify-normal my-5 px-5 cursor-pointer">
                <HomeFilled style={{fontSize: 22}} />
                <div className='mx-3 hidden lg:block'>
                    Home
                </div>
            </li>
            <li className="flex items-center justify-center lg:justify-normal my-5 px-5 cursor-pointer">
                <ExclamationCircleFilled style={{fontSize: 22}}/>
                <div className='mx-3 hidden lg:block'>
                    About
                </div>
            </li>
            <li className="flex items-center justify-center my-3 px-5 py-2 bg-primary-700 font-semibold rounded-full w-fit cursor-pointer">
                <EditFilled style={{fontSize: 22}}/>
                <div className='lg:mx-3 hidden lg:block'>
                    Create Post
                </div>
            </li>
          </ul>
        </div>
    )
}

export default Sidebar
