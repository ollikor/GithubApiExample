function handleErrors(response) {
  if (!response.ok) {
    throw new Error("Search failed");
  }
  return response;
}

// function fetchError(url, options) {
//     return fetch(url, options).then(handleErrors)
// }

// export function getRepositories(username) {
//     return fetchError('url', {})
// }
// export function getASFD(username) {
//     return fetchError('url2', {method: 'POST'})
// }

export function FetchRepositories(username) {
  if (window.navigator.onLine === false) {
    return "No internet connection";
  } else {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(handleErrors)
      .then((response) => response.json())
      .catch((error) => error.message);
  }
}

export function FetchCommits(owner, repository) {
    if (window.navigator.onLine === false) {
      return "No internet connection";
    } else {
      return fetch(`https://api.github.com/repos/${owner}/${repository}/commits?per_page=10`)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => error.message);
    }
  }

// Function to fetch all repositories from selected user
// export async function FetchRepositories(username) {
//     try {
//         const response = await fetch(`https://api.github.com/users/${username}/repos`);
//         const repositories = await response.json();
//         if (!response.ok) {
//             throw new Error('Search failed');
//         }
//         if (repositories.length > 0) {
//             return repositories
//         } else {
//             return "No repositories"
//         }
//     } catch (error) {
//         return error.message;
//     }
// }

// Function to fetch 10 commits from selected repository
// export async function FetchCommits(owner, repository) {
//   try {
//     const response = await fetch(
//       `https://api.github.com/repos/${owner}/${repository}/commits?per_page=10`
//     );
//     const commits = await response.json();
//     if (!response.ok) {
//       throw new Error("Search failed");
//     }
//     if (commits.length > 0) {
//       return commits;
//     } else {
//       return "No commits";
//     }
//   } catch (error) {
//     return error.message;
//   }
// }
