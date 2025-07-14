(function () {
  const SITE_ID = 3;
  const STORAGE_KEY = 'visitor_token';

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = `${name}=${value || ''}${expires}; path=/`;
  }

  function getOrCreateToken() {
    let token = localStorage.getItem(STORAGE_KEY) || getCookie(STORAGE_KEY);
    if (!token) {
      token = crypto.randomUUID();
      localStorage.setItem(STORAGE_KEY, token);
      setCookie(STORAGE_KEY, token, 365);
    }
    return token;
  }

  function isLikelyBot() {
    return /bot|crawl|spider|slurp|mediapartners/i.test(navigator.userAgent) ||
      !!navigator.webdriver;
  }

  const payload = {
    siteId: SITE_ID,
    visitorToken: getOrCreateToken(),
    userAgent: navigator.userAgent,
    geoLocation: '',
    isBot: isLikelyBot()
  };

  fetch('users/visitors/upsert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
})();
