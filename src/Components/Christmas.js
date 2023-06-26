import React from 'react'
import useFetch from '../useFetch';
import Spinner from '../Spinner';
import { Container, Button } from '@mui/material';

function Christmas() {
  const {error, loading,data,request} = useFetch('https://v2.jokeapi.dev/joke/Miscellaneous?type=single');

  if(loading) return <Spinner />
  if(error) return console.log('error')

  return (
    <div>
        <Container>
          <h1>{data?.joke}</h1>
          <Button onClick={request} variant="contained" color="success">
            Try Another
          </Button>
        </Container>
    </div>
  )
}

export default Christmas