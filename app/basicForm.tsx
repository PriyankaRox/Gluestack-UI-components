//form and input manangement
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, TextInput, StyleSheet } from "react-native";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
});

export default function BasicForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) });

  const [value, setValue] = useState<any>(null);

  const onSubmit = (data: any) => {
    setValue(data);
    console.log("data", data);
    alert(`Submitted: ${JSON.stringify(data)}`);
    reset();
  };

  return (
    <Box className=" m-6">
      <Text className="mt-6 text-lg font-semibold">Basic Form</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your name"
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Text>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your email"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your password"
          />
        )}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}

      <Button onPress={handleSubmit(onSubmit)} style={{ marginTop: 2 }}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8
  },
  error: {
    color: "red"
  }
});
