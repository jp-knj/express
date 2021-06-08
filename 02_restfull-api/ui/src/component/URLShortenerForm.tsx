import { Input, Button, Box } from "@chakra-ui/react";
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
    <Box pos="relative" zIndex="2">
      <form onSubmit={handleSubmit} >
        <Input onChange={(e: any) => setDestination(e.target.value)}
          placeholder="https::example.com"
        />
        <Button type="submit">Create Short URL</Button>
      </form>
      {shortUrl && (
        <a href={`${SERVER_ENDPOINT}/${shortUrl?.shortId}`}>CLICK ME</a>
      )}
    </Box>
  )
}

export default URLShortenerForm;
