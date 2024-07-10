import FileUploader from '@/components/FileUpload/FileUploader';
import Header from '@/components/Header';
import { Box, Container } from '@mui/material';

export default async function page() {
  return (
    <Box
      component='main'
      display='flex'
      bgcolor='Background'
      flexDirection='column'
      sx={{ width: '100%', height: '100%' }}
    >
      <Header color='primary' elevation={1} />
      <Container maxWidth='xl' component='section'>
        <Box>
          <FileUploader />
        </Box>
      </Container>
    </Box>
  );
}
