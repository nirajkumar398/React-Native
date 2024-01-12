export const initialEmails = [
  {
    id: 1,
    from: 'sender1@example.com',
    subject: 'Sample Subject 1',
    description:
      'Thank you for meeting with us yesterday. We discussed several important aspects of the upcoming project and agreed on the next steps. Attached is the detailed summary of our discussion. Please review it at your convenience and let me know if you have any questions or need further clarification. \n\nBest regards, \nRaman',
    dateTime: '01/01/2023 10:00 AM',
    read: false,
    favorite: false,
  },
  {
    id: 2,
    from: 'sender2@example.com',
    subject: 'Sample Subject 2',
    description:
      'Thank you for meeting with us yesterday. We discussed several important aspects of the upcoming project and agreed on the next steps. Attached is the detailed summary of our discussion. Please review it at your convenience and let me know if you have any questions or need further clarification. \n\nBest regards, \nNiraj',
    dateTime: '02/01/2023 11:00 AM',
    read: false,
    favorite: false,
  },
  {
    id: 3,
    from: 'sender3@example.com',
    subject: 'Sample Subject 3',
    description:
      'Thank you for meeting with us yesterday. We discussed several important aspects of the upcoming project and agreed on the next steps. Attached is the detailed summary of our discussion. Please review it at your convenience and let me know if you have any questions or need further clarification. \n\nBest regards, \nJohn Doe',
    dateTime: '03/01/2023 12:00 PM',
    read: true,
    favorite: false,
  },
  {
    id: 4,
    from: 'sender4@example.com',
    subject: 'Sample Subject 4',
    description:
      'Thank you for meeting with us yesterday. We discussed several important aspects of the upcoming project and agreed on the next steps. Attached is the detailed summary of our discussion. Please review it at your convenience and let me know if you have any questions or need further clarification. \n\nBest regards, \nSajid',
    dateTime: '02/01/2023 11:00 AM',
    read: true,
    favorite: false,
  },
  {
    id: 5,
    from: 'sender5@example.com',
    subject: 'Sample Subject 5',
    description:
      'Thank you for meeting with us yesterday. We discussed several important aspects of the upcoming project and agreed on the next steps. Attached is the detailed summary of our discussion. Please review it at your convenience and let me know if you have any questions or need further clarification. \n\nBest regards, \nAnjali Doe',
    dateTime: '03/01/2023 12:00 PM',
    read: true,
    favorite: false,
  },
];

export const FILTER_OPTIONS = {
  UNREAD: 'unread',
  READ: 'read',
  FAVORITES: 'favorites',
};
