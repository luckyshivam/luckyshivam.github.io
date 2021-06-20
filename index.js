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
    var x2=document.getElementById('myemail').value;
     alert("Name:"+x1+"\n Email:"+x2);
    
                    }

function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
            console.log('statusChangeCallback');
            console.log(response);                   // The current login status of the person.
            if (response.status === 'connected') {   // Logged into your webpage and Facebook.
                testAPI();

            } else {                                 // Not logged into your webpage or we are unable to tell.
                document.getElementById('status').innerHTML = ; 
            }
        }


        function checkLoginState() {               // Called when a person is finished with the Login Button.
            FB.getLoginStatus(function (response) {   // See the onlogin handler
                statusChangeCallback(response);
            });
        }


        window.fbAsyncInit = function () {
            FB.init({
                appId: '476503736753362',
                cookie: true,                     // Enable cookies to allow the server to access the session.
                xfbml: true,                     // Parse social plugins on this webpage.
                version: 'v2.0'           // Use this Graph API version for this call.
            });


            FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
                statusChangeCallback(response);        // Returns the login status.
            });
        };

        function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
            console.log('Welcome!  Fetching your information.... ');
            FB.api(
                 '/me',
                  'GET',
                {"fields":"id,name"},
               function(response) {
      // Insert your code here
                   alert("logged in sucessfully");
  }
);
           // FB.api('/me', function (response) {
             //   console.log('Successful login for: ' + response.name);
               // document.getElementById('status').innerHTML = '<a href="login.html">login</a>';
             //  alert("logged in sucessfully");
           // });
        }
