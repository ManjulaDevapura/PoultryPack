import React , { useRef, useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppState
} from 'react-native';
import axios from 'axios';

const App: () => Node = () => {
  
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const activeNotifier = () => {
    axios.get("https://reqres.in/api/users/2")
        .then(response => {
            console.log('************ activeNotifier **********', response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

const backgroundNotifier = () => {
  axios.get("https://reqres.in/api/users/2")
      .then(response => {
          console.log('************* backgroundNotifier ************', response.data);
      })
      .catch(error => {
          console.log(error);
      });
}

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      if(appState.current == "active"){
        console.log(appState.current);
        activeNotifier()
      }
      if(appState.current == "background"){
        console.log(appState.current);
        backgroundNotifier()
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Current state is: {appStateVisible}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
