function showSidebar() { // Function to show the sidebar and disable scrolling on the body.
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    sidebar.style.display = 'flex';
    body.style.height = '100%';
    body.style.overflow = 'hidden';
}

function hideSidebar() { // Function to hide the sidebar and enable scrolling on the body.
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    sidebar.style.display = 'none';
    body.removeAttribute('style');
}