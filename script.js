document.addEventListener('DOMContentLoaded', function(){
    const category = document.getElementById("budget");
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
            site: "https://www.gathersteabar.com/"
        },

        {
            name: "Joy Yee",
            image: "./joy_yee.jpg",
            budget: "$$",
            number: "(312) 997-2128",
            craving: "Sit-Down",
            address: "1335 S Halsted St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/joy-yee-noodle-1335-s-halsted-st-chicago/29343",
            site: "https://joyyee.com/"
        },
        {
            name: "Busy Burger",
            image: "./joy_yee.jpg",
            budget: "$$",
            number: "(312) 997-2128",
            craving: "Burger",
            address: "1335 S Halsted St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/joy-yee-noodle-1335-s-halsted-st-chicago/29343",
            site: "https://joyyee.com/"
        }


    ]
    
    let currentIndex = 0; // Track which business is being shown

    // Show the Matching Zone when "EAT!" button is pressed
    eat.addEventListener("click", function () {
        matchingZone.style.display = "flex"; // Show the matching zone
        matchingZone.scrollIntoView({ behavior: "smooth" });
        updateBusinessProfile(); // Load first business
    });

    // Function to update the business profile
    function updateBusinessProfile() {
        const business = businesses[currentIndex];

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
