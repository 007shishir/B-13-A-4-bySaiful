let interviewCountArray = [];
let rejectedCountArray = [];

let totalJobCount = document.getElementById("totalJobCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");


function updateCounts() {
    let totalJobs = document.getElementById("allJobCard").children.length;
    totalJobCount.innerHTML = totalJobs;

    interviewCount.innerHTML = interviewCountArray.length;
    rejectedCount.innerHTML = rejectedCountArray.length;
    console.log(interviewCountArray.length);

}





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


document.getElementById("allJobCard").addEventListener("click", function (event) {
    const parentNode = event.target.parentNode.parentNode;

    console.log(parentNode);

    if (event.target.classList.contains("interviewBtnBadge")) {

        const cardTitle = parentNode.querySelector(".card-title").innerText;
        const jobDetails = parentNode.querySelector(".job-details").innerText;
        const jobRequirement = parentNode.querySelector(".job-requirement").innerText;
        const jobDescription = parentNode.querySelector(".job-description").innerText;
        let status = parentNode.querySelector(".badge-status").innerText;
        
        status = "INTERVIEW";
        parentNode.querySelector(".badge-status").innerText = status;
        
        const filteredCard = {
            cardTitle,
            jobDetails,
            jobRequirement,
            jobDescription,
            status
        };

        // Check if the title already exists in the array
        const isDuplicate = interviewCountArray.some(item => item.cardTitle === filteredCard.cardTitle);

        if (isDuplicate) {
            console.log("Card already exists in the array.");
        } else if (rejectedCountArray.some(item => item.cardTitle === filteredCard.cardTitle)) {
            rejectedCountArray.pop(filteredCard);
            interviewCountArray.push(filteredCard);
            updateCounts();
        }

        else {
            interviewCountArray.push(filteredCard);
            updateCounts();
        }

    }
    else if (event.target.classList.contains("rejectedBtnBadge")) {

        const cardTitle = parentNode.querySelector(".card-title").innerText;
        const jobDetails = parentNode.querySelector(".job-details").innerText;
        const jobRequirement = parentNode.querySelector(".job-requirement").innerText;
        const jobDescription = parentNode.querySelector(".job-description").innerText;
        let status = parentNode.querySelector(".badge-status").innerText;

        status = "REJECTED";
        parentNode.querySelector(".badge-status").innerText = status;
        const filteredCard = {
            cardTitle,
            jobDetails,
            jobRequirement,
            jobDescription,
            status
        };

        // Check if the title already exists in the array
        const isDuplicate = rejectedCountArray.some(item => item.cardTitle === filteredCard.cardTitle);

        if (isDuplicate) {
            console.log("Card already exists in the array.");
        } else if (interviewCountArray.some(item => item.cardTitle === filteredCard.cardTitle)) {
            interviewCountArray.pop(filteredCard);
            rejectedCountArray.push(filteredCard);
            updateCounts();
        } else {
            rejectedCountArray.push(filteredCard);
            updateCounts();
        }
    }


    // if (parentNode.classList.contains("interviewBtnBadge")) {
    //     const div = document.createElement("div");
    //     div.classList.add("card-holder", "space-y-5");
    //     div.innerHTML = `
    //     `;
    //     document.querySelector(".filterSection").appendChild(div);          
    // } else if (parentNode.classList.contains("not-applied")) {

    // }
});

function renderFilteredCards() {

}

updateCounts();