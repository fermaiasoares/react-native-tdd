import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import {
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/theme";

import { SignIn } from "./src/screens/SignIn";

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        );
    }
    return (
        <ThemeProvider theme={theme}>
            <SignIn />
        </ThemeProvider>
    );
}
