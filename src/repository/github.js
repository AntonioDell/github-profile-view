import { Octokit } from "@octokit/core";

const octokit = new Octokit();

export const getUser = async (username) => {
  try {
    const response = await octokit.request("GET /users/{username}", {
      username,
    });
    return response.data;
  } catch (error) {
    console.error(`Error loading github username ${username}`, error);
    return undefined;
  }
};
