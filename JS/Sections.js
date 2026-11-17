/**
 * Toggles the visibility of a specific Scout section block (e.g., a Drey, Colony, Pack, or Troop).
 * If the section is already visible, it collapses it; otherwise, it displays it.
 *
 * @param {string} ShowSectionId - The HTML ID of the target section container to toggle.
 */
function showSection(ShowSectionId) {
    const Section = document.querySelector(`#${ShowSectionId}`);

    // Check if the section is currently expanded; if so, collapse it instead
    if (Section.style.display == 'block') {
        hideSection(ShowSectionId);
    } else {
        // Override the default CSS 'display: none' to reveal the section details
        Section.style.display = 'block';
    }
}

/**
 * Collapses a specific Scout section block by removing its inline display style,
 * reverting it back to its default hidden state defined in the stylesheet.
 *
 * @param {string} HideSectionId - The HTML ID of the target section container to hide.
 */
function hideSection(HideSectionId) {
    const Section = document.querySelector(`#${HideSectionId}`);

    // Strip the inline 'display: block' style so CSS reverts the element to 'display: none'
    Section.removeAttribute('style');
}