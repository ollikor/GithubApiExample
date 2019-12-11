export async function FetchRepositories(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (response.status === 200) {
            const repositories = await response.json();
            if (repositories.length > 0) {
                return repositories
            } else {
                return null
            }
        } else {
            return null
        }
    } catch (error) {
        console.error(error);
    }

}

export async function FetchCommits(owner, repository) {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repository}/commits`);
        if (response.status === 200) {
            const commits = await response.json();
            return commits
        } else {
            return null
        }
    } catch (error) {
        console.error(error);
    }

}