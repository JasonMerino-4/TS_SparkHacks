document.addEventListener('DOMContentLoaded', function(){
    const category = document.getElementById("budget");
    const craving  = document.getElementById("craving");
    const distance = document.getElementById("distance_radius");
    const eat      = document.getElementById("eat_button");
    const matchingZone = document.querySelector(".matching_zone");
    const rejectButton = document.querySelector(".reject");

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
            image: "./joy_yee.jpeg",
            budget: "$$",
            number: "(312) 997-2128",
            craving: "Sit-Down",
            address: "1335 S Halsted St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/joy-yee-noodle-1335-s-halsted-st-chicago/29343",
            site: "https://joyyee.com/"
        },

        
        {
            name: "Busy Burger",
            image: "./busy_burger.jpg",
            budget: "$$",
            number: "(312) 226-7760",
            craving: "Burger",
            address: "1120 W Taylor St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/busy-burger-1120-w-taylor-st-chicago/2451283",
            site: "https://www.busyburger.com/"
        },

        {
            name: "Billy Goat Tavern",
            image: "./billy_goat.jpg",
            budget: "$$",
            number: "(312) 733-9132",
            craving: "Burger",
            address: "1535 W Madison St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/billy-goat-tavern-1535-w-madison-st-chicago/323027",
            site: "https://www.billygoattavern.com/?srsltid=AfmBOoqN_dsABx0FIBIiTS0Ez8OSuDH8NtljW47SJs3avoacHAKCAVWV"
        },

        {
            name: "Al's #1 Italian Beef",
            image: "./al's_beef.jpg",
            budget: "$$",
            number: "(312) 226-4017",
            craving: "Italian Beef",
            address: "1079 W Taylor St, Chicago, IL 60607",
            delivery: "https://www.grubhub.com/restaurant/the-original-als-beef---taylor-st-1079-w-taylor-st-chicago/334610?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AAiGsoaSc6_1baKQFcR7jfUDT2VGXbfKsmtW5t_RkEuaDzghHWLf59HRj_aXgQIxDpE501-pCNj86AP-7GJSTHDYEYtJ2kFpRw%3D%3D",
            site: "https://www.alsbeef.com/"
        },

        {
            name: "Thai Bowl",
            image: "./thai_bowl.jpg",
            budget: "$$",
            number: "(312) 226-9129",
            craving: "Thai",
            address: "1049 W Taylor St, Chicago, IL 60607",
            delivery: "N/A",
            site: "http://thaibowltaylor.com/"
        },

        {
            name: "Strings Ramen Shop",
            image: "./strings_ramen.jpg",
            budget: "$$$",
            number: "(312) 374-3450",
            craving: "Ramen",
            address: "2141 S Archer Ave, Chicago, IL 60616",
            delivery: "N/A",
            site: "https://www.stringsramen.com/"
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
        currentIndex = (currentIndex + 1) % businesses.length; // Loop through businesses
        updateBusinessProfile();
    });

    eat.addEventListener("click", function () {
        matchingZone.style.display = "flex"; // Show the matching zone
        matchingZone.scrollIntoView({ behavior: "smooth" });
    });
    
});
