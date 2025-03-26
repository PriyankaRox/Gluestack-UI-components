import { Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import React from "react";

export default function SampleModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <Center className="h-[300px]">
      <Button></Button>
    </Center>
  );
}
