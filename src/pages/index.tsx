import { Navbar } from "@/components/components";
import data from '../components/testfile/post.json' 
import Sidebar from "@/components/sidebar/sidebar";
import RecipeList from "@/components/post/postlist";

export default function Home() {

  const recipes = data.recipes

  return (
    <div className='text-text flex flex-col items-center'>
      <Navbar/>
      <div className="grid grid-cols-[25%_75%] w-full md:w-8/12">
        <div className="text-white w-full">
          <Sidebar/>
        </div>
        <div className="flex flex-col gap-5">
          {recipes.map((val, key)=>(
            <RecipeList key={key} solanaid={val.publisher} name={val.name} ingredients={val.ingredients} equipments={val.equipment} procedure={val.procedure} />
            ))}
            {recipes.map((val, key)=>(
            <RecipeList key={key} solanaid={val.publisher} name={val.name} ingredients={val.ingredients} equipments={val.equipment} procedure={val.procedure} />
            ))}
            {recipes.map((val, key)=>(
            <RecipeList key={key} solanaid={val.publisher} name={val.name} ingredients={val.ingredients} equipments={val.equipment} procedure={val.procedure} />
            ))}
            {recipes.map((val, key)=>(
            <RecipeList key={key} solanaid={val.publisher} name={val.name} ingredients={val.ingredients} equipments={val.equipment} procedure={val.procedure} />
            ))}
            {recipes.map((val, key)=>(
            <RecipeList key={key} solanaid={val.publisher} name={val.name} ingredients={val.ingredients} equipments={val.equipment} procedure={val.procedure} />
            ))}
            {recipes.map((val, key)=>(
            <RecipeList key={key} solanaid={val.publisher} name={val.name} ingredients={val.ingredients} equipments={val.equipment} procedure={val.procedure} />
            ))}
          </div>
      </div>
    </div>
  )
}
