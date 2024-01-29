import { useState } from "react"


export const useForm = (initial = {})=>{

    const [form, setForm] = useState(initial);

    const changeValue = ({target})=> {
        setForm({...form, [target.name]: target.value})
    }


    return {
        ...form,

        //Actions
        changeValue

    }
}