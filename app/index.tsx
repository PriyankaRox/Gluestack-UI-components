import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Platform, SafeAreaView, ScrollView } from "react-native";
import { Text } from "@/components/ui/text";

import { Link } from "expo-router";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Button, ButtonText } from "@/components/ui/button";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ThemeProvider } from "./ThemeProvider";
import BasicForm from "./basicForm";
import DynamicFieldsForm from "./dynamicFieldForms";

export default function Home() {
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Card className="p-5 rounded-lg max-w-[360px] ml-3">
          <Image
            source={{
              uri: "https://gluestack.github.io/public-blog-video-assets/saree.png"
            }}
            className="mb-4 h-[240px] w-full rounded-md aspect-[4/3]"
            alt="image"
          />
          <Text className="text-lg font-normal mb-2 text-typography-700">
            {" "}
            Fashion Clothing
          </Text>
          <VStack className="mb-4">
            <Heading size="md" className="mb-2">
              Cotton Kurta
            </Heading>
            <Text size="sm">
              Floral embroidered notch neck thread work cotton kurta in white
              and black.
            </Text>
          </VStack>
          <Box className="flex-col sm:flex-row">
            <Button className="px-4 py-2 mt-0 mb-2 sm:mr-3 sm:mb-0 sm:flex-1">
              <ButtonText size="sm" className="text-typography-600">
                Wishlist
              </ButtonText>
            </Button>
          </Box>
          <Button
            style={{
              backgroundColor: Platform.OS === "ios" ? "blue" : "green",
              marginBottom: 0
            }}
          >
            Platform-Specific Button
          </Button>
        </Card>
        <GluestackUIProvider mode={colorMode}>
          <Box className="bg-primary flex-1 mb-2">
            <Button
              onPress={() => {
                setColorMode(colorMode === "light" ? "dark" : "light");
              }}
            >
              <ButtonText>Toggle color mode</ButtonText>
            </Button>
          </Box>
        </GluestackUIProvider>
        <BasicForm />
        <DynamicFieldsForm />
      </SafeAreaView>
    </ThemeProvider>
  );
}
