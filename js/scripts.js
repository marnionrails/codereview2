$document.ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();

    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
    const answer5 = $("input:radio[name=question5]:checked").val();
    const answer6 = $("input:radio[name=question6]:checked").val();
    const answer7 = $("input:radio[name=question7]:checked").val();
    const answer8 = $("input:radio[name=question8]:checked").val();
    const answer9 = $("input:radio[name=question9]:checked").val();
    const answer10 =$("input:radio[name=question10]:checked").val();

    let total = answer1 + answer2 + answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9 + answer10;

    if (total <= 14) {
      $("#Python").show();
      $("#JavaScript, #C-Sharp, #Swift").hide();
    }
    else if (total <= 23) {
      $("#JavaScript").show();
      $("#Python, #C-Sharp, #Swift").hide();
    }
    else if (total <= 31) {
      $("#C-Sharp").show();
      $("#JavaScript, #Python, #Swift").hide();
    }
    else {
      $("#Swift").show();
      $("#JavaScript, #Python, #C-Sharp");
    }
  });
});