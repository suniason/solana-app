import { Navbar } from "@/components/components";
import data from '../components/testfile/post.json' 
import Post from "@/components/post/posts";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {

  const post = data.post

  return (
    <div className='text-text flex flex-col items-center'>
      <Navbar/>
      <div className="grid grid-cols-[25%_75%] w-full md:w-9/12">
        <div className="text-white w-full">
          <Sidebar/>
        </div>
        <div>
          {post.map((val, key)=>(
            <Post key={key} title={val.title} solanaid={val.solanaid} text={val.content} replies={val.replies}/>
            ))}
        </div>
      </div>
    </div>
  )
}
