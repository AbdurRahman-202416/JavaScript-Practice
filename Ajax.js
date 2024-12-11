function loadUserData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/quotes");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const userData = JSON.parse(xhr.responseText);
      console.log(userData)
      // Update the DOM with the user data
      document.getElementById("user-name").textContent = userData.name;
      document.getElementById("user-email").textContent = userData.email;
    } else {
      console.error("Request failed.  Returned status of " + xhr.status);
    }
  };

  xhr.send();
}
