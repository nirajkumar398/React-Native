import React, {useState} from 'react';
import {View} from 'react-native';
import {initialEmails} from './utils/constants';
import {styles} from './utils/styles';
import EmailList from './components/EmailList';
import EmailBody from './components/EmailBody';
import FilterOptions from './components/FilterOptions';

const App = () => {
  const [emails, setEmails] = useState(initialEmails);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleEmailPress = emailId => {
    const selected = emails.find(email => email.id === emailId);
    setSelectedEmail(selected);
  };

  const handleMarkAsFavorite = () => {
    if (selectedEmail) {
      const updatedEmails = emails.map(email =>
        email.id === selectedEmail.id
          ? {...email, favorite: !email.favorite}
          : email,
      );
      setEmails(updatedEmails);
      setSelectedEmail({
        ...selectedEmail,
        favorite: !selectedEmail.favorite,
      });
    }
  };
  const renderFilterOptions = () => {
    return (
      <FilterOptions
        filter={filter}
        setSelectedEmail={setSelectedEmail}
        setFilter={setFilter}
      />
    );
  };

  const renderEmailList = () => {
    return (
      <EmailList
        emails={emails}
        selectedEmail={selectedEmail}
        filter={filter}
        handleEmailPress={handleEmailPress}
      />
    );
  };
  const renderEmailBody = () => {
    return (
      selectedEmail && (
        <EmailBody
          selectedEmail={selectedEmail}
          handleMarkAsFavorite={handleMarkAsFavorite}
        />
      )
    );
  };

  return (
    <View style={styles.container}>
      {renderFilterOptions()}
      <View style={styles.content}>
        {renderEmailList()}
        {renderEmailBody()}
      </View>
    </View>
  );
};

export default App;
