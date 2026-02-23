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