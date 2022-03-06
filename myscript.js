function getName() {
  let nname = "";
  let gender = document.getElementById("gender").value;
  let date = document.getElementById("date").value;
  if (gender == "male") {
    switch (new Date(date).getDay()) {
      case 0:
        nname = "Kwasi";
        break;
      case 1:
        nname = "Kwadwo";
        break;
      case 2:
        nname = "Kwabena";
        break;
      case 3:
        nname = "Kwaku";
        break;
      case 4:
        nname = "Yaw";
        break;
      case 5:
        nname = "Kofi";
        break;
      case 6:
        nname = "Kwame";
        break;
      default:
        alert("Invalid day");
    }
  } else if (gender == "female") {
    switch (new Date(date).getDay()) {
      case 0:
        nname = "Akosua";
        break;
      case 1:
        nname = "Adwoa";
        break;
      case 2:
        nname = "Abenaa";
        break;
      case 3:
        nname = "Akua";
        break;
      case 4:
        nname = "Yaa";
        break;
      case 5:
        nname = "Afua";
        break;
      case 6:
        nname = "Ama";
        break;
      default:
        alert("Invalid day");
    }
  } 

document.getElementById("birthdayday").onclick = getName;
