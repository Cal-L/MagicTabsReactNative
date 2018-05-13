import * as React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'This is a React Native project with Typescript!'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
    marginHorizontal: 75,
  },
});

export default App;
