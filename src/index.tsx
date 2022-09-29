/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Octokit } from 'octokit';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  try {
    const octokit = new Octokit({
      auth: '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',
    });

    const { data } = await octokit.request('GET /repos/facebook/react/issues', {
      owner: 'facebook',
      repo: 'react',
    });
    console.log(data);
  } catch (e) {
    console.log(e);
  };
})();

(async () => {
  try {
    const octokit = new Octokit({
      auth: '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',
    });

    const { data } = await octokit.request('GET /repos/facebook/react/issues/22118/comments', {
      owner: 'facebook',
      repo: 'react',
    });
    console.log(data[0].body);
  } catch (e) {
    console.log(e);
  };
})();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
