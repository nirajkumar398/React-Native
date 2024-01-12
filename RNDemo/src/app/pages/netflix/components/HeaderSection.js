import {StyleSheet, Text, View} from 'react-native';

const HeaderSection = () => {
  return (
    <View style={styles.headerWrap}>
      <Text style={styles.header}>Welcome to React Native Demo App</Text>
      <Text style={styles.subHeader}>Explore the amazing features!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerWrap: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    color: '#666',
  },
});

export default HeaderSection;
