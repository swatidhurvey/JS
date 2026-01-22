async function getHithubUser() {
    let username = document.querySelector('#username').value;
    let result = document.querySelector('#result');

    if (username === "") {
        result.innerHTML = "<p>Hello Please Enter user</p>";
        return;
    }

    result.innerHTML = `<p>loading.....</p>`;

    try {
        // User data
        const userRes = await fetch(`https://api.github.com/users/${username}`);

        if (userRes.status === 404) {
            result.innerHTML = `<p>User name not found</p>`;
            return;
        }

        const user = await userRes.json();

        // Repo data
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await repoRes.json();

        // UI Update
        result.innerHTML = `
            <div class="profile">
                <img src="${user.avatar_url}" width="120" />
                <div class="profile-info">
                    <h2>${user.name || user.login}</h2>
                    <p>@${user.login}</p>
                    <p>${user.bio || "No bio available"}</p>
                    <p>Repos: ${repos.length}</p>
                </div>
            </div>
        `;
    }
    catch (error) {
        result.innerHTML = "<p>Error fetching data. Try again</p>";
        console.error(error);
    }
}
