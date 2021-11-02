import { Octokit } from "@octokit/core";

const octokit = new Octokit();

/**
 *
 * @param {String} username Github username of the user
 * @returns Github user data as defined by Octokit or undefined, if no user with matching username was found.
 */
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
