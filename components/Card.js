import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


function Card(props) {
    return (
        <View style={{...styles.inputContainer, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#E2E2E2',
        elevation: 10,
        width: 250,
        padding: 20,
        borderRadius: 5,
        margin:20,

    },
});

export default Card;