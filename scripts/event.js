
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Event 1',
        start: '2022-01-01'
      },
      {
        title: 'Event 2',
        start: '2022-01-05',
        end: '2022-01-07'
      }
    ]
  });
  calendar.render();
});