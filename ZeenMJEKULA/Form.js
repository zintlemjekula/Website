var config = {
    apiKey: "AIzaSyAzQyJTb2rLGHygL7wfNG2XcjiHBbsY9Y4",
    authDomain: "contactform-d2bc7.firebaseapp.com",
    databaseURL: "https://contactform-d2bc7.firebaseio.com",
    projectId: "contactform-d2bc7",
    storageBucket: "contactform-d2bc7.appspot.com",
    messagingSenderId: "166720745019",
    appId: "1:166720745019:web:4e5aa25b07e5a4426e361e",
    measurementId: "G-VWXT7SG88M"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var country = getInputVal('country');
    var subject = getInputVal('subject');
    
    // Save message
    saveMessage(fname, lname, country, subject);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname, lname, country, subject){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname:fname,
      lname:lname,
      country:country,
      subject:subject
    });
}