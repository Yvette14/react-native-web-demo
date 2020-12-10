import React, {ReactNode} from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';

interface LinkProps {
  style?: any;
  href: string;
  children: ReactNode;
}

const Link = (props: LinkProps) => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

const App = () => (
  <View style={styles.app}>
    <View style={styles.header}>
      <Image
        source={require('./logo.svg')}
        style={styles.logo}
        resizeMode='contain'
      />
      <Text style={styles.title}>React Native for Web</Text>
    </View>
    <Text style={styles.text}>
      This is an example of an app built with{" "}
      <Link href="https://github.com/facebook/create-react-app">
        Create React App
      </Link>{" "}
      and{" "}
      <Link href="https://github.com/necolas/react-native-web">
        React Native for Web
      </Link>
    </Text>
    <Text style={styles.text}>
      To get started, edit{" "}
      <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
        src/App.js
      </Link>
      .
    </Text>
    <Button onPress={() => console.log('clicked')} title='React Native Web Button' />
  </View>
);

export default App;

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 16,
    textAlign: "center"
  },
  text: {
    lineHeight: 24,
    fontSize: 18,
    marginVertical: 16,
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});