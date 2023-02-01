const calendar = document.getElementById("calendar");
const calendarHeader = document.getElementById("calendar-header");
const monthYear = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month-btn");
const nextMonthBtn = document.getElementById("next-month-btn");
const calendarDays = document.getElementById("calendar-days");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const createCalendar = (month, year) => {
  // Clear the calendar
  while (calendarDays.firstChild) {
    calendarDays.removeChild(calendarDays.firstChild);
  }

  // Get the first day of the month and the number of days in the month
  const firstDay = new Date(year, month, 1);
  const numDays = new Date(year, month + 1, 0).getDate();

  // Get the starting day of the week for the first day of the month
  let startDay = firstDay.getDay();

  // Create the calendar table
  let date = 1;
  let row = null;

  while (date <= numDays) {
    if (startDay === 0) {
      row = document.createElement("tr");
      calendarDays.appendChild(row);
    }

    const cell = document.createElement("td");
    cell.innerText = date;
    row.appendChild(cell);

    startDay = (startDay + 1) % 7;
    date++;
  }

  // Update the header
  monthYear.innerText = `${months[month]} ${year}`;
};

// Initialize the calendar
createCalendar(currentMonth, currentYear);

// Handle the prev month button
prevMonthBtn.addEventListener("click", () => {
  currentMonth--;

  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }

  createCalendar(currentMonth, currentYear);
});

// Handle the next month button
nextMonthBtn.addEventListener("click", () => {
  currentMonth++;

  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  createCalendar(currentMonth, currentYear);
});