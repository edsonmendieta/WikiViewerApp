// declaring global variables
var searchBar = document.getElementById('searchBar');
var smallLine = document.getElementById('handleLine');
var topX = document.getElementById('topX');
var bottomX = document.getElementById('bottomX');
var clickBox = document.getElementById('box');

// event listeners
searchBar.addEventListener('click', openBar, false);


// global functions
function openBar() {

    // conditional
    if(searchBar.getAttribute('class') == 'closed') {

        // links 'shrinkLine' keyframe to element
        smallLine.style.animationName = "shrinkLine";

        // links 'expand' keyframe to element
        searchBar.style.animationName = "expand";

        // Keeps circle from expanding early due to added padding.
        setTimeout(textPadding, 300);

        function textPadding() {

            // adds space b/w border and start/end of text
            searchBar.style.paddingLeft = "15px";
            searchBar.style.paddingRight = "25px";

            // reverts cursor style back to text version
            searchBar.style.cursor = "text";
        }

        // links 'topDash' keyframe to element
       topX.style.animationName = "topDash";

       // links 'bottomDash' keyframe to element
       bottomX.style.animationName = "bottomDash";

        // denotes that search-bar is open
        searchBar.setAttribute('class', 'open');

        setTimeout(addClickBox, 900);

        function addClickBox() {

            // gives element styling: positions directly on top of "x"
            clickBox.setAttribute('id', 'clickBox');
        }

    }

}

//function
