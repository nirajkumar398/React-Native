import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import App from './App';
import {PAGE_NAMES} from './constants';

const Root = () => {
  const [pageToShow, setPageToShow] = useState('');

  const handlePagePress = pageName => {
    setPageToShow(pageName);
  };

  const renderPage = () => {
    if (pageToShow) {
      return <App key_id={pageToShow} setPageToShow={setPageToShow} />;
    } else {
      return (
        <View style={styles.container}>
          <Button
            title="Open Zomato"
            onPress={() => handlePagePress(PAGE_NAMES.ZOMATO)}
            style={styles.button}
          />
          <Button
            title="Open Netflix"
            onPress={() => handlePagePress(PAGE_NAMES.NETFLIX)}
            style={styles.button}
          />
          <Button
            title="Open Outlook"
            onPress={() => handlePagePress(PAGE_NAMES.OUTLOOK)}
            style={styles.button}
          />
          <Button
            title="Open Default"
            onPress={() => handlePagePress(PAGE_NAMES.DEFAULT)}
            style={styles.button}
          />
          <Button
            title="Open Timer"
            onPress={() => handlePagePress(PAGE_NAMES.TIMER)}
            style={styles.button}
          />
          <Button
            title="Open Pagination"
            onPress={() => handlePagePress(PAGE_NAMES.PAGINATION)}
            style={styles.button}
          />
        </View>
      );
    }
  };

  return <>{renderPage()}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    marginVertical: 10,
    width: '70%',
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
});

export default Root;
