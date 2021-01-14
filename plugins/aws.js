import Vue from 'vue';
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.AWS_ACESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
   region: process.env.REGION,
});

Vue.use(AWS);