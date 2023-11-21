
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
        editable : true ,
        selectable : true,
        eventResizableFromStart : true,
        resourceEditable : true, 
        overlap : true, 
        
      initialView: 'dayGridMonth', // Vue initiale du calendrier en mode mois
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay' // Options pour changer la vue
      },
      events: [
        // Vous pouvez ajouter vos événements ici
        // Format des événements : { title: 'Nom de l'événement', start: '2023-11-21' }
      ]
    });
    calendar.on('select', function(info) {
        const clickedDateTime = info.start; // La date et l'heure cliquées
        // Commence la sélection avec la date et l'heure cliquées comme début
        var title=prompt('Entrer le titre');

        if (title !== "" && title!=null)

        calendar.addEvent({
            title: title,
            start: clickedDateTime,
            end: info.end,
            allDay:info.allDay

           
          });
          
          
      });
     
    

      calendar.on('eventDrop', function(info) {
        const droppedEvent = info.event;
        const newStartDate = droppedEvent.start; // Nouvelle date et heure de début après le glisser-déposer
      
        // Si l'événement a une nouvelle date de début
        if (newStartDate) {
          // Commence la sélection avec la nouvelle date et heure de début
          calendar.select(newStartDate, newStartDate.clone().add(1, 'hour')); // Sélectionne une heure de plage
        }
      });

      calendar.on('eventClick', function(info){
       
        if (confirm('Veux tu vraiment suprimer?')) {
            info.event.remove();
        }

      });
    calendar.render();
  });
  

  

    