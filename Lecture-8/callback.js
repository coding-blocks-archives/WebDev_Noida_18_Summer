/**
 * Created by aayusharora on 6/28/18.
 */
function readFile(wr) {
   let path = "xyz";
   console.log("Reading Started");
   setTimeout(function(){
       wr(function(newPath){
           console.log("writing is done");
           console.log(newPath + path);
       });
   }, 0);

   console.log("Reading Ended")
}

readFile(function(data)
        {
            data('www');
        }
);




