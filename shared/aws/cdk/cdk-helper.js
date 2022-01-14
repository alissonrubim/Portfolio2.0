import * as shell from '../../shell-helper';

//Deploy a cdk stack
export function deployStack(projectPath, profile, stage, stackName, outputsJsonPath, onSuccess){
  console.log(`\n\nDeploying stack ${stackName}...\n\n`);
  process.chdir(projectPath);
  shell.executeInlineCmd(`cdk deploy ${stage}-${stackName}-stack --profile=${profile}`,
    () => {
      console.log(`\n\n✅ Stack ${stackName} deployed!\n\n`);
      onSuccess();
    }
  );
}

export function installBoostrap(profile, region){
  shell.executeInlineCmd(`cdk bootstrap --profile=${profile} --region=${region}`)
}