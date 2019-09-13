'use strict';

module.exports = {
    prospectUrl : 'https://catalyst05.catalyst.lrn.com/communication-manager/',
    //prospectUrl : 'https://catalyst05.catalyst.qa7.lrn.com/communication-manager/',
    prospectUserID : 955,
    userCredentials: {
      'Invalid Email': {email: 'invalidid', password: 'testpassword'},
      'Incorrect Password': {email: 'prospect904@test.com', password: 'testpassword'},
      'Correct UID & Pwd': {email: 'chandrababu', password: '123123'},
    },
   
    Emailsendingtestdata: {
      'Addtextbox1': {Textbox: 'Test'},
      'fromnamebox': {fromnamebox: 'Test'},
      'fromemail':{fromemail:'chandrababu.kakani@lrn.com'},
      'Enteremailaddressbox':{Enteremailaddressbox:'chandrababu.kakani@lrn.com'},
    },
    
    loginPageLabels: {
      header1 : 'LRN Catalyst',
      header2 : 'Deliver Simple, High-Quality Messaging to Keep E&C Top of Mind',
      header3 : 'Explore LRN’s newest communication manager to create and deliver an impactful communication campaign. Leverage our brand new micro-learning library or upload your own content to easily configure, send, and track your message.'
    },

    Filtersvalidation:{
      DataProtectionandPrivacycount: '1 Result(s)',
      BriberyCorruptioncount: '12 Result(s)',
      ConflictsofInterestcount: '13 Result(s)',      
    },

    EndDatefieldsvalidation: {
      Enddatefieldvalidation: 'Dates are limited to 6 months'
    },

    loginErrors : {
      incorrectEmailID : 'The Username/password is incorrect.',
      incorrectUserID : 'The Username/password is incorrect.',
      incorrectPwd : 'The Username/password is incorrect.',
    }
};