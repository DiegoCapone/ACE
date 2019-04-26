import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Style from './StylesPattern'

const Entregas = props => {
    return (
        <TouchableOpacity onPress={() => props.onDetalhes(props.item)}>
            <View style={styles.container}>
                {/* <Text style={styles.title}>{props.descricao}</Text> */}
                {/* <Text style={styles.title}>{props.SessionId}</Text> */}
                <Text style={styles.title}>{props.obs}</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        backgroundColor: Style.cor.verdeClaro,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,


    },
    title: {
        fontSize: Style.size.pequeno,
        color: Style.cor.branco,
        fontFamily: Style.font.helvetica
    },
})
export default Entregas;
