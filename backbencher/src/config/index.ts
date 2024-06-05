import * as fs from 'fs';

export interface DatabaseConfig {
  url: string;
}

export interface Config {
  jwtSecret: string;
  db: DatabaseConfig;
}

function loadConfig(): Config {
  return JSON.parse(fs.readFileSync('config.json').toString('utf-8'));
}

export const configLoader = () => loadConfig();
