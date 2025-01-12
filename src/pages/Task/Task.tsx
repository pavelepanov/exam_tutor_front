import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Task() {
    const { FindCode } = useParams()
    const [task, setTask] = useState(null);

    useEffect(() => {
    const fetchTask = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL+`/tasks/`,{
                params: {
                    find_code: {},
                }}
            )
            setTask(response.data)
        }
        catch (err) {
            console.log(err)
        }
    };
    fetchTask();
}, [FindCode]);

    return (
        <div>
            <div>
                <p>{task}</p>
            </div>
        </div>
    )
}