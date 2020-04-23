
// Handle errors and return response or throw error statusText
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// check if is internet connection and return response
function FetchData(url) {
  if (window.navigator.onLine === false) {
    throw new Error("No internet connection");
  } else {
    return fetch(url)
      .then(handleErrors)
      .then((response) => response.json());
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
