import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import HomeImage from '../assets/img/bg-home.png'
import ButtonHomeMenu from './ButtonHomeMenu'
import Styles from './StylesPattern'
import BtnSair from '../Components/ButtonSair'
import moment from 'moment'
import 'moment/locale/pt-br'
import Entregas from './Entregas'


// import { Container } from './styles';

const ComponentHome = props => {
    return (
        <ImageBackground source={HomeImage} style={{ flex: 1, resizeMode: 'stretch' }}>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Text style={styles.data}>{moment().locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}</Text>
                    <Text style={styles.dados}>Placa - MIR-0055</Text>
                    <Text style={styles.dados}>CPF - 123456789-01</Text>
                    <BtnSair nome='Voltar' action={props.onVoltar} />
                </View>
                <View style={styles.containerBody} >
                    {props.lista}
                </View>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10
    },
    containerHeader: {
        justifyContent: 'flex-start'
    },
    containerBody: {
        justifyContent: 'center',
        marginLeft: 40,
        marginTop: 100
    },
    containerBar: {

    },
    dados: {
        fontSize: Styles.size.pequeno,
        fontFamily: Styles.font.helvetica,
        color: Styles.cor.branco
    },
    data: {
        fontSize: Styles.size.medio,
        fontFamily: Styles.font.helvetica,
        color: Styles.cor.branco,
        fontWeight: 'bold',
    },
    containerData: {
        marginLeft: 10
    }
});

export default ComponentHome;
