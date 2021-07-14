/*Name this external file gallery.js*/

function upDate(previewPic){
  var urlPrev = previewPic.getAttribute("src");
  var divElem = document.getElementById('image');
  divElem.style.backgroundImage = "url(" + urlPrev + ")";
  divElem.innerHTML = previewPic.getAttribute("alt");
	}

	function unDo(){
    var divElem = document.getElementById('image');
    divElem.style.backgroundImage = "url('')";
	   divElem.innerHTML ="Hover over an image below to display here.";
	}