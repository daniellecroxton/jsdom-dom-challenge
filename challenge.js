document.addEventListener("DOMContentLoaded", () => {

  /////     COUNTER     /////

  function counter() {

    var element = document.getElementById("counter");
    var numericalElement = parseInt(element.innerText);


    /////     TIMER INCREASES EVERY SECOND     /////

      var timer = setInterval(counting, 1000);

      function counting() {
        element.innerText = parseInt(element.innerText) + 1;
      }


    /////     USER CAN INCREASE OR DECREASE TIMER    /////

      var minus = document.getElementById("minus");

      var plus = document.getElementById("plus");

      function deincrementing() {
        element.innerText = parseInt(element.innerText) - 1;
      }

       minus.addEventListener("click", deincrementing);

       plus.addEventListener("click", counting);


    /////     USER CAN LIKE A NUMBER    /////

    var like = document.getElementById("heart");
    var likesSection = document.getElementsByClassName("likes");

    like.addEventListener("click", liked);

    function liked() {
      // if element.innerText === has already appeared in list
      //
      // else
        var li = document.createElement("li");
        li.innerText = element.innerText + " has been liked X times!";
        likesSection[0].appendChild(li);
    }


    /////     USER CAN PAUSE COUNTER    /////

    var pause = document.getElementById("pause");

    pause.addEventListener("click", paused);

    function paused(){
      // var timesClicked = 0;
      // timesClicked + 1;
      if (plus.disabled == false) {
        clearInterval(timer);
        minus.disabled = true;
        plus.disabled = true;
        like.disabled = true;
        pause.innerText = "resume";
      } else {
        minus.disabled = false;
        plus.disabled = false;
        like.disabled = false;
        pause.innerText = "pause";
        counter();
      }
    }

  }

  counter();

  /////     USER CAN LEAVE COMMENTS     /////

  const commentForm = document.getElementById("comment-form");

  commentForm.addEventListener("submit", addComment);

  });


  const addComment = event => {
    event.preventDefault();

    const comment = document.createElement("p");
    const commentInput = document.getElementById("comment-input");

    comment.innerText = commentInput.value;

    appendNewComment(comment);
    event.target.reset();
  };

  const appendNewComment = comment => {
    document.getElementById("list").appendChild(comment);


  };
