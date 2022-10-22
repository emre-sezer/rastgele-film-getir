$(document).ready(function() {
    
    

    $.getJSON("../json/film.json", function(data) { 
      console.log(data);

      $.each(data, function(i, item) {
       
      
        $( ".filmVerileri").append( "<div class='listedekiFilmAdlari col-lg-3 col-md-4 col-sm-6 col-6'>" + data[i].id +"." + data[i].Title + "</div>");
        
    });
    
   
       
   //declare variables 
   var poster = "";
   var title = "";
   var summary = "";
   var imdb = "";
   var vision = "";
   var type = "";
   var time = "";
   var director = "";
   var actors = "";
   var production = "";
   var fragman = "";
 
 
   /*function to obtain a random quote and display in html*/
   function randomMovie() {
     random = Math.floor(Math.random() * data.length);
     poster = data[random].Poster;
     title = data[random].Title;
     summary = data[random].Summary;
     imdb = data[random].IMDB;
     vision = data[random].Vision;
     type = data[random].Type;
     time = data[random].Time;
     director = data[random].Director;
     actors = data[random].Actors;
     production = data[random].Production;
     fragman = data[random].Fragman;

     $(".filmResmi img").attr("src",poster);
     $(".filmAdi").html(title);
     $(".filmKonusu").html(summary);
     $(".imdb").html(imdb);
     $(".vizyon").html(vision);
     $(".filmTuru").html(type + " ");
     $(".filmSuresi").html(time);
     $(".yonetmen").html(director);
     $(".oyuncular").html(actors + " ");
     $(".ulkeler").html(production + " ");
     $(".fragman").attr("src",fragman);

   }
 
   //Event listeners
   $(".degistirBtn").on("click", randomMovie);
  
 
   randomMovie();
   
   
    });
  });




// $.each(data, function(i, item) {
//     alert(item.PageName);
// });



  $(".fragman-modal").on('hidden.bs.modal', function (e) {
    $(".fragman-modal iframe").attr("src", $(".fragman-modal iframe").attr("src"));
});