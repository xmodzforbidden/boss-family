export const KEYAUTH_CONFIG = {
  appName: "websit",
  ownerId: "PF7qFni9VY",
  encryptionKey: "b684ef652abd78d502b9a4ac1e0d70c4687aeb0adbe79d3f9e1e8e63799b0bdd",
  version: "1.0"
};

// KeyAuth API endpoints
export const KEYAUTH_API = {
  register: "https://keyauth.win/api/1.2/",
  login: "https://keyauth.win/api/1.2/",
  license: "https://keyauth.win/api/1.2/"
};

// Generate a random session ID
export const generateSessionId = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};