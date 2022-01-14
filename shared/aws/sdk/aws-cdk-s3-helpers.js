import * as s3 from '@aws-sdk/client-s3';
import * as fs from 'fs';
import * as path from 'path';

let bucketContext = null;

export function createContext() {
  if(!bucketContext)
    bucketContext = new s3.S3();
}

export function putFile(bucketName, id, data, contentType = null) {
  return bucketContext.putObject({
    Bucket: bucketName,
    Key: id,
    Body: data,
    ContentType: contentType,
  });
};

export function putFolder(bucketName, folderPath) {
  function process(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
      var filePath = path.join(currentDirPath, name);
      var stat = fs.statSync(filePath);
      if (stat.isFile()) {
        callback(filePath);
      } else if (stat.isDirectory()) {
        process(filePath, callback);
      }
    });
  }

  process(folderPath, function(filePath) {
    let bucketPath = filePath.substring(folderPath.length+1);
    putFile(bucketName, bucketPath, fs.readFileSync(filePath) ).then(() => {
      console.log('Successfully uploaded file '+ bucketPath +' to ' + bucketName);
    })
  });
}