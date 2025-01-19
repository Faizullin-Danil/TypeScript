import { useState } from "react"
import Input from "../Input/Input"
import "./Form.css"
import Label from "../Label/Label.jsx"

const fields = [
    {id: 'name', label: 'Имя', placeholder: 'Введите имя'},
    {id: 'surname', label: 'Фамилия', placeholder: 'Введите фамилию'}, 
    {id: 'phone', label: 'Телефон', placeholder: 'Введите телефон'}, 
    {id: 'email', label: 'Почта', placeholder: 'Введите почту'}, 
    {id: 'comment', label: 'Комментарий', placeholder: 'Введите комментарий'}
]

const defaultValue = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    comment: '',
}

const Form = () => {
    const[value, setValue] = useState(defaultValue) 

    const onChange = (key) => (e) => {
        setValue({...value, [key]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        setValue(defaultValue)
    }

    return (
        <form className="view">
            {fields.map(field => (
                <div className="field">
                    <Label text={field.label}/>
                    <Input
                        key={field.id} 
                        value={value[field.id]}
                        onChange={onChange(field.id)}
                        placeholder={field.placeholder}
                    />
                </div>
                
            ))}
            <button onClick={handleSubmit}>Отправить</button>
        </form>
    )
}
export default Form