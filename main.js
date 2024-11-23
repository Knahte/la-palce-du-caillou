if (window.location.pathname.endsWith('.html')) {
    var newUrl = window.location.pathname.replace('.html', '');
    window.location.replace(newUrl);
}
if (window.location.pathname.endsWith('index')) {
    var newUrl = window.location.pathname.replace('index', '');
    window.location.replace(newUrl);
}