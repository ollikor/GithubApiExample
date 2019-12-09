export async function FetchRepositories(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const myJson = await response.json();
        return myJson   
    } catch (error) {
        console.log(error);
    }
    
}

export async function FetchCommits(owner, repository) {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repository}/commits`);
        const myJson = await response.json();
        return myJson   
    } catch (error) {
        console.log(error);
    }
    
}