// let arr=["HTML","CSS","JS","REACT","NODEJS"];
// let ol=document.createElement("ol");

// arr.map((e)=>{
//     console.log(e);
    
//     let li=document.createElement("li");
//     li.innerText=e;
//     ol.append(li);
// });


const indianCricketTeam = [
    {
        name: "Rohit Sharma",
        role: "Batsman",
        jerseyNumber: 45,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/rohit-sharma-131403815-1x1_0.jpg?VersionId=HqiqXF3v93KyhiUD4JWFfFsmqvBLhSo8"
    },
    {
        name: "Virat Kohli",
        role: "Batsman",
        jerseyNumber: 18,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium",
        image:"https://c.ndtvimg.com/2025-05/lrqqt5ng_virat-kohli-announces-retirement-from-test-cricket_625x300_12_May_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"
    },
    {
        name: "Jasprit Bumrah",
        role: "Bowler",
        jerseyNumber: 93,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm fast",
        image: "https://c.ndtvimg.com/2024-06/dlsrhcqo_jasprit-bumrah-afp_625x300_21_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
    },
    {
        name: "Ravindra Jadeja",
        role: "All-rounder",
        jerseyNumber: 8,
        battingStyle: "Left-hand bat",
        bowlingStyle: "Left-arm orthodox spin",
        image: "https://thefederal.com/h-upload/2024/01/28/428348-ravindra-jadeja-india-vs-england.webp"
    },
    {
        name: "KL Rahul",
        role: "Wicketkeeper Batsman",
        jerseyNumber: 1,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium",
        image: "https://goyahills.com/wp-content/uploads/2025/03/KL-Rahul.jpg"
    },
    {
        name: "Shubman Gill",
        role: "Batsman",
        jerseyNumber: 77,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://c.files.bbci.co.uk/a0bd/live/0f5d28a0-49e4-11f0-bbaa-4bc03e0665b7.jpg"
    },
    {
        name: "Hardik Pandya",
        role: "All-rounder",
        jerseyNumber: 33,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium-fast",
        image: "https://via.placeholder.com/150?text=Hardik+Pandya"
    },
    {
        name: "Mohammed Siraj",
        role: "Bowler",
        jerseyNumber: 73,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm fast",
        image: "https://via.placeholder.com/150?text=Mohammed+Siraj"
    },
    {
        name: "Suryakumar Yadav",
        role: "Batsman",
        jerseyNumber: 63,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Suryakumar+Yadav"
    },
    {
        name: "Rishabh Pant",
        role: "Wicketkeeper Batsman",
        jerseyNumber: 17,
        battingStyle: "Left-hand bat",
        bowlingStyle: "Right-arm medium",
        image: "https://via.placeholder.com/150?text=Rishabh+Pant"
    },
    {
        name: "Axar Patel",
        role: "All-rounder",
        jerseyNumber: 50,
        battingStyle: "Left-hand bat",
        bowlingStyle: "Left-arm orthodox spin",
        image: "https://via.placeholder.com/150?text=Axar+Patel"
    },
    {
        name: "Yuzvendra Chahal",
        role: "Bowler",
        jerseyNumber: 3,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm legbreak",
        image: "https://via.placeholder.com/150?text=Yuzvendra+Chahal"
    },
    {
        name: "Bhuvneshwar Kumar",
        role: "Bowler",
        jerseyNumber: 15,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium-fast",
        image: "https://via.placeholder.com/150?text=Bhuvneshwar+Kumar"
    },
    {
        name: "Shreyas Iyer",
        role: "Batsman",
        jerseyNumber: 41,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Shreyas+Iyer"
    },
    {
        name: "Deepak Hooda",
        role: "All-rounder",
        jerseyNumber: 20,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Deepak+Hooda"
    }
];

let main=document.querySelector("main");

indianCricketTeam.map((player)=>{
 

let div=document.createElement("div");
div.classList.add("card")



div.innerHTML=`<h2>${player.name}</h2><h2>${player.role}</h2><h2>${player.jerseyNumber}</h2><h2>${player.battingStyle}</h2><h2>${player.bowlingStyle}</h2><img src="${player.image}" alt="${player.name}">`
main.append(div);


})