/**
 * Opens the mobile slide-over navigation drawer and locks background page scrolling
 * so the user cannot scroll the main content while the menu is active.
 */
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Reveal the sidebar using flex layout to align navigation items vertically
    sidebar.style.display = 'flex';

    // Lock body height and hide overflow to prevent background scrolling
    body.style.height = '100%';
    body.style.overflow = 'hidden';
}

/**
 * Closes the mobile slide-over navigation drawer and restores normal page scrolling.
 */
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Hide the sidebar from view
    sidebar.style.display = 'none';

    // Strip inline height and overflow styles to re-enable normal document scrolling
    body.removeAttribute('style');
}