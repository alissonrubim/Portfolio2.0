import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class WebSiteBucketContructor extends cdk.Construct {
  public readonly bucket: s3.Bucket;

  constructor(scope: cdk.Construct, stage: string, id: string) {
    super(scope, `${id}-stack`);

    this.bucket = new s3.Bucket(this, id, {
      bucketName: id,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
      versioned: false,
      publicReadAccess: false,
    });
  }
}
