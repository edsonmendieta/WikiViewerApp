// declaring global variables
var searchBar = document.getElementById('searchBar');
var smallLine = document.getElementById('handleLine');
var topX = document.getElementById('topX');
var bottomX = document.getElementById('bottomX');
var box = document.getElementById('box');


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

            // bar is given new width to match keyframe final width
            searchBar.style.width = "200px";
            // animation keyframe de-linked from element
            // allows for width manipulation through style property
            searchBar.style.animationName = "";

            // handle line given new width to match keyframe final width
            smallLine.style.width = "0";
            // animation keyframe de-linked from element
            // allows for width manipulation through style property
            smallLine.style.animationName = "";

            // top x-line given new property values to match keyframe //final property values
            topX.style.width = "10px";
            topX.style.left = "-25px";
            topX.style.top = "20px";
            // animation keyframe de-linked from element
            // allows for property value manipulation through style //property
            topX.style.animationName = "";

            // bottom x-line given new property values to match keyframe //final property values
            bottomX.style.width = "10px";
            bottomX.style.left = "-35px";
            bottomX.style.top = "20px";
            // animation keyframe de-linked from element
            // allows for property value manipulation through style //property
            bottomX.style.animationName = "";

            // gives element styling: positions directly on top of "x"
            box.setAttribute('id', 'clickBox');

            // can do this now since id was just added to element
            var clickBox = document.getElementById('clickBox');

            // now the event listener is attached to that element
            clickBox.addEventListener('click', closeBar, false);
        }

    }

}

// executes when "x"-mark in search-bar is clicked
function closeBar() {

    // slides out/hides top x-line
    topX.style.width = "0";
    topX.style.left = "-15px";
    topX.style.top = "10px";

    //slides out/hides bottom x-line
    bottomX.style.width = "0";
    bottomX.style.left = "-25px";
    bottomX.style.top = "30px";

    // clears text
    searchBar.value = "";
    // gets rid of left & right padding inside search-bar
    searchBar.style.padding = "0";
    // sets search-bar to original size
    searchBar.style.width = "30px";
    // reverts cursor style back to pointer version
    searchBar.style.cursor = "pointer";

    // sets handle line to original width & thus visible again
    smallLine.style.width = "20px";

    

    // gives search-bar 'closed' class so openBar() executes again on cue
    searchBar.setAttribute('class', 'closed');


}
