import { Box } from "@chakra-ui/react";
import URLShortenerForm from "../component/URLShortenerForm";
import Background from "../component/Background";

function Home() {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <URLShortenerForm />
      <Background />
    </Box>
  );
}

export default Home;
