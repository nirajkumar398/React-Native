import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    favouriteText: {
      alignItems: 'flex-end',
      marginTop: 2,
    },
    favoriteChip: {
      backgroundColor: '#E54065',
      borderRadius: 5,
      padding: 2,
      textAlign: 'center',
    },
    favorite: {
      fontSize: 12,
      color: '#E54065',
    },
    headerContainer: {
      flexDirection: 'column',
      backgroundColor: '#F4F5F9',
      padding: 10,
    },
    p4: {
      padding: 4,
    },
    selectedFilter: {
      backgroundColor: '#CFD2DC',
      borderRadius: 4,
      padding: 4,
    },
    filterText: {
      fontWeight: 'bold',
      fontSize: 16,
      marginRight: 12,
    },
    filterOptions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
      paddingHorizontal: 20,
    },
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      marginTop: 20,
      flexDirection: 'row',
    },
    emailList: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      padding: 10,
    },
    emailItem: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#CFD2DC',
      borderWidth: 1,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#E54065',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    emailDetails: {
      flex: 1,
    },
    read: {
      backgroundColor: '#F4F5F9',
    },
    unread: {
      backgroundColor: '#F4F5F9',
    },
    selected: {
      backgroundColor: '#F2F2F2',
    },
    emailBody: {
      padding: 10,
      borderColor: '#CFD2DC',
      borderRadius: 4,
      flex: 1,
    },
  });