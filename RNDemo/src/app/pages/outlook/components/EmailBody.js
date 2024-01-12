import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../utils/styles';

const EmailBody = ({selectedEmail, handleMarkAsFavorite}) => {
  return (
    <View style={styles.emailBody}>
      <View style={styles.avatar}>
        <Text>{selectedEmail.from?.charAt(0)}</Text>
      </View>
      <TouchableOpacity
        onPress={handleMarkAsFavorite}
        style={styles.favouriteText}>
        <Text style={styles.favoriteChip}> Mark as favorite</Text>
      </TouchableOpacity>
      <Text>{selectedEmail.subject}</Text>
      <Text>{selectedEmail.dateTime}</Text>
      <Text>{`\n\n ${selectedEmail.description}`}</Text>
    </View>
  );
};

export default EmailBody;
