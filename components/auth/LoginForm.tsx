'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import LoginSchema from '../../schema/LoginSchema';
import FormInput from './FormInput';
import SocialLogin from './SocialLogin';

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const handleOnSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log('values', values);
  };

  return (
    <Paper variant='elevation' sx={{ width: 360, padding: 3 }}>
      <Box mb={2.5}>
        <Typography
          component='h2'
          align='center'
          sx={{
            textTransform: 'capitalize',
            fontSize: '24px !important',
            fontWeight: 'bold !important',
            color: 'text.primary',
          }}
        >
          Log in to your account
        </Typography>
        <Typography
          component='p'
          align='center'
          sx={{
            fontSize: '14px !important',
            fontWeight: '500 !important',
            color: 'text.primary',
          }}
        >
          Don&apos;t have account?{' '}
          <Link className='underline text-[#0b3c5d]' href='/auth/register'>
            Register now
          </Link>
        </Typography>
      </Box>
      {/* Login Form  */}
      <FormProvider {...form}>
        <Stack
          component='form'
          direction='column'
          gap={2}
          onSubmit={form.handleSubmit(handleOnSubmit)}
        >
          <FormInput label='Email' name='email' type='email' />
          <FormInput label='Password' name='password' type='password' />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            size='large'
            sx={{ height: 48 }}
          >
            Log in
          </Button>
        </Stack>
      </FormProvider>
      <Divider sx={{ marginY: 2 }}>
        <Chip label='OR' size='small' />
      </Divider>
      <SocialLogin />
    </Paper>
  );
};

export default LoginForm;
