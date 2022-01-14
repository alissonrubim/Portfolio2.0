import * as cdk from '@aws-cdk/core';
import * as dotenv from 'dotenv';
import { MainStack } from './stacks/main-stack';

dotenv.config({
  path: '../.env'
})

const app = new cdk.App();
new MainStack(app, process.env.STAGE ?? 'dev', 'portfolio', {
  description: 'My portfolio',
  env: { 
    region: process.env.AWS_REGION,
    account: process.env.AWS_ACCOUNTID,
  },
});