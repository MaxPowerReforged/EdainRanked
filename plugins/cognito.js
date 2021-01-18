import {
	CognitoUserPool,
	CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

const cognitoUserPool = new CognitoUserPool({
  UserPoolId: process.env.USER_POOL_ID,
  ClientId: process.env.CLIENT_ID,
});

export default ({ app }, inject) => {
  inject('cognitoUserPool', cognitoUserPool);
}