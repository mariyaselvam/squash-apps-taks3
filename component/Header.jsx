import img1 from "../assets/header/Search.svg"
import img2 from "../assets/header/Icon.svg"
import img3 from "../assets/header/calander.svg"
import img4 from "../assets/header/Profile.png"

const Header = () => {
  return (
    <>
    <section className="main-header">
         <div className="main-header-container">
            <div className="main-header-tit-weap">
                <h3 className="main-header-tit">
                Welcome back, Vincent 👋
                </h3>
            </div>

            <div className="main-header-options">
                <div className="main-header-options-icons">
                    <img src={img1} alt="" />
                </div>
                <div className="main-header-options-icons">
                    <img src={img2} alt="" />
                </div>
                <div className="main-header-options-icons">
                    <img src={img3} alt="" />
                </div>
                <div className="main-header-options-icons">
                    <img src={img4} alt="" />
                </div>
            </div>
         </div>
    </section>

    
    
    </>
  )
}

export default Header