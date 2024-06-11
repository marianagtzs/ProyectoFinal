import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screens/CategoriesScreens";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScree from './screens/MealDetailScreen';

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: { backgroundColor: '#676767'},
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#ededed'}
          }}
        >
          <Stack.Screen 
            name="Recetas" 
            component={CategoriesScreen}
          />
          <Stack.Screen 
            name="RecetasDescripciónGeneral" 
            component={MealsOverviewScreen}
            options={{
              title: 'All categories',
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#C39898'}
            }} 
          />
          <Stack.Screen 
            name="Detalles" 
            component={MealDetailScree} 
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
