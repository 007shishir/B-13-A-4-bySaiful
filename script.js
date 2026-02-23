let interviewCountArray = [];
let rejectedCountArray = [];

let totalJobCount = document.getElementById("totalJobCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");


function updateCounts() {
    let totalJobs = document.getElementById("allJobCard").children.length;
    totalJobCount.innerHTML = totalJobs;
    console.log(totalJobs);

}

updateCounts();



// Toggle three button filter
let allJobCardbtn = document.getElementById("allJobCardbtn");
let interviewJobCardbtn = document.getElementById("interviewJobCardbtn");
let rejectedJobCardbtn = document.getElementById("rejectedJobCardbtn");

function toggleJobCards(id) {
    allJobCardbtn.classList.remove("btn-primary");
    interviewJobCardbtn.classList.remove("btn-primary");
    rejectedJobCardbtn.classList.remove("btn-primary");

    if (id === "allJobCardbtn") {
        allJobCardbtn.classList.add("btn-active");
        interviewJobCardbtn.classList.add("btn-primary");
        rejectedJobCardbtn.classList.add("btn-primary");
    } else if (id === "interviewJobCardbtn") {
        interviewJobCardbtn.classList.add("btn-active");
        allJobCardbtn.classList.add("btn-primary");
        rejectedJobCardbtn.classList.add("btn-primary");
    } else if (id === "rejectedJobCardbtn") {
        rejectedJobCardbtn.classList.add("btn-active");
        interviewJobCardbtn.classList.add("btn-primary");
        allJobCardbtn.classList.add("btn-primary");
    }
}