let slides = document.querySelectorAll(".patientreview");
let count = 0;

// set left position for each slide
slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

function myfun() {
    slides.forEach(function(curVal) {
        curVal.style.transform = `translateX(-${count * 100}%)`;
    });
}

// Auto-slide every 2 seconds
setInterval(function() {
    count++;
    if (count === slides.length) {
        count = 0;
    }
    myfun();
}, 2000);
let cards = document.querySelectorAll(".card");
let detailBox = document.getElementById("detailBox");
let contentBox = document.querySelector(".content");
let closeBtn  = document.getElementById("closebtn");

cards.forEach(function(card) {
  card.addEventListener("click", function() {
    // Get card data
    let imgSrc = card.querySelector("img").src;
    let name = card.querySelector("b").innerText;
    let desc = card.querySelectorAll("p")[1].innerText;

    // Set popup content
    contentBox.innerHTML = `
      <img src="${imgSrc}" alt="">
      <div class="contenttext">
        <h1>${name}</h1>
        <p>${desc}</p>
      </div>` ;

    // Show popup
    detailBox.style.display = "block";
  });
});

// Close button event
closeBtn.addEventListener("click", function() {
  detailBox.style.display = "none";
});

            function handleSubmit(event)
            {
                event.preventDefault();
                alert("We will reach you soon!");
                event.target.reset();
            }
// Connect button functionality
let connectBtn = document.getElementById("connectBtn");
let emailInput = document.getElementById("email");
let passInput = document.getElementById("pass");

connectBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let email = emailInput.value.trim();
    let pass = passInput.value.trim();

    if(email === "" || pass === "") {
        alert("Please fill in both email and password.");
        return;
    }

    // You can replace this with actual form submission logic
    alert(`Thank you! We will contact you at ${email}`);
    
    // Reset the form
    emailInput.value = "";
    passInput.value = "";
});
