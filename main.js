import { exec } from "child_process";
import concurrently from "concurrently";

(async () => {
  exec("yarn run lint");
  concurrently([
    { command: "yarn run tauri dev" },
    { command: "cd server/ && npm  start" },
  ]);
})();
