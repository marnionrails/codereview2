$document.ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();

    let answer1 = $("input:radio[name=question1]:checked").val();
    let answer2 = $("input:radio[name=question2]:checked").val();
    let answer3 = $("input:radio[name=question3]:checked").val();
    let answer4 = $("input:radio[name=question4]:checked").val();
    let answer5 = $("input:radio[name=question5]:checked").val();
    let answer6 = $("input:radio[name=question6]:checked").val();
    let answer7 = $("input:radio[name=question7]:checked").val();
    let answer8 = $("input:radio[name=question8]:checked").val();
    let answer9 = $("input:radio[name=question9]:checked").val();
    let answer10 =$("input:radio[name=question10]:checked").val();

    let total = parseInt(answer1) + parseInt(answer2) + parseInt(answer3) + parseInt(answer4) + parseInt(answer5) + parseInt(answer6) + parseInt(answer7) + parseInt(answer8) + parseInt(answer9) + parseInt(answer10);

    if (total <= 14) {
      $("#Python").show();
      $("#JavaScript, #C-Sharp, #Swift").hide();
      $("#Python").show();
    }
    else if (total <= 23) {
      $("#JavaScript").show();
      $("#Python, #C-Sharp, #Swift").hide();
      $("#JavaScript").show();
    }
    else if (total <= 31) {
      $("#C-Sharp").show();
      $("#JavaScript, #Python, #Swift").hide();
      $("#C-Sharp").show();
    }
    else {
      $("#Swift").show();
      $("#JavaScript, #Python, #C-Sharp");
      $("#Swift").show();
    }
  });
});