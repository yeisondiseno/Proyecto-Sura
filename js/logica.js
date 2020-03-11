


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var option = {
      onClose: function() {
        const date = elems[0].value;
        console.log(date);
      },
      setDefaultDate: true,
      i18n: {
        cancel: 'Cancelar',
        done: 'Aceptar',
        months:	
        [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        monthsShort:	
        [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic'
        ],
        weekdays:
        [
          'Domingo',
          'Lunes',
          'Martes',
          'Miercoles',
          'Jueves',
          'Viernes',
          'Sábado'
        ],
        weekdaysShort:	
        [
          'Dom',
          'Lun',
          'Mar',
          'Mie',
          'Jue',
          'Vie',
          'Sab'
        ],
        weekdaysAbbrev:
        ['D','L','M','M','J','V','S']
      }
    }
    var instances = M.Datepicker.init(elems, option);
  });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.timepicker');
  var horaOption = {
    i18n:{
      cancel: 'Cancelar',
      done: 'Aceptar',
    },
    onCloseEnd: function(){
      const dateHora = elems[0].M_Timepicker.time;
      console.log(dateHora);
    }
  }
  var instances = M.Timepicker.init(elems, horaOption);
});


// map

var map;
var uluru = {lat: 6.1973134, lng: -75.5858882};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: uluru,
    zoom: 16,
  });
  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-33.8902, 151.1759),
    new google.maps.LatLng(-33.8474, 151.2631));
  var marker = new google.maps.Marker({position: uluru, map: map});
  var input = document.getElementById('searchTextField');
  var options = {
    bounds: defaultBounds,
    types: ['establishment']
  };
  
  autocomplete = new google.maps.places.Autocomplete(input, options);
}


// animación mapa

const $contMapa = document.getElementById('contMapa');

function openMap(){
  console.log('mapa abierto');
  $contMapa.style.animation = 'mapaIn .5s forwards';
}

function closeMap(){
  console.log('cerro mapa');
  $contMapa.style.animation = 'mapaOut .2s forwards';
}

$(document).ready(function(){
  $("#searchTextField").change(function(){
    let map = $(this).val();
    alert(map);
  })
})