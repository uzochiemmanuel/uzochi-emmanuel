navUl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('active');
  });
});

let form = document.getElementById("comment-form");
let nameInput = document.getElementById("comment-name");
let messageInput = document.getElementById("comment-message");
let commentList = document.getElementById("comment-list");

// Reusable function to add a comment
function addCommentToList(name, message) {
  const newComment = document.createElement("li");
  newComment.innerHTML = `<strong>${name}:</strong> ${message}`;
  commentList.appendChild(newComment);
}

// Handle form submit
form.onsubmit = function (event) {
  event.preventDefault();

  let name = nameInput.value.trim();
  let message = messageInput.value.trim();

  if (name !== "" && message !== "") {
    addCommentToList(name, message);

    // Clear inputs
    nameInput.value = "";
    messageInput.value = "";

    alert("✅ You commented on this post");
  } else {
    alert("⚠️ Please enter your name and comment.");
  }
};


