'use strict';

module.exports = {
    prospectUrl : 'https://catalyst05.catalyst.lrn.com/communication-manager/',
  // prospectUrl : 'https://catalyst05.catalyst.qa7.lrn.com/communication-manager/',
    prospectLogin : {
      email: 'chandrababu',
      password: '123123'
    },
    prospectUserID : 955,
    userCredentials: {
      'Invalid Email': {email: 'invalidid', password: 'testpassword'},
      'Incorrect Password': {email: 'prospect904@test.com', password: 'testpassword'},
      'Correct UID & Pwd': {email: 'chandrababu', password: '123123'}
    },
    
    Emailsendingtestdata: {
      'Addtextbox1': {Textbox: 'Test'},
      'fromnamebox': {fromnamebox: 'Test'},
      'fromemail':{fromemail:'chandrababu.kakani@lrn.com'},
      'Enteremailaddressbox':{Enteremailaddressbox:'chandrababu.kakani@lrn.com'},
    },
};
