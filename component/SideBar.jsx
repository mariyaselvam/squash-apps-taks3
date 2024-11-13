import React from 'react'




import Img1 from "../assets/side-bar-mini/sidebar-option1.svg"
import Img2 from "../assets/side-bar-mini/sidebar-option2.svg"
import Img3 from "../assets/side-bar-mini/sidebar-option3.svg"
import Img4 from "../assets/side-bar-mini/sidebar-option4.svg"
import Img5 from "../assets/side-bar-mini/sidebar-option5.svg"
import Img6 from "../assets/side-bar-mini/sidebar-option6.svg"
import Img7 from "../assets/side-bar-mini/sidebar-option7.svg"
import Img8 from "../assets/side-bar-mini/sidebar-option8.svg"
import Img9 from "../assets/side-bar-mini/sidebar-option9.svg"

const SideBar = () => {
  return (
    <>
      <section className="todo-side-bar">
          <div className="custom-container">
              <div className="todo-side-bar-options">
                <img src={Img1} alt="" />
              </div>
              <div className="todo-side-bar-options">
                <img src={Img2} alt="" />
              </div>
              <div className="todo-side-bar-options">
                <img src={Img3} alt="" />
              </div>
              <div className="todo-side-bar-options">
                <img src={Img4} alt="" />
              </div>
              <div className="todo-side-bar-options">
                <img src={Img5} alt="" />
              </div>
              <div className="todo-side-bar-options">
                <img src={Img6} alt="" />
              </div>
              <div className="todo-side-bar-options">
                <img src={Img7} alt="" />
              </div>
              <div className="todo-side-bar-options">
                <img src={Img8} alt="" />
              </div>

              <div className="todo-side-bar-options todo-side-bar-options-bottom">
                <img src={Img9} alt="" />
              </div>
          </div>
      </section>

     
    </>
  )
}

export default SideBar