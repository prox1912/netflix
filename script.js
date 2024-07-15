document.getElementById('faq1').addEventListener('click', function() {
    var content = document.getElementById('faq-content1');
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
  