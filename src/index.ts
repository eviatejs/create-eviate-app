#!/usr/bin/env node
import { init } from "./cli";

init().catch((error) => {
  console.error(error);
  process.exit(1);
});
