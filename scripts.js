// declaring global variables
var searchBar = document.getElementById('searchBar');
var smallLine = document.getElementById('handleLine');
var topX = document.getElementById('topX');
var bottomX = document.getElementById('bottomX');
var box = document.getElementById('box');

//window.addEventListener()

// event listener
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

    // 'x' - box no longer available for clicking until bar opens again
    document.getElementById('clickBox').setAttribute('id', 'box');

    // gives search-bar 'closed' class so openBar() executes again on cue
    searchBar.setAttribute('class', 'closed');


}

var userSearchMod;

window.addEventListener('keypress', searchWords, false);

function searchWords(e) {

    var titleDivs = document.getElementsByClassName('title');
    var introDivs = document.getElementsByClassName('intro');

    var userWords = document.getElementById('searchBar').value;
    var whitespace = /\s/g;

    if(e.code == 'Enter') {

        if((document.getElementById('searchBar').getAttribute('class')) == 'open') {

            // empty the divs if they are populated empty on user's search
            if(titleDivs[0].childNodes.length !== 0 && introDivs[0].childNodes.length !== 0) {

                for(i = 0; i < 10; i++) {

                    titleDivs[i].removeChild(titleDivs[i].childNodes[0]);

                    introDivs[i].removeChild(introDivs[i].childNodes[0]);
                }

            }

            userSearchMod = userWords.replace(whitespace, '+');

            document.getElementById('searchContainer').style.marginTop = "25px";

            wikiResults();

            if((document.getElementById('pageWrap').getAttribute('class')) == 'gone') {

                document.getElementById('pageWrap').setAttribute('class', 'visible');
            }

        }
    }

}

function wikiResults() {

    var xhr = new XMLHttpRequest();
    // wiki api COR's requires origin to be set as parameter in URL request
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cextracts&generator=search&utf8=1&formatversion=2&inprop=url&exsentences=1&exlimit=10&exintro=1&explaintext=1&exsectionformat=plain&gsrsearch='+ userSearchMod + '&origin=*');
    xhr.onreadystatechange = resultHandler;
    xhr.send();

    // empty's var for refilling w/ user's new search words
    userSearchMod = '';
}

function resultHandler() {

    // console.log(JSON.parse(this.response).query.pages[0]);

    if(this.readyState == 4 && this.status == 200) {


        for(z = 0; z < 10; z++) {

            for(i = 0; i < 3; i++) {

                var articleArray = JSON.parse(this.response).query.pages;


                if(i == 0) {

                    // nodeList of elements with this class name
                    var titleElements =document.getElementsByClassName('title');
                    // makes a text node of all article titles
                    var titleNode =document.createTextNode(articleArray[z].title);

                    // appends title to 'title' div ofcorresponding     index #
                    // 0 to 0, 5 to 5, etc.
                    titleElements[z].appendChild(titleNode);

                }

                else if(i == 1) {

                    // nodeList of elements with this class name
                    var introElements =document.getElementsByClassName('intro');
                    // makes a text node of all article introsentences
                    var introNode =document.createTextNode(articleArray[z].extract);

                    // appends intro to 'intro' div ofcorresponding     index #
                    // 0 to 0, 5 to 5, etc.
                    introElements[z].appendChild(introNode);
                }

                else if (i == 2) {

                    // nodeList of elements with this class name
                    var linkElements    =document.getElementsByClassName('link');

                    // sets element, w/class 'link', href   tocorrespoding link # from API response
                    linkElements[z].setAttribute('href', articleArray[z].fullurl);
                }
            } // end of 2nd for-loop
        } // end of 1st for-loop
    } // end of function


}
