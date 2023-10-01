var images = ['images/anmk/1.jpg','images/anmk/2.jpeg','images/anmk/3.jpg','images/anmk/4.jpg','images/anmk/5.jpg','images/anmk/6.jpg'
,'images/anmk/7.jpg','images/anmk/8.jpg','images/anmk/9.jpg','images/anmk/10.jpg','images/anmk/11.jpg','images/anmk/12.jpg'
,'images/anmk/13.jpg','images/anmk/14.jpg','images/anmk/15.jpg','images/anmk/16.jpg','images/anmk/17.jpg'
];

var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];



    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 2000);

}

window.onload = slideShow;