//used for tasks that might take some time to complete, such as fetching data from a server, reading a file, or waiting for user input.

document.getElementById('createForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const newUser = {
        name: document.getElementById('name').value,
        nickname: document.getElementById('nickname').value,
        age: document.getElementById('age').value,
        bio: document.getElementById('bio').value
    };

    const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    });

    if (response.ok) {
        window.location.href = 'index.html';
    } else {
        alert('Failed to create user');
    }
});
