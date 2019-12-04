document.addEventListener("DOMContentLoaded", () => {

  /////     TIMER INCREASES EVERY SECOND     /////

  function counter() {

    var element = document.getElementById("counter");

    var i = parseInt(element.innerText)

    setInterval(function(){
        console.log(i++);
    }, 1000);

    setInterval();

}
  /////     USER CAN INCREASE OR DECREASE TIMER    /////

  /////     USER CAN LIKE A NUMBER    /////

  /////     USER CAN PAUSE COUNTER    /////



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
