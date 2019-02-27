
// Get a reference to the database service
var database = firebase.database();


function register(){
var name=document.getElementById('name').value;   
    var email=document.getElementById('email').value;    

    var message=document.getElementById('message').value;    

var firebaseRef = firebase.database().ref('users/');
   var newmsg = firebaseRef.push();
    if(email=='' || name ==''){
        alert('please enter name and email ');
    }
    else{
    newmsg.set({
        username: name,
        email: email,
         user_mssage : message
    })
        }
 }


//function writeUserData(userId, name, email, message) {
//  firebase.database().ref('users/' + userId).set({
//    username: name,
//    email: email,
//    user_mssage : messages
//
//  });
//   
//}
//    
// writeUserData('',name,email,message);
    
    
    
   






// var firebaseRef;
//function register(){
//    
//    
//    var name = document.getElementById('name').value;
//   firebaseRef=firebase.database().ref();
//    
//
//    firebaseRef.on('value',snap => name = snap.value());
//    
//    }
