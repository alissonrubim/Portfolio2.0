
import * as cdkHelper from '../shared/aws/cdk/cdk-helper';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({
  path: '../.env'
})

console.log("Starting deployment...");
cdkHelper.deployStack(
  path.resolve(), 
  process.env.AWS_PROFILE, 
  process.env.STAGE ?? 'dev', 
  'portfolio',
  null, 
  () => {
    console.log("✅  All Finished!");
  }
)