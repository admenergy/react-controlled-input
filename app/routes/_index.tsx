import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { useState } from "react";
import { controlledInputFactory } from "~/controlledInputFactory";

const { ControlledInput } = controlledInputFactory();

export default function PageIndex() {
  const [value, setValue] = useState("");

  return (
    <Box m={2}>
      <Card>
        <CardHeader title="Controlled Input Test" />
        <CardContent>
          <ControlledInput
            type="text"
            label="Sample Text Input"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          <p>Current value: {value}</p>
        </CardContent>
      </Card>
    </Box>
  );
}
