function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src',profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none")
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("you have signed out sucessfully");
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");

    });
  }
function myfun(){
var x1=document.getElementById('text').value;
    var x1=document.getElementById('text').value;
    var x2=document.getElementById('email').value;
     document.write(x1);
     document.write(x2);
    
}
