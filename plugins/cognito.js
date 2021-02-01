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

  authenticateUser(username, password) {
    let authenticationData = {
      Username: username,
      Password: password
    };
    let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );

    let userData = {
      Username: username,
      Pool: this.userPool
    };
    let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function(result) {
        console.log("cognito authentication successful!!!");
        return result.getAccessToken().getJwtToken();
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
