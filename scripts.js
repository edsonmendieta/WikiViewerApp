

searchBar.addEventListener('click', openClose, false);

function openClose() {

    // declaring variables
    var smallLine = document.getElementById('handleLine');
    var searchBar = document.getElementById('searchBar');
    var topX = document.getElementById('topX');
    var bottomX = document.getElementById('bottomX');

    // conditional
    if(searchBar.getAttribute('class') == 'closed') {

        // links 'shrinkLine' keyframe to element
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

        // links 'topDash' keyframe to element
       topX.style.animationName = "topDash";

       // links 'bottomDash' keyframe to element
       bottomX.style.animationName = "bottomDash";

        // denotes that search-bar is open
        searchBar.setAttribute('class', 'open');

    }
}
