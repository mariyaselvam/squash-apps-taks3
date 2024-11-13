import { useEffect, useState } from "react"
import Header from "./Header";
import menu from "../assets/todo-cards/menus.svg"

const InputForm = () => {
    const [title , setTitle] = useState("");
    const [description , setDiscription] = useState("");
    const [todos , setTodos] = useState([]);
    const [error , setError] = useState("");
    const [message , setMessage] = useState("");
    const [editingID , seteditingID] = useState(-1);
    const [input , ShowInput] = useState("");

    // for edit
    const [editTitle , seteditTitle] = useState("");
    const [editDescription , seteditDescription] = useState("");
    

    const apiUrl = "http://localhost:8000";
    

 function handleSubmit(){
    setError("")
       if(title.trim() !== "" && description.trim() !== ""){
            fetch(apiUrl+"/todos" , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({title, description})
            }).then((res) => {
             if(res.ok){
                setTodos([...todos, {title, description}])
                setTitle("")
                setDiscription("")
                setMessage("item added successfully")
                setTimeout(() => {
                    setMessage("")
                }, 3000);
             }else{
                     setError("unable to create Todo items");
             }
            }).catch(() => {
                setError("unable to create Todo items");
            })
       } 
    }

    useEffect(() => {
        const getItems = () => {
            fetch (apiUrl+"/todos")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setTodos(res)
            })
         }

        getItems();
    },[])

     
   function handleUpdate(){
    setError("")
       if(editTitle.trim() !== "" && editDescription.trim() !== ""){
            fetch(apiUrl+"/todos/" + editingID , {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({title:editTitle ,  description:editDescription})
            }).then((res) => {
             if(res.ok){
                // updated todo items
                const updatedTodos =  todos.map((items) => {
                    if(items._id == editingID){
                        items.title = editTitle;
                        items.Discription = editDescription;
                    }
                    return items;
                })
                setTodos(updatedTodos)
                setMessage("item updated successfully")
                setTimeout(() => {
                    setMessage("")
                }, 3000)
                seteditingID(-1)
             }else{
                     setError("unable to create Todo items");
             }
            }).catch(() => {
                setError("unable to create Todo items");
            })
       } 
   }

   const handleDelete = (id) => {
        if( window.confirm("are you sure want to delete")){
           fetch(apiUrl+"/todos/"+id , {
            method:"DELETE"
           })
           .then(() => {
            const updatedTodos = todos.filter((items) => items._id !== id)
                setTodos(updatedTodos)
            
           })
        }
   }

   const editCancel = () => {
    seteditingID(-1)
   }

   const handleEdit = (items) => {
    //    const getItems = () => {
    //         fetch (apiUrl+"/todos")
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((res) => {
    //             setTodos(res)
    //         })
    //      }

    //     getItems();

      seteditingID(items._id);
      seteditTitle(items.title);
      seteditDescription(items.description);

   }

  return (
    <>
    <div className="input-from">
    <Header />

    <section className="secondary-header">
           <div className="secondary-header-container">
              <div className="board-view-and-add-view">
                  <span className="Board-view-span">Board view</span>
                  <span onClick={ShowInput} className={`Add-view-span ${input}`} >Add view</span>
                  {message && <p className="good-responce">{message} </p>}

    <input  className="title-input" onChange={(e) => {setTitle(e.target.value)}} value={title} type="text" placeholder="title" required  />
    <input className="description-input" onChange={(e) => {setDiscription(e.target.value)}} value={description} type="text" placeholder="disctiption" required  />
    <button onClick={handleSubmit} className="add-btn">add</button>

    {error && <p className="bad-responce">{error} </p>}
              </div>
              


           </div>
    </section>

     <div className="todo-cards-container">

    {todos.map((items) => 
    <div className="to-do-listing-card-sec">
          <div className="to-do-listing-card-menu">
            <img src={menu} alt="" />

            <div className="menu-options">

            {editingID == -1 || editingID !== items._id ? 
        <button className="edit-btn" onClick={() => handleEdit(items)}>edit</button>
        : 
        <button className="Update-btn" onClick={handleUpdate}>Update</button>
         }

         { editingID == -1 ?
          <button className="delete-btn" onClick={() =>  handleDelete(items._id)}>delete</button> :
          <button className="cancel-btn" onClick={editCancel}>cancel</button> }
 
            </div>

          </div>



    <div className="to-do-listing-card">
        {
            editingID == -1 || editingID !== items._id ? 
            <>
                <h2>{items.title}</h2>
                <p>{items.description}</p>
            </> :
            <div>
               <input onChange={(e) => {seteditTitle(e.target.value)}} value={editTitle} type="text" placeholder="title" />
               <input onChange={(e) => {seteditDescription(e.target.value)}} value={editDescription} type="text" placeholder="disctiption" />
            </div>
        }

    </div>

    <div className="to-do-listing-card-progress-bar">
        <span className="Progress-tit">Progress</span>

        <span className="progress-10">7/10</span>
        
        <div className="progress-bar-range">

        </div>
    </div>
  </div>
    )}

</div>
    
    </div>


    
    </>
  )
}

export default InputForm