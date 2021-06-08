import { Input, Button, Box, InputGroup } from "@chakra-ui/react";
import axios from  "axios";
import React, { useState } from "react";
import { SERVER_ENDPOINT } from "../config";

function URLShortenerForm() {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{
    shortId: string;
  } | null>(null);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShortUrl(null);
    const result = await axios
      .post(`${SERVER_ENDPOINT}/api/url`, {
        destination,
      })
      .then((resp) => resp.data);
    debugger;
    setShortUrl(result);
  }
  return (
    <Box pos="relative" zIndex="2" backgroundColor="white" padding="6">
      <form onSubmit={handleSubmit} >
        <InputGroup
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Input onChange={(e: any) => setDestination(e.target.value)}
            placeholder="https::example.com"
          />
          <Button paddingLeft="16" paddingRight="16" type="submit">Create Short URL</Button>
        </InputGroup>

      </form>
      {shortUrl && (
        <a href={`${SERVER_ENDPOINT}/${shortUrl?.shortId}`}>CLICK ME</a>
      )}
    </Box>
  )
}

export default URLShortenerForm;
