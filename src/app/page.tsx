import LeftMenu from "@/components/Left-Menu/LeftMenu"
import Stories from "../components/Stories"
import AddPost from "@/components/AddPost"
import Feed from "@/components/Feed"
import RightMenu from "@/components/Right-Menu/RightMenu"

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-4">
      <div className="hidden xl:block w-[30%]"><LeftMenu type="home"/></div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col xl:w-[500px]  gap-6">
         <Stories/>
         <AddPost/>
         <Feed/>
        </div>
        
      </div>
      <div className="hidden lg:block w-[30%]"><RightMenu/></div>
    </div>
  )
}

export default Homepage