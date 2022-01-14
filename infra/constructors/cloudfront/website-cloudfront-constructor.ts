import * as cdk from '@aws-cdk/core';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origin from "@aws-cdk/aws-cloudfront-origins";
import * as s3 from '@aws-cdk/aws-s3';

export class WebSiteCloudFrontContructor extends cdk.Construct {
  public readonly distribution: cloudfront.Distribution;

  constructor(scope: cdk.Construct, stage: string, id: string, webSiteBucket: s3.Bucket) {
    super(scope, `${id}-stack`);

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, `${id}-origin-access-identity`);
    webSiteBucket.grantRead(originAccessIdentity);

    this.distribution = new cloudfront.Distribution(this, id, {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new origin.S3Origin(webSiteBucket, {
          originAccessIdentity: originAccessIdentity
        })
      }
    });
  }
}
