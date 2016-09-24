

searchBar.addEventListener('click', openClose, false);

function openClose() {

    // declaring variables
    var smallLine = document.getElementById('line');
    var searchBar = document.getElementById('searchBar');

    // conditional
    if(searchBar.getAttribute('class') == 'closed') {

        smallLine.style.animationName = "shrinkLine";

        // links 'expand' keyframe to element
        searchBar.style.animationName = "expand";

        // Keeps circle from expanding early due to added padding.
        setTimeout(textPadding, 300);

        function textPadding() {

            // adds space b/w border and start of text
            searchBar.style.paddingLeft = "15px";

            // reverts cursor style back to text version
            searchBar.style.cursor = "text";
        }

        // denotes that search-bar is open
        searchBar.setAttribute('class', 'open');

    }
}
