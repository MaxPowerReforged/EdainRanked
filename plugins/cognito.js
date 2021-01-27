import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser
} from "amazon-cognito-identity-js";
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

class Cognito {
  userPool = new CognitoUserPool({
    UserPoolId: process.env.USER_POOL_ID,
    ClientId: process.env.CLIENT_ID
  });

  AuthenticateUser(username, password) {
    var authenticationData = {
      Username: username,
      Password: password
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );

    var userData = {
      Username: username,
      Pool: this.userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function(result) {
        var accessToken = result.getAccessToken().getJwtToken();

        console.log("cognito authentication successful!!!");
      },

      onFailure: function(err) {
        console.log(err.message || JSON.stringify(err));
      }
    });
  }
}

export default ({ app }, inject) => {
  inject("Cognito", new Cognito());
};
