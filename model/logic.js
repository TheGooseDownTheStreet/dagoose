//da goose :)

// welcome alert
alert(`Welcome to duck gaem, make sure the boi gets his tea on time`);

// alert to indicate game timeout - 10*1000 ms = 10 sec
const t = setTimeout(function () {alert(`The boi is in need of a tea and you didn't get him one |Bad Ending|`)},30*1000);

// an array to hold the history of the images that we clicked
let click_hist = [];

// the main logic that's called when an image is clicked
// the function takes the "id" of the image that was clicked
function imageClick (id) {
    // add the image ID to the history of clicked images
    click_hist.push(id);
    // if the "black tea" image was clicked AND the previous image clicked was "milk"
    if(id == `b_tea` && click_hist.length > 0 && click_hist[click_hist.length - 2] == `milk`) {
        // bring the whiite tea image to the foreground over the black tea image
        page_div2.style.zIndex = 1;
        page_div3.style.zIndex = 2;

    } else if(id == `w_tea` && page_div2.style.zIndex == 1) {
        clearTimeout(t);
        alert(`why did you steal his milk tea |Theft Ending|`); 
    } else if (id == `mono` &&  page_div3.style.zIndex != 2 && click_hist.length > 1) {
        console.log(click_hist.join(`,`));
        clearTimeout(t);
        alert(`you did what you where asked |Ok Ending|`);

    } else if (id == `mono` && click_hist.length > 0 && click_hist[click_hist.length - 2] == `milk`) {
        clearTimeout(t);
        alert(`the boi has found he likes te drink you gave him |True Ending|`);

    // else if the duck is clicked AND the white tea image is on 
    // top of the black team image  
    } else if (id == `mono` && page_div2.style.zIndex == 1) {
        // cancel the bad ending timeout
        clearTimeout(t);
        alert(`the boi is happy |Good Ending|`);
    }else if(id == `mono`) {
        clearTimeout(t);
        alert(`you hit him, he's calling the cops |Asault Ending|`);
    }
    // a list of all the possible images
    const img_id = [`b_tea`,`w_tea`,`mono`,`milk`];
    // go through the list of all possible images, one at a time, and
    // unset any border that may be set
    for (let i = 0; i < img_id.length; i++){
        document.getElementById(img_id[i]).style.border = 0;
    }
    // set the border of the clicked image to "2 pixel solid red"
    document.getElementById(id).style.border = "2px solid red";
} // end function
//
// begin main
//
// create a new image, point it to the tea-1.jfif file and set the "id"
// to "b_tea" for "black tea"
let image1 = document.createElement("img");
image1.setAttribute("src", "./assets/img/tea-1.jfif");
image1.setAttribute("onclick", "imageClick(this.id)");
image1.setAttribute("id", "b_tea");

// create a new image, point it to the tea-3.jpg file and set the "id"
// to "w_tea" for "white tea"
let image2 = document.createElement("img");
image2.setAttribute("src", "./assets/img/tea-3.jpg");
image2.setAttribute("onclick", "imageClick(this.id)");
image2.setAttribute("id", "w_tea");

// create a new image, point it to the monocle-top-hat-duck.png file 
// and set the "id" to "mono" for "monacle duck"
let image3 = document.createElement("img");
image3.setAttribute("src", "./assets/img/monocle-top-hat-duck.png");
image3.setAttribute("onclick", "imageClick(this.id)");
image3.setAttribute("id", "mono");

// create a new image, point it to the milk.jpg file and set the "id"
// to "milk" for "milk"
let image4 = document.createElement("img");
image4.setAttribute("src", "./assets/img/milk.jpg");
image4.setAttribute("onclick", "imageClick(this.id)");
image4.setAttribute("id", "milk");

// a container div for our other divs
let page_div1 = document.createElement(`div`);
page_div1.setAttribute(`class`, `main`);
page_div1.setAttribute(`id`, `div1`);

// a div to hold the one of the two tea images 
let page_div2 = document.createElement(`div`);
page_div2.setAttribute(`class`, `tea1`);
page_div2.setAttribute(`id`, `div2`);

// a div to hold the other team image
let page_div3 = document.createElement(`div`);
page_div3.setAttribute(`class`, `tea2`);
page_div3.setAttribute(`id`, `div3`);

// a div to hold the duck image
let page_div4 = document.createElement(`div`);
page_div4.setAttribute(`class`, `mm`);
page_div4.setAttribute(`id`, `div4`);

// a div to hold the milk image
let page_div5 = document.createElement(`div`);
page_div5.setAttribute(`class`, `milk`);
page_div5.setAttribute(`id`, `div5`);

// add all of the images to their respective image divs
// add all of the image divs to the containter div
page_div2.appendChild (image1);
page_div3.appendChild (image2);
page_div4.appendChild (image3);
page_div5.appendChild (image4);
page_div1.appendChild (page_div3);
page_div1.appendChild (page_div2);
page_div1.appendChild (page_div4);
page_div1.appendChild (page_div5);

// add the container div to the main document "ie the web page itesef"
document.body.appendChild(page_div1);

