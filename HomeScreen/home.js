// Get a reference to the element where you want to display the classes
const classesContainer = document.getElementById("classes-container");

fetch('\Users\Owner\Documents\GitHub\Schoolapp\classes-data.json')
  .then(response => response.json())
  .then(classes => {
    // Iterate through the classes
    for (const classData of classes) {
      // Create a new element to hold the class information
      const classElem = document.createElement("div");
  
      // Create an element to hold the class name
      const classNameElem = document.createElement("h2");
      classNameElem.innerHTML = classData.class_name;
  
      // Create an element to hold the instructor name
      const instructorElem = document.createElement("p");
      instructorElem.innerHTML = "Instructor: " + classData.instructor;
  
      // Create an element to hold the description
      const descriptionElem = document.createElement("p");
      descriptionElem.innerHTML = classData.description;
  
      // Create an element to hold the list of students
      const studentsElem = document.createElement("p");
      studentsElem.innerHTML = "Students: " + classData.students.join(", ");
  
      // Append the class name, instructor, description, and students to the class element
      classElem.appendChild(classNameElem);
      classElem.appendChild(instructorElem);
      classElem.appendChild(descriptionElem);
      classElem.appendChild(studentsElem);
  
      // Append the class element to the container
      classesContainer.appendChild(classElem);
    }
  })
  .catch(error => console.error(error));


  //Listeners for main buttons
  document.querySelector("#homeButton").addEventListener("click", function() {
    window.location.href = "https://example.com/home";
  });
  
  document.querySelector("#classesButton").addEventListener("click", function() {
    window.location.href = "https://example.com/classes";
  });
  
  document.querySelector("#discussionBoardButton").addEventListener("click", function() {
    window.location.href = "https://example.com/discussion-board";
  });
  
  document.querySelector("#documentLibraryButton").addEventListener("click", function() {
    window.location.href = "https://example.com/document-library";
  });
  
  document.querySelector("#calendarButton").addEventListener("click", function() {
    window.location.href = "https://example.com/calendar";
  });
  
  document.querySelector("#professorsButton").addEventListener("click", function() {
    window.location.href = "https://example.com/professors";
  });
  
  document.querySelector("#studyGroupsButton").addEventListener("click", function() {
    window.location.href = "https://example.com/study-groups";
  });
  
  document.querySelector("#messagesButton").addEventListener("click", function() {
    window.location.href = "file:///C:/Users/Owner/Documents/GitHub/Schoolapp/Schoolapp/Messages/ClientSide/Messages.html";
  });
  //End of Listeners
