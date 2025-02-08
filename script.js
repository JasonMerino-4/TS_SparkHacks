document.addEventListener('DOMContentLoaded', function(){
    const budget = document.getElementById("budget");
    const craving  = document.getElementById("craving");
    const distance = document.getElementById("distance_radius");
    const eat      = document.getElementById("eat_button");
    const matchingZone = document.querySelector(".matching_zone");
    const profile = document.querySelector(".business_profile_container");
    const rejectButton = document.querySelector(".reject");
    const acceptButton = document.querySelector(".accept");

    const businesses = [
        {
            name: "Gathers Tea Bar",
            image: "./gathers.jpg",
            budget: "$$",
            number: "N/A",
            craving: "Boba",
            address: "1214 W Taylor St, Chicago, IL 60607",
            delivery: "https://www.ubereats.com/store/gathers-tea-bar/YH8JIsHEVmqXxqsfJjdNBw?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas",
            site: "https://www.gathersteabar.com/",
            score: 0
            
        },

        {
            name: "Joy Yee",
            image: "./joy_yee.jpg",
            budget: "$$",
            number: "(312) 997-2128",
            craving: "Sit-Down",
            address: "1335 S Halsted St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/joy-yee-noodle-1335-s-halsted-st-chicago/29343",
            site: "https://joyyee.com/",
            score: 0
            
        },

        
        {
            name: "Busy Burger",
            image: "./joy_yee.jpg",
            budget: "$$",
            number: "(312) 226-7760",
            craving: "Burger",
            address: "1120 W Taylor St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/busy-burger-1120-w-taylor-st-chicago/2451283",
            site: "https://www.busyburger.com/",
            score: 0
        
        },

        {
            name: "Billy Goat Tavern",
            image: "./joy_yee.jpg",
            budget: "$$",
            number: "(312) 733-9132",
            craving: "Burger",
            address: "1535 W Madison St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/billy-goat-tavern-1535-w-madison-st-chicago/323027",
            site: "https://www.billygoattavern.com/?srsltid=AfmBOoqN_dsABx0FIBIiTS0Ez8OSuDH8NtljW47SJs3avoacHAKCAVWV",
            score: 0
            
        },

        {
            name: "Al's #1 Italian Beef",
            image: "./joy_yee.jpg",
            budget: "$$",
            number: "(312) 226-4017",
            craving: "Italian Beef",
            address: "1079 W Taylor St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/the-original-als-beef---taylor-st-1079-w-taylor-st-chicago/334610?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AAiGsoaSc6_1baKQFcR7jfUDT2VGXbfKsmtW5t_RkEuaDzghHWLf59HRj_aXgQIxDpE501-pCNj86AP-7GJSTHDYEYtJ2kFpRw%3D%3D",
            site: "https://www.alsbeef.com/",
            score: 0
        },

        {
            name: "Thai Bowl",
            image: "./joy_yee.jpg",
            budget: "$$",
            number: "(312) 226-9129",
            craving: "Thai",
            address: "1049 W Taylor St, Chicago, IL 60607",
            delivery: "N/A",
            site: "http://thaibowltaylor.com/",
            score: 0
        },

        {
            name: "Strings Ramen Shop",
            image: "./joy_yee.jpg",
            budget: "$$$",
            number: "(312) 374-3450",
            craving: "Ramen",
            address: "2141 S Archer Ave, Chicago, IL 60616",
            delivery: "N/A",
            site: "https://www.stringsramen.com/",
            score: 0
        }


    ]

    // Show the Matching Zone when "EAT!" button is pressed
    eat.addEventListener("click", function () {
        matchingZone.style.display = "flex"; // Show the matching zone
        matchingZone.scrollIntoView({ behavior: "smooth" });
        updateBusinessProfile(); // Load first business
    });

    

    // Modifies each business's score according to the user's preferences 
    function calculateScore() {       
        for (let i = 0; i < businesses.length(); i ++) {
            
            // Check if the business matches the user's craving
            if (businesses[i].craving == craving) {
                businesses[i].score += 2;
            }
            else {
                businesses[i].score += 1;
            }

            // Check if the business price level falls under or equal the budget
            if (businesses[i].budget == budget.length() || businesses[i].budget == budget.length()) {
                businesses[i].score += 2;
            }
            else {
                businesses[i].score += 1;
            }     
        }
    }

    // Builds the list of indexes in order of descending score
    function buildMaxIndexes() {
        const maxIndices = [...businesses.keys()];
        maxIndices.sort((a,b) => businesses[b].score - businesses[a].score);
    }

    // Function to update the business profile
    function updateBusinessProfile() {
        const business = businesses[maxIndices[currentIndex]];

        document.querySelector(".business_name").innerHTML = `<u>${business.name}</u>`;
        document.querySelector(".business_pictures").src = business.image;
        
        // Update the business criteria details
        const profileFields = document.querySelectorAll(".business_criteria .profile_field");
        profileFields[0].textContent = `Budget: ${business.budget}`;
        profileFields[1].textContent = `Number: ${business.number}`;
        profileFields[2].textContent = `Craving: ${business.craving}`;

        // Update navigation details
        const navigationFields = document.querySelectorAll(".business_navigation .profile_field");
        navigationFields[0].textContent = business.address;
        navigationFields[1].innerHTML = `<a href="${business.delivery}" target="_blank">Delivery</a>`;
        navigationFields[2].innerHTML = `<a href="${business.site}" target="_blank">Website</a>`;
    }
    
    let currentIndex = maxIndices[0]; // Track which business is being shown

    // When the checkmark (V) button is pressed, load the next business
    rejectButton.addEventListener("click", function () {
        profile.classList.remove("reject_transition")
        profile.classList.remove("accept_transition")
        profile.offsetWidth;
        currentIndex = (currentIndex + 1) % businesses.length; // Loop through businesses
        updateBusinessProfile();
        profile.classList.add("reject_transition")
        console.log(profile.classList);
    });

    acceptButton.addEventListener("click", function () {
        profile.classList.remove("accept_transition")
        profile.classList.remove("reject_transition")
        profile.offsetWidth;
        profile.classList.add("accept_transition")
    });

    eat.addEventListener("click", function () {
        matchingZone.style.display = "flex"; // Show the matching zone
        profile.scrollIntoView({ behavior: "smooth" });
    });
    
});
