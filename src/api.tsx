import { Octokit } from 'octokit';
import { Task } from './types/Task';

export const getTasks = (async (): Promise<Task[]> => {
  try {
    const octokit = new Octokit({
      auth: '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',
    });

    const { data } = await octokit.request('GET /repos/facebook/react/issues', {
      owner: 'facebook',
      repo: 'react',
      per_page: '100',
      state: 'all',
    });

    return data;
  } catch (e) {
    console.log(e);
  };

  return [];
})();
