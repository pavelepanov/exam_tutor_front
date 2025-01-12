import { HeaderSimple } from "../../components/Header/HeaderSimple"
import { TaskFindInput } from "../../components/TaskFindInput/TaskFindInput"
import { Text } from "@mantine/core"

export function TaskFind() {
    return (
        <div>
            <div>
                <HeaderSimple />
            </div>

            <div>
                <Text
                size="xl"
                fw={500}
                >Найти задание по коду</Text>
                <br></br>
                <TaskFindInput />
            </div>
        </div>
    )
}