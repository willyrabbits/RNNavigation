import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Inicio = ({ navigation }) => {

    const info = {
        clienteId: '2xW34',
        precio: 500
    }

    const visitarNosotros = () => {
        navigation.navigate("Nosotros", info)
    }

    return (
        <View style={styles.contenedor}>
            <Text>INICIO</Text>
            <Button
                title='go to NOSOTROS'
                onPress={() => visitarNosotros()}
            />
        </View>
    )
}

export default Inicio

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
