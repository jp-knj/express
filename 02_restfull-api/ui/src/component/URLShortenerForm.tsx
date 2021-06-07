import { Input, Button, Box, Heading, InputGroup } from "@chakra-ui/react";
import axios from 'axios';
import React, { useState } from 'react';

function URLShortenerForm() {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    debugger;
  }
  return <Box pos="relative">
    <form onSubmit={handleSubmit}>
       <Button type="submit">Create Short URL</Button>
    </form>
  </Box>
}

export default URLShortenerForm;
