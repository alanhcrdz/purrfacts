import React, {useState} from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    ImageBackground, 
    ActivityIndicator
} from 'react-native';

import commonStyles from '../constants/commonStyles';

import PurrButton from './PurrButton';
import Card from './Card';

const HomeScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);


    function callFact() {

        setIsLoading(true)
        fetch("https://meowfacts.herokuapp.com/")
        .then(response => response.json())
        .then((json) => {
            setData(json.data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    return (

        <View style={styles.screen}>
                <Text style={{color: '#fff', fontSize:40}}>Purr Facts</Text>
            <View style={styles.backgroundContainer}>
                <ImageBackground style={styles.image} source={{uri: `https://images.pexels.com/photos/4587958/pexels-photo-4587958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}} />
            </View>
            <PurrButton onGenerate={callFact} />

                {isLoading ?
                    <View>
                        <Text style={{color:"#fff", fontSize: 18}}>Wait Here, human, let me find a fact...</Text>
                        <ActivityIndicator size='large' color={commonStyles.colors.accent} />

                    </View>
                 
                  :
                    <Card onShowFact={data} />
                }
        </View>


    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: "#778ca3",
        height: "100%"
    },
    backgroundContainer: {
        backgroundColor: commonStyles.colors.accent,
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden'

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default HomeScreen;

