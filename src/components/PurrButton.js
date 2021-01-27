import React from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';

import commonStyles from '../constants/commonStyles';

const PurrButton = props => {

    return (
        <TouchableOpacity activeOpacity={0.6}
        style={styles.buttonStyle}
        onPress={props.onGenerate}>
            <Text style={{color:'#fff'}}>Generate a Purr Fact!</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginVertical: 10,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 40,
        backgroundColor: commonStyles.colors.primary
    }
})

export default PurrButton;