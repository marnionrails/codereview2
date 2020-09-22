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

    if (answer1 === "1" && (answer2 === "1" || answer3 === "1" || answer4 === "1" ||
         answer5 === "1" || answer6 === "1" || answer7 === "1" || answer8 === "1" ||
         answer9 === "1"
  });
});