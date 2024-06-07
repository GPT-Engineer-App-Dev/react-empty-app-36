import { Container, Heading, Text } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, error, isLoading } = useEvents();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading events: {error.message}</Text>;

  return (
    <Container centerContent>
      <Heading as="h2" size="xl" mb={4}>Events</Heading>
      {events.length === 0 ? (
        <Text>No events available.</Text>
      ) : (
        events.map(event => (
          <Container key={event.id} p={4} borderWidth={1} borderRadius="lg" mb={4}>
            <Heading as="h3" size="md">{event.name}</Heading>
            <Text>Date: {event.date}</Text>
            <Text>Venue ID: {event.venue_id}</Text>
            <Text>Starred: {event.is_starred ? "Yes" : "No"}</Text>
          </Container>
        ))
      )}
    </Container>
  );
};

export default Events;