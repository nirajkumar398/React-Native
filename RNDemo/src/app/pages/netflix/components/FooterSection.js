import {StyleSheet, Text, View} from 'react-native';

const FooterSection = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 React Native Demo</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});
export default FooterSection;
