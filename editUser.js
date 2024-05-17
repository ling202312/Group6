document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');

    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();

    document.getElementById('name').value = user.name;
    document.getElementById('nickname').value = user.nickname;
    document.getElementById('age').value = user.age;
    document.getElementById('bio').value = user.bio;

    document.getElementById('editForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const updatedUser = {
            name: document.getElementById('name').value,
            nickname: document.getElementById('nickname').value,
            age: document.getElementById('age').value,
            bio: document.getElementById('bio').value
        };

        const response = await fetch(`/api/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUser)
        });

        if (response.ok) {
            window.location.href = `user.html?id=${userId}`;
        } else {
            alert('Failed to update user');
        }
    });
});
