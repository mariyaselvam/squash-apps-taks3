import SideBar from "../component/SideBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBarBig from "../component/SideBarBig";
import InputForm from "../component/InputForm";

function App() {

  return (
    <>
     <div className="page-warp">
      <SideBar />
      <SideBarBig />
      <InputForm />
      </div>
    </>
  )
}

export default App
