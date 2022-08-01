import React from "react";

import { Container, Text, Button } from "./styles";

export function SignIn() {
    function handleSave() {}

    return (
        <Container>
            <Text>Teste</Text>

            <Button title="Salvar" onPress={handleSave} />
        </Container>
    );
}
