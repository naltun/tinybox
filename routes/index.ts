import { config } from "../config.ts";

export const welcomeMsg = `
+--------------------------------------------+
|             welcome to tinybox!            |
|                                            |
|   ~~~the code-it-yourself town square~~~   |
|                                            |
|                                            |
|   for more information, please visit:      |
|             GET /help                      |
|                                            |
|   to sign up for an account, please visit: |
|             GET /createuser                |
|                                            |
|                                            |
|          source code available at:         |
|      ${config.projectUrl}     |
|                                            |
|              version ${config.version}               |
+--------------------------------------------+

`;
