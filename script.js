let interviewCountArray = [];
let rejectedCountArray = [];

const mainContainer = document.getElementById("mainContainer");

let totalJobCount = document.getElementById("totalJobCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const filterSection = document.getElementById("filterSection");

const allJobCard = document.getElementById("allJobCard");


function updateCounts() {
    let totalJobs = document.getElementById("cardHolder").children.length;
    totalJobCount.innerHTML = totalJobs;

    interviewCount.innerHTML = interviewCountArray.length;
    rejectedCount.innerHTML = rejectedCountArray.length;

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
        allJobCard.classList.remove("hidden");
        filterSection.classList.add("hidden");
        allJobCard.classList.add("visible");
    } else if (id === "interviewJobCardbtn") {
        interviewJobCardbtn.classList.add("btn-active");
        allJobCardbtn.classList.add("btn-primary");
        rejectedJobCardbtn.classList.add("btn-primary");
        allJobCard.classList.add("hidden");
        filterSection.classList.remove("hidden");
        filterSection.classList.add("visible");
        renderFilteredCards("interview");
    } else if (id === "rejectedJobCardbtn") {
        rejectedJobCardbtn.classList.add("btn-active");
        interviewJobCardbtn.classList.add("btn-primary");
        allJobCardbtn.classList.add("btn-primary");
        allJobCard.classList.add("hidden");
        filterSection.classList.remove("hidden");
        filterSection.classList.add("visible");
        renderFilteredCards("rejected");
    }
}


document.getElementById("mainContainer").addEventListener("click", function (event) {
    const parentNode = event.target.parentNode.parentNode;


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
});

function renderFilteredCards(filterType) {

    filterSection.innerHTML = "";

    if (filterType === 'interview') {
        interviewCountArray.forEach(card => {

            const div = document.createElement("div");
            div.classList.add("card", "bg-base-100", "shadow-sm");
            div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${card.cardTitle}</h2>
                <p class="job-details">${card.jobDetails}</p>
                <p class="job-requirement">${card.jobRequirement}</p>
                <p class="job-description">${card.jobDescription}</p>
                <div class="badge-status badge badge-primary badge-outline">${card.status}</div>
                <div class="card-actions mt-5">
                <button class="interviewBtnBadge badge badge-outline text-success">Interview</button>
                <button class="rejectedBtnBadge badge badge-outline text-error">Rejected</button>
              </div>
            </div>
        `;
            filterSection.appendChild(div);
        });
    } else if (filterType === 'rejected') {
        rejectedCountArray.forEach(card => {
            const div = document.createElement("div");
            div.classList.add("card", "bg-base-100", "shadow-sm");
            div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${card.cardTitle}</h2>
                <p class="job-details">${card.jobDetails}</p>
                <p class="job-requirement">${card.jobRequirement}</p>
                <p class="job-description">${card.jobDescription}</p>
                <div class="badge-status badge badge-primary badge-outline">${card.status}</div>
                                    <div class="card-actions mt-5">
                        <button class="interviewBtnBadge badge badge-outline text-success">Interview</button>
                        <button class="rejectedBtnBadge badge badge-outline text-error">Rejected</button>
                    </div>
            </div>
        `;
            filterSection.appendChild(div);
        });
    }
}
updateCounts();