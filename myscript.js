function getName(){
    var name = ""
    var gender = ""
    if (gender == "male"){
    switch (new Date().getDay()) {
        case "Sunday":
          name = "Kwasi";
          break;
        case MOnday:
          name = "Kwadwo";
          break;
        case Tuesday:
           name = "Kwabena";
          break;
        case Wednesday:
          name = "Kwaku";
          break;
        case Thursday:
          name = "Yaw";
          break;
        case Friday:
          name = "Kofi";
          break;
        case Saturday:
          name = "Kwame";
      }
    }

    else if(gender ==  "female"){
        switch (new Date().getDay()) {
            case "Sunday":
              name = "Akosua";
              break;
            case "Monday":
              name = "Adwoa";
              break;
            case "Tuesday":
                name = "Abenaa";
              break;
            case "Wednesday":
                name = "Akua";
              break;
            case "Thursday":
                name = "Yaa";
              break;
            case "Friday":
                name = "Afua";
              break;
            case "Saturday":
              name = "Ama";
          }

    }
    else (alert("Input a proper gender"))
}
