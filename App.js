import React from 'react';

import HomeScreen from './src/screens/HomeScreen';

//importing styles
import commonStyles from './src/constants/commonStyles';

//Navigation
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';



const App = () => {

const Stack = createStackNavigator();
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name="Purr Facts" 
            component={HomeScreen}
            options={{
                headerStyle: {
                  backgroundColor: commonStyles.colors.primary
                },
                headerTintColor: "#fff",
                
              }}
              />
          </Stack.Navigator>
        </NavigationContainer>  
    
  )
}



export default App;