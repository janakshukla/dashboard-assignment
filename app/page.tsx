import ContentPart from "@/components/ContentPart"
import CustomSideBar from "@/components/CustomSideBar"

const page = () => {
  return (
    <div className="min-h-screen min-w-screen flex  " >
     <CustomSideBar/>
     <ContentPart/>
    </div>
  )
}

export default page