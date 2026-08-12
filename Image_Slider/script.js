let images=[
    "https://picsum.photos/id/1015/700/400",
    "https://picsum.photos/id/1016/700/400",
    "https://picsum.photos/id/1018/700/400",
    "https://picsum.photos/id/1025/700/400"
];

let index=0;

function showImage(){
    document.getElementById("image").src=images[index];
}

function next(){
    index++;

    if(index===images.length){
        index=0;
    }

    showImage();
}

function previous(){
    index--;

    if(index<0){
        index=images.length-1;
    }

    showImage();
}

setInterval(next,3000);