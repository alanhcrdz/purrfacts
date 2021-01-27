import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView 
} from 'react-native';


const Card = props => {
       
    return (
        <ScrollView style={styles.cardStyle}>

            <Text style={styles.textStyle}>
                
                {props.onShowFact}
                </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        padding: 20,
        marginVertical: 10,
        borderRadius: 12,
        width: "100%",
        height: 150,
    },
    textStyle: {
        color:'#fff', 
        fontSize: 18,
        marginTop: 10,
        fontStyle: 'italic',
        textAlign: 'center'
    }
})

export default Card;