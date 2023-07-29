var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    
var container = document.getElementById("photopics");

// Loop 20 times
for (var i = 1; i < 202; i++) {
  // Create a new image element
  var image = document.createElement("img");
  
  // Set the image source and alt text
  image.src = "./resources/img/RaelNeri/img" + " (" + i + ")" + ".jpg";
  image.alt = "Card image";
  image.className= "rounded";
  // Create the necessary HTML structure
  var colDiv = document.createElement("div");
  colDiv.className = "col-md-3 pt-2";
  
  var cardDiv = document.createElement("div");
  cardDiv.className = "card text-center bg-transparent shadow-lg border-0 rounded";
  cardDiv.style.color = "#C3C0C0";
  
  // Append the image to the card div
  cardDiv.appendChild(image);
  
  // Append the card div to the column div
  colDiv.appendChild(cardDiv);
  
  // Append the column div to the container
  container.appendChild(colDiv);
}




// Show or hide the "Back to Top" button based on the scroll position
window.addEventListener("scroll", function() {
  var backToTopButton = document.getElementById("back-to-top");
  if (window.scrollY > 500) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to top when the "Back to Top" button is clicked
var backToTopButton = document.getElementById("back-to-top");
backToTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
