canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg" , "nasa_image_2.jpeg" , "nasa_image_3.jpg" , "nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

backround_image = nasa_mars_images_array[random_number];
console.log("backround_image = " + backround_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    backround_imgTag = new Image(); 
    backround_imgTag.onload = uploadBackround;
    backround_imgTag.src = backround_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackround() {
    ctx.drawImage(backround_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}

