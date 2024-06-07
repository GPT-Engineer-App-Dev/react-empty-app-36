import { Container, Box, Heading } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Login = () => {
  return (
    <Container centerContent>
      <Box p={4} maxW="md" borderWidth={1} borderRadius="lg" overflow="hidden">
        <Heading as="h2" size="lg" mb={4}>Login</Heading>
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;