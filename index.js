const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const submit = document.getElementById('submit');
const posts = document.getElementById('posts');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log("clicked Submit");
  formValidation();
})

const formValidation = () => {
  if(input.value === ""){
    console.log("failed")
    msg.innerHTML = "No black post"
  }
  else{
    console.log("success")
    msg.innerHTML = ""
    acceptData();
  }
}

const data = {}

const acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createdPost();
}

const createdPost = () => {
  posts.innerHTML += 
  `
  <div>
          <p>${data.text}</p>
          <span class="options">
            <i onclick="deletePost(this)" class="fa-sharp fa-solid fa-trash"></i>
            <i onclick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
          </span>
        </div>
  `;

  input.value = "";
}

const deletePost = (e) => {
  e.parentElement.parentElement.remove();
}

const editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}