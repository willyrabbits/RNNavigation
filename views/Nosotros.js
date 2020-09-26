import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Nosotros = ({ navigation, route }) => {

    const { clienteId, precio } = route.params

    const visitarInicio = () => {
        navigation.navigate("Inicio")
        //navigation.goBack()
        //navigation.push('Inicio')
    }

    return (
        <View style={styles.contenedor}>
            <Text>Nosotros</Text>
            <Text>ID: {clienteId} - precio {precio}</Text>
            <Button
                title='go to INICIO'
                onPress={() => visitarInicio()}
            />
        </View>)
}

export default Nosotros

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
