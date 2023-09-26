'use client';

import axios from 'axios';

const Page = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const url = 'https://top-ten-games.vercel.app/api/users/login';
    const data = {
      email: 'yunxiang.li.2023@gmail.com',
      password: '123456',
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check the response status code and handle it accordingly
      if (response.status === 200) {
        // Request was successful, you can handle the response here
        console.log('Login successful:', response.data);
      } else {
        // Request failed, handle errors here
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      // Handle any network or other errors here
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <h1>Page</h1>
      <form onSubmit={onSubmit}>
        <button type='submit'>Call API</button>
      </form>
    </>
  );
};

export default Page;
