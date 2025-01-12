import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Image, Text, Stack, Button, Code } from "@mantine/core";
import { HeaderSimple } from "../../components/Header/HeaderSimple";

import '@mantine/core/styles.css';


export function Task() {
    const { FindCode } = useParams()
    const [task, setTask] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate()

    const toggleText = () => setIsVisible((prev) => !prev);

    const goToFindTask = () => {
        navigate(`/tasks/find`)
      }

    useEffect(() => {
    const fetchTask = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL+`/tasks/`,{
                params: {
                    find_code: FindCode,
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

    if (!task) {
        return <p>Загрузка...</p>; 
    }


    const { id, exam, subject, exam_task_number, condition, answer, difficult, find_code, task_sound_urls, task_file_urls, task_photo_urls, answer_video_public_url, created_at } = task;

    return (
        <div>
            <div>
                <HeaderSimple />
            </div>
            <Container>
                <Stack
                      h={150}
                      bg="var(--mantine-color-body)"
                      align="flex-start"
                      justify="flex-start"
                      gap="md"
                >
            <Text c="gray" size="xs">
                    Номер задания: {find_code}
                </Text>
                <Text c="gray" size="xs">
                    Тип экзамена: {exam}
                </Text>
                <Text c="gray" size="xs">
                    Предмет: {subject}
                </Text>
                <Text c="gray" size="xs">
                    Номер задания: {exam_task_number}
                </Text>
            </Stack>
            <Stack 
                  h={450}
                  align="stretch"
                  justify="flex-start"
                  gap="md"
            >
            <div>
            {task_photo_urls.map((src, index) => (
                <Image key={index} src={src} alt={`image-${index}`}
                radius="md"
                    h={350}
                    w={350}
                    fit="contain"
 />
                    ))}
            </div>
            <div>
                
            </div>
            <Text size="md" fs="italic">
                Условие задания: 
            </Text>
            <Text size="lg">{condition}</Text>
            </Stack>
            <Stack 
                  h={100}
                  bg="var(--mantine-color-body)"
                  align="flex-start"
                  justify="center"
                  gap="md"
            >
            <Button variant="gradient"
      gradient={{ from: 'grape', to: 'cyan', deg: 90 }} onClick={toggleText} size="md">{isVisible ? 'Скрыть' : 'Показать'} ответ </Button>
            <Text size="lg">
                {isVisible ? answer: ""}
            </Text>
            </Stack>
        </Container>

      </div>
    )
}