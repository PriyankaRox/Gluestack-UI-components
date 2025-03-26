import React from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Text, TextInput, StyleSheet } from "react-native";
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";

export default function DynamicFieldsForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      emails: [{ email: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "emails"
  });

  const onSubmit = (data: any) => {
    alert(`Submitted: ${JSON.stringify(data)}`);
  };

  return (
    <Box className="p-4">
      {fields.map((field, index) => (
        <Controller
          key={field.id}
          name={`emails[${index}].email`}
          control={control}
          defaultValue={field.email}
          render={({ field }) => (
            <Box className="flex flex-row items-center">
              <Input {...field} placeholder={`Email ${index + 1}`} />
              <Button
                onPress={() => remove(index)}
                className="mt-2 border border-gray-500 text-gray-500 px-4 py-2 rounded hover:bg-gray-100"
              >
                Remove
              </Button>
            </Box>
          )}
        />
      ))}
      <Button
        onPress={() => append({ email: "" })}
        className="mt-2 border border-gray-500 text-gray-500 px-4 py-2 rounded hover:bg-gray-100"
      >
        Add Email
      </Button>
      <Button onPress={handleSubmit(onSubmit)} className="mt-2">
        Submit
      </Button>
    </Box>
  );
}
