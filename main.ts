/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getLength(jumpings: number[]): number {
    return jumpings.reduce((jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump);
  }
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
  class Student {
    constructor(
      public name: string,
      public handedInOnTime: boolean,
      public passed: boolean
    ) {}
  }
  
  function getStudentStatus(student: Student): string {
    student.passed = student.name == "Sebastian" ? student.handedInOnTime ? true : false : false;
  
    return student.passed ? "VG" : "IG";
  }
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
  class WeatherData {
    constructor(public city: string, public date: Date, public temperature: number) {}
  }
  
  function averageWeeklyTemperature(weatherDataArray: WeatherData[]) {
    let totalTemperature = 0;
  
    for (let i = 0; i < weatherDataArray.length; i++) {
      if (weatherDataArray[i].city === "Stockholm") {
        if (weatherDataArray[i].date.getTime() > Date.now() - 604800000) {
          totalTemperature += weatherDataArray[i].temperature;
        }
      }
    }
  
    return totalTemperature / 7;
  }
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
  function showProduct(
    name: string,
    price: number,
    amount: number,
    description: string,
    image: string,
    parent: HTMLElement
  ) {
    let container = document.createElement("div");

    container.innerHTML = `{
    <h4>${name}</h4>
    <img src="${image}" alt="${name}"></img>
    <strong>${price}</strong>
    <p>${description}</p>
    <span>Antal: ${amount}</span>
    }`
  
    parent.appendChild(container);
  }
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
  function presentStudents(students: Student[]) {
    for (const student of students) {
      let container = document.createElement("div");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = student.handedInOnTime;

      container.appendChild(checkbox);

      if (student.handedInOnTime) {
        let listOfStudents = document.querySelector("ul#passedstudents");
        listOfStudents?.appendChild(container);
      } else {
        let listOfStudents = document.querySelector("ul#failedstudents");
        listOfStudents?.appendChild(container);
      }
    }
  }
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
  
  //Tog mig friheten och tänkte steget längre här...
  function concatenateStrings(strings: string[]) {
    return strings.join(', ');
  }
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */

  const AGE_LIMIT = 20;

  interface User {
    name: string,
    birthday: Date,
    email: string,
    password: string
  }

  function calculateAge(birthday: Date): number {
    let ageDiff = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);;
  }

  function createUser(user: User) {
    // Validation
    let userAge = calculateAge(user.birthday);
  
    if (!(userAge < AGE_LIMIT)) {
      // Logik för att skapa en användare
    } else {
      return "Du är under 20 år";
    }
  }
  