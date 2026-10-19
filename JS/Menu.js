function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    sidebar.style.display = 'flex';
    body.style.height = '100%';
    body.style.overflow = 'hidden';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    sidebar.style.display = 'none';
    body.removeAttribute('style');
}