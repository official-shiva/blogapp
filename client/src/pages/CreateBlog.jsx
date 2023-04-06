
import React, { useState } from 'react'
import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CreateBlog = () => {
  // getting user id
  const id = localStorage.getItem('userId');

  // navigate
  const navigate = useNavigate();

  // state
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    image: '',
  });

  // handle change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/v1/blog/create-blog', {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id
      });

      if (data?.success) {
        toast.success('Blog Created');
        navigate('/my-blogs');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box width={"50%"} border={3} borderRadius={10} padding={3} margin="auto" boxShadow={'10px 10px 20px #ccc'} display="flex" flexDirection={"column"} marginTop="30px">

          <Typography variant='h2' textAlign={'center'} fontWeight="bold" padding={3} color={'gray'}>Create a Post</Typography>

          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }}>Title</InputLabel>
          <TextField name="title" value={inputs.title} onChange={handleChange} margin='normal' variant={'outlined'} required />

          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }}>Description</InputLabel>
          <TextField name="description" value={inputs.description} onChange={handleChange} margin='normal' variant={'outlined'} required />

          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }}>Image URL</InputLabel>
          <TextField name="image" value={inputs.image} onChange={handleChange} margin='normal' variant={'outlined'} required />

          <Button type="submit" color="primary" variant="contained">Submit</Button>

        </Box>
      </form>
    </>
  )
}

export default CreateBlog