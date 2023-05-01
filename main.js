import concurrently from "concurrently";

(async () => {
  concurrently([
    { command: "npm run dev" },
    { command: "cd server/ && npm  start" },
  ]);
})();
