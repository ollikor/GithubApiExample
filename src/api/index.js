import texts from "../texts";

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

function FetchData(url) {
  if (window.navigator.onLine === false) {
    return texts["no-internet"];
  } else {
    return fetch(url)
      .then(handleErrors)
      .then((response) => response.json())
      .catch((error) => error.message);
  }
}

export function FetchRepositories(options) {
  const url = `https://api.github.com/users/${options.username}/repos`;
  return FetchData(url);
}

export function FetchCommits(options) {
  const url = `https://api.github.com/repos/${options.owner}/${options.repository}/commits?per_page=10`;
  return FetchData(url);
}

// export function FetchData(options) {
//   let url;
//   if (window.navigator.onLine === false) {
//     return texts["no-internet"];
//   } else {
//     switch (options.index) {
//       case 1:
//         url = `https://api.github.com/users/${options.username}/repos`;
//         FetchData(url)
//         break;

//       case 2:
//         url = `https://api.github.com/repos/${options.owner}/${options.repository}/commits?per_page=10`;
//         FetchData(url)
//         break;
//       default:
//         break;
//     }
//     // return fetch(url)
//     //   .then(handleErrors)
//     //   .then((response) => response.json())
//     //   .catch((error) => error.message);
//   }
// }

// export function FetchRepositories(username) {
//   if (window.navigator.onLine === false) {
//     return "No internet connection";
//   } else {
//     return fetch(`https://api.github.com/users/${username}/repos`)
//       .then(handleErrors)
//       .then((response) => response.json())
//       .catch((error) => error.message);
//   }
// }

// export function FetchCommits(owner, repository) {
//   if (window.navigator.onLine === false) {
//     return "No internet connection";
//   } else {
//     return fetch(
//       `https://api.github.com/repos/${owner}/${repository}/commits?per_page=10`
//     )
//       .then(handleErrors)
//       .then((response) => response.json())
//       .catch((error) => error.message);
//   }
// }
