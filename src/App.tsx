import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Groups from './Components/Groups/Groups'
import { useState } from 'react'
import Brackets from './Components/Brackets/Brackets';

function App() {
  const [page, setPage] = useState('group');
  const reverse: any = {
    'group': 'Brackets',
    'bracket': 'Groups'
  }
  const pages: any = {
    'group': <Groups />,
    'bracket': <Brackets />
  }
  const handlePageSwitch = () => {
    if (page == 'group') {
      setPage('bracket')
    } else {
      setPage('group')
    }
  }
  return (
    <Container maxWidth="xl">
      <Stack sx={{ mb: 7 }}>
        <Typography variant='h3'>A2SV Champions League 2023</Typography>
        <Box sx={{ my: 2 }}>
          <Button variant="outlined" sx={{ color: 'white' }} onClick={handlePageSwitch}>Switch to {reverse[page]}</Button>
        </Box>
      </Stack>

      {pages[page]}
    </Container>
  )
}

export default App
