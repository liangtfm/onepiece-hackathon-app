import React from "react";
import { useParams } from "next/navigation";
import { Text, Card, Image, Button, Group } from "@mantine/core";

export default function RentalListing(props: { listing: string }) {
  const { listing } = props;
  const params = useParams();
  console.log("params = ", params);
  const [requested, setRequested] = React.useState(false);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw={300}>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{listing}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        With this beautiful home you can explore more of the magical fjord
        landscapes with tours and activities on and around the fjords of Norway
      </Text>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => setRequested(true)}
        disabled={requested}
      >
        Request to Rent
      </Button>
      {requested && <Text c={"darkgreen"}>Requested!</Text>}
    </Card>
  );
}
