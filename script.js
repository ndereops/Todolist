window.addEventListener("load",()=>{
    const form = document.querySelector("#New-Task-Form")
    const input = document.querySelector("#new-task-input")
    const listEl = document.querySelector("#tasks")

    form.addEventListener("submit",(e)=>{
        e.preventDefault()

        const task= input.value
        if(!task){
            alert("Please fill out the task")
            return;
        }

        const taskEl= document.createElement("div")
        taskEl.classList.add("task")
        
        const taskContentEl= document.createElement("div")
        taskContentEl.classList.add("content")

        const inputEl = document.createElement("input")
        inputEl.classList.add("show-task")
        inputEl.type="text"
        inputEl.value=task
        inputEl.setAttribute("readonly","readonly")

        taskContentEl.appendChild(inputEl)

        taskEl.appendChild(taskContentEl)

        const actionEl = document.createElement("div")
        actionEl.classList.add("action")

        const editEl = document.createElement("button")
        editEl.classList.add("edit")
        editEl.innerHTML="Edit"

        const deleteEl= document.createElement("button")
        deleteEl.classList.add("delete")
        deleteEl.innerHTML = "Delete"

        actionEl.appendChild(editEl)
        actionEl.appendChild(deleteEl)

        
        taskEl.appendChild(actionEl)
 
        listEl.appendChild(taskEl)
        
        input.value=""

        editEl.addEventListener("click",()=>{
            if(editEl.innerHTML.toLowerCase()=="edit"){
                inputEl.removeAttribute("readonly")
                inputEl.focus()
                editEl.innerHTML="Save"
            }
            else{
                inputEl.setAttribute("readonly","readonly")
                editEl.innerHTML="Edit"
            }
        })
        deleteEl.addEventListener("click",()=>{
            listEl.removeChild(taskEl)
        })
    })

})