import * as cdk from '@aws-cdk/core';
import { WebSiteBucketContructor } from '../constructors/bucket/website-bucket-constructor';
import { WebSiteCloudFrontContructor } from '../constructors/cloudfront/website-cloudfront-constructor';

export class MainStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct, 
    stage: string, 
    name: string, 
    props: cdk.StackProps
  ) {
    const id = `${stage}-${name}`;
    super(scope, `${id}-stack`);

    const webSiteBucketConstructor = new WebSiteBucketContructor(this, stage, `${id}.website-bucket`);

    new WebSiteCloudFrontContructor(this, stage, `${id}.website-cloudfront`, webSiteBucketConstructor.bucket)
  }
}
