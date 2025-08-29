import Header from "./Header"
import LowerPage from "./LowerPage"
import UpperPage from "./UpperPage"


const ContentPart = () => {
  return (
    <div className="w-full h-screen sm:w-5/6  overflow-y-scroll " >
        <Header/>
        <UpperPage/>
        <LowerPage/>
    </div>
  )
}

export default ContentPart