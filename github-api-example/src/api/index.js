export async function FetchRepositories(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const myJson = await response.json();
    console.log(username, JSON.stringify(myJson));
}