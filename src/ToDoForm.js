import {useState} from 'react'


function ToDoForm( { addTask }){
    const [userInput, setUserInput] = useState('')
    const handleSubmite = (e) =>{
        e.preventDefault()
    }
    const handleChange = (e) =>{
        setUserInput(e.currentTarget.value)
    }
    const handleKeyPress = () =>{
        addTask(userInput)
    }
    return (
        <form onSubmit={handleSubmite}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение"
            />
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm