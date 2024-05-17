document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/users');
    const users = await response.json();

    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="user.html?id=${user.id}">${user.name}</a><button onclick="deleteUser(${user.id})">x</button>`;
        userList.appendChild(li);
    });
});

async function deleteUser(id) {
    const response = await fetch(`/api/users/${id}`, { method: 'DELETE' });
    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to delete user');
    }
}
