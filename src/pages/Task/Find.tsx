import { HeaderSimple } from "../../components/Header/HeaderSimple"
import { TaskFindInput } from "../../components/TaskFindInput/TaskFindInput"

export function TaskFind() {
    return (
        <div>
            <div>
                <HeaderSimple />
            </div>

            <div>
                <TaskFindInput />
            </div>
        </div>
    )
}