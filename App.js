import randomQuote from "random-quotes";
import React from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

// run expo start -m tunnel

export default function App() {
  const [quote, setQuote] = React.useState(null);

  React.useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    setQuote(randomQuote(1));
  }

  return !quote ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: "800" }}>{quote.body}</Text>

        <Text style={{ fontSize: 18, fontWeight: "200", margin: 20 }}>{quote.author}</Text>
        <Button title="New Quote" onPress={getQuote} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
