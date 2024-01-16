const myImage = document.querySelector("img");

//Update the onclick function
myImage.onclick = function () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mobile-robot.png") {
      myImage.setAttribute("src", "images/robot-arm.jpg");
    } else {
      myImage.setAttribute("src", "images/mobile-robot.png");
    }
  };


  let myButton = document.querySelector("button");
  let myHeading = document.querySelector("h1");
  
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }


  myButton.onclick = () => {
    setUserName();

  };