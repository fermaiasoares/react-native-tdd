import React from "react";
import { Text, View, TextInput, Button } from "react-native";

export function Profile() {
    return (
        <View>
            <Text>Profile</Text>

            <TextInput autoCorrect={false} placeholder="Nome" />

            <TextInput autoCorrect={false} placeholder="Sobrenome" />

            <Button testID="btn-salvar" title="Salvar" onPress={() => {}}/>
        </View>
    );
}
