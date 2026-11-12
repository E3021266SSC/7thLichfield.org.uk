function showSection(ShowSectionId) { // Function to show the sidebar and disable scrolling on the body.
    const Section = document.querySelector(`#${ShowSectionId}`);
    if (Section.style.display == 'block') {
        hideSection(ShowSectionId);
    }
    else {
        Section.style.display = 'block';
    }
    
}

function hideSection(HideSectionId) { // Function to hide the sidebar and enable scrolling on the body.
    const Section = document.querySelector(`#${HideSectionId}`);
    Section.removeAttribute('style');
}