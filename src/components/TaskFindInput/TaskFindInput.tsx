import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { ActionIcon, TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function TaskFindInput(props: TextInputProps) {
  const theme = useMantineTheme();

  const [FindCode, setFindCode] = useState("");

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFindCode(e.target.value); 
  };


  const goToTask = () => {
    navigate(`/tasks/${FindCode}`)
  }


  return (
    <TextInput
    onChange={handleInputChange}
      radius="xl"
      size="md"
      placeholder="Введите код задания"
      rightSectionWidth={42}
      leftSection={<IconSearch size={18} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" onClick={goToTask} value={FindCode}>
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
  );
}