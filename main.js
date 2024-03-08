document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.process--number-black');
  elements.forEach(function (element) {
    element.addEventListener('click', function () {
      // Close all elements except the one that was clicked
      elements.forEach(function (otherElement) {
        if (otherElement !== element) {
          otherElement.classList.remove('process--number');
          otherElement.classList.add('process--number-black');
          var otherImgTag = otherElement.querySelector('img');
          otherImgTag.classList.remove("rotateImg");
          otherImgTag.classList.add("rotateBack");
          var otherParagraph = otherElement.parentElement.querySelector('.open-answer');
          otherParagraph.classList.remove('question--card-questions-open');
        }
      });

      // Toggle the class of the clicked element
      this.classList.toggle('process--number');
      this.classList.toggle('process--number-black');
      var imgTag = this.querySelector('img');
      imgTag.classList.toggle("rotateImg");
      imgTag.classList.toggle("rotateBack");
      var paragraph = this.parentElement.querySelector('.open-answer');
      paragraph.classList.toggle('question--card-questions-open');
    });
  });
});