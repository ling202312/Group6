document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');

    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();

    const userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Nickname: ${user.nickname}</p>
        <p>Age: ${user.age}</p>
        <p>Bio: ${user.bio}</p>
    `;

    document.getElementById('editLink').href = `edit.html?id=${user.id}`;
});
