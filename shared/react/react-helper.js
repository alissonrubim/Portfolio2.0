import * as shell from '../shell-helper';

//Build a react project
export function buildProject(projectPath, callback){
  console.log(`\n\nBuilding fron-end...\n\n`);
  process.chdir(projectPath);
  shell.executeCmd("react-scripts", [
    "build"
  ], () => {
    console.log(`\n\n✅ React project built successfuly!\n\n`);
    callback();
  })
}