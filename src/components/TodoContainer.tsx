// import { useQuery } from "@tanstack/react-query"


export function TodoContainer() {
const handleAddTodo = () =>{
  
}

  return (
    <div>
        <h1>My Todos </h1>
        {/* form container */}
        <div id="form_container">
          <form onSubmit={handleAddTodo}>
            {/* title */}
          <label htmlFor="title" >
            <input name="title"id="title"/>
          </label>

            {/* description */}
           <label htmlFor="description">
            <textarea name="description" id="description" ></textarea>
           </label>
           <button type="submit">Add</button>
          </form>
        </div>

        </div>
  )
}

