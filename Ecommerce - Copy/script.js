function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}


//firebase
var firebaseConfig = {
  // Firebase Key
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var storage = firebase.storage();

var storageRef = storage.ref();

const clothesCollection = document.getElementById("clothes-collection")
function appendClothes(urlList) {
  if (!clothesCollection || !urlList) {
    return
  }
  var innerElements = ``
  for (let i = 0; i < urlList.length; i++) {
    const {url, name} = urlList[i];
    const name1=name.slice(0,-4)
    innerElements +=  `
    <a class="imgbox w3-half" >
      <img src="${url}" style="width:100%" >
      <div class="text">${name1}</div>
    </a>
    `
    
  }
  clothesCollection.innerHTML = innerElements
}