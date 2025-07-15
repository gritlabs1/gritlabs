document.addEventListener('DOMContentLoaded', () => {
    const msgEl = document.getElementById('message');
    fetch('https://www.gritlabs.net/api/hello')
        .then(res => res.json())
        .then(data => {
            msgEl.textContent = data.message;
        })
        .catch(err => {
            console.error(err);
            msgEl.textContent = 'Error fetching message';
        });
});
