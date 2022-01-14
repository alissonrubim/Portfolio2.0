import { spawn } from "child_process";

//Execute shell command
export function executeCmd(command, args, onSuccess) {
  const cmd = spawn(command, args, {
    shell: true,
    stdio: [process.stdin, process.stdout, process.stderr],
  });

  cmd.on("close", (code) => {
    if (code === 0) onSuccess();
  });
}

//Execute shell in one command line
export function executeInlineCmd(command, onSuccess) {
  executeCmd('cd . &&', command.split(' '), onSuccess);
}