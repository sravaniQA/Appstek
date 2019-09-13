'use strict';

module.exports = {
   // prospectUrl : 'https://catalyst05.catalyst.lrn.com/communication-manager/',
   prospectUrl : 'https://catalyst05.catalyst.qa7.lrn.com/communication-manager/',
    prospectLogin : {
      email : 'chandra',
      password : '123123'
    },
    prospectUserID : 955,
    userCredentials: {
      'Invalid Email': {email: 'invalidid', password: 'testpassword'},
      'Incorrect Password': {email: 'prospect904@test.com', password: 'testpassword'},
      'Correct UID & Pwd': {email: 'chandra', password: '123123'}
    },
};
