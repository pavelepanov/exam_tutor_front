import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { ActionIcon, TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function TaskFindInput(props: TextInputProps) {
  const theme = useMantineTheme();

  const [id, setId] = useState("");

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setId(e.target.value); 
  };


  const goToTask = () => {
    navigate(`/tasks/${id}`)
  }


  return (
    <TextInput
    onChange={handleInputChange}
      radius="xl"
      size="md"
      placeholder="Найти задание"
      rightSectionWidth={42}
      leftSection={<IconSearch size={18} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" onClick={goToTask} value={id}>
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
  );
}