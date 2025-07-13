document.addEventListener('DOMContentLoaded', () => {
    const msgEl = document.getElementById('message');
    fetch('https://www.gritlabs.net/api/hello')
        .then(res => res.json())
        .then(data => {
            const text = typeof data === 'object' && 'message' in data ? data.message : JSON.stringify(data);
            msgEl.textContent = text;
        })
        .catch(err => {
            console.error(err);
            msgEl.textContent = 'Error fetching message';
        });
});
