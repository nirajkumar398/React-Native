import React from 'react';
import { FlatList, View } from 'react-native';
import EmailListItem from './EmailListItem';
import { styles } from '../utils/styles';

const EmailList = ({
  emails,
  selectedEmail,
  filter,
  handleEmailPress,
}) => {
  const renderEmailList = () => {
    let filteredEmails = emails;
    if (filter === 'favorites') {
      filteredEmails = emails.filter(email => email.favorite);
    } else if (filter === 'read') {
      filteredEmails = emails.filter(email => email.read);
    } else if (filter === 'unread') {
      filteredEmails = emails.filter(email => !email.read);
    }

    return (
      <FlatList
        data={filteredEmails}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <EmailListItem
            item={item}
            selectedEmail={selectedEmail}
            handleEmailPress={handleEmailPress}
          />
        )}
      />
    );
  };

  return <View style={styles.emailList}>{renderEmailList()}</View>;
};

export default EmailList;
