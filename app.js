const divs = document.querySelectorAll('.choice');

divs.forEach(div => {
    div.addEventListener('click', function() {
        window.location.href = 'ახალი_გვერდი.html'; // შეცვალე ახალი გვერდის მისამართით
    });
}); 
window.onscroll = function() {
    toggleHeaderSize();
};



<?php
function toggleHeaderSize() {
    const header = document.getElementById("header");

    if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
} 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "your-email@example.com"; // ჩაწერე შენი ელ. ფოსტა
    $subject = "კონტაქტის ფორმა - goOUT";
    $body = "მომხმარებელი: $name\n\nEmail: $email\n\nშეტყობინება:\n$message";

    if (mail($to, $subject, $body)) {
        echo "თქვენი შეტყობინება გაიგზავნა!";
    } else {
        echo "შეტყობინების გაგზავნა ვერ მოხერხდა.";
    }
}
?>