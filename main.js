function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.center();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
   }

   function modelLoaded()
   {
     console.log("Posenet Initialized");
   }
   
   function draw()
   {
       background("white");
       image(video,0,0,550,500);
   }

    function gotposes(result)
    {
        console.log(result);
    }