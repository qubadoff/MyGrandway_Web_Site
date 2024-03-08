document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.process--number-black');
    elements.forEach(function (element) {
      element.addEventListener('click', function () {
        this.classList.toggle('process--number');
        this.classList.toggle('process--number-black');
        var imgTag = this.querySelector('img');
        imgTag.classList.toggle("rotateImg")
        imgTag.classList.toggle("rotateBack")
         var paragraph = this.parentElement.querySelector('.open-answer');
         paragraph.classList.toggle('question--card-questions-open');
      });
    });
  });