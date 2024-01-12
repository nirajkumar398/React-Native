import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../utils/styles';

const EmailListItem = ({
  item,
  selectedEmail,
  handleEmailPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.emailItem,
        item.read ? styles.read : styles.unread,
        selectedEmail && selectedEmail.id === item.id
          ? styles.selected
          : null,
      ]}
      onPress={() => handleEmailPress(item.id)}>
      <View style={styles.avatar}>
        <Text>{item.from.charAt(0)}</Text>
      </View>
      <View style={styles.emailDetails}>
        <Text>{item.from}</Text>
        <Text>{item.subject}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.description.length > 20
            ? `${item.description.substring(0, 20)}...`
            : item.description}
        </Text>
        <Text>{item.dateTime}</Text>
        {item.favorite && <Text style={styles.favorite}>Favorite</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default EmailListItem;
