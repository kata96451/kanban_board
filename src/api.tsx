import { Octokit } from 'octokit';
import { Repo } from './types/Repo';
import { Task } from './types/Task';

const TOKEN = '---';

export const getTasks = async (dataFromUrl: string[]): Promise<Task[]> => {
  try {
    if (dataFromUrl.length > 0) {
      const octokit = new Octokit({
        auth: TOKEN,
      });

      const { data } = await octokit.request(`GET /repos/${dataFromUrl[0]}/${dataFromUrl[1]}/issues`, {
        owner: dataFromUrl[0],
        repo: dataFromUrl[1],
        per_page: '100',
        state: 'all',
      });

      return data;
    }
  } catch (e) {
    console.log(e);
  };

  return [];
};

export const getRepo = async (dataFromUrl: string[]): Promise<Repo | null> => {
  try {
    if (dataFromUrl.length > 0) {
      const octokit = new Octokit({
        auth: TOKEN,
      });

      const { data } = await octokit.request(`GET /repos/${dataFromUrl[0]}/${dataFromUrl[1]}`, {
        owner: dataFromUrl[0],
        repo: dataFromUrl[1],
      });

      return data;
    }
  } catch (e) {
    console.log(e);
  };

  return null;
};
