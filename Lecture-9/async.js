/**
 * Created by aayusharora on 7/2/18.
 */
// setTimeout(function(){
//
//     function getData(done) {
//       console.log('get the data');
//       let x = "get data";
//       console.log(done(x));
//
//     }
//
//     getData(setData);
//
// },0);
//
//
// function setData(y) {
//     return "Hello" + y;
// }
//


function imageProcessing() {

    imageDetection(function(img, enhancement){
        console.log('Image Cleaning Started');
        console.log("Image Detected " + img);
        enhancement(img + " enhanced");
    });

    console.log("Image Processing ended")
}


function imageDetection(imgCleaning) {

   setTimeout(function(){
       console.log("Image Detection Started");
       let detected_image = 'Image1';
       imgCleaning(detected_image, function(enhanced_image){
           console.log("Enhancing Image");
           setTimeout(function(){
              console.log("Algorithm for Enhanced Image " + enhanced_image);

           },0);
           console.log("Enhanced Image Processing still going on ..")
       });
       // Image Detection

   }, 0);

}
imageProcessing();