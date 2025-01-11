import { HeaderSimple } from "../components/Header/HeaderSimple"
import { Text, Container, Paper } from "@mantine/core"

export function HomePage() {
    return (
        <div>
            <div>
                <Container fluid>
                    <HeaderSimple />
                </Container>
                
            </div>
            <div>
            <Paper style={{ textAlign: 'center', padding: 200 }}>
                <Text style={{ fontSize: '50px' }} fw={700}>Готовься к экзаменам с удовольствием</Text>
                <Text style={{ fontSize: '20px' }} fs='italic'>Быть умным и хорошо учиться — две разные вещи. </Text>
            </Paper>
            </div>
            
        </div>
    )
}