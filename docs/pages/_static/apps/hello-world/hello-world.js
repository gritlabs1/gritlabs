document.addEventListener('DOMContentLoaded', () => {
    const msgEl = document.getElementById('message');
    fetch('https://www.gritlabs.net/api/hello')
        .then(res => res.text())
        .then(text => {
            msgEl.textContent = text;
        })
        .catch(err => {
            console.error(err);
            msgEl.textContent = 'Error fetching message';
        });
});
