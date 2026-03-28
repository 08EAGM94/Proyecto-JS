$(document).ready(function(){
  
  
     
  //Posts
  if(window.location.href.indexOf('index') > -1){

      var posts = [
        {
          title: "Prueba de titulo 1",
          date: "Publicado el dia " + moment().day() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio beatae non accusamus dolore abnumquam sunt vero rem! Accusamus dolorem quia ab mollitia, assumenda quae fugit distinctio exercitationem voluptatum."
        },
        {
          title: "Prueba de titulo 2",
          date: "Publicado el dia " + moment().day() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio beatae non accusamus dolore abnumquam sunt vero rem! Accusamus dolorem quia ab mollitia, assumenda quae fugit distinctio exercitationem voluptatum."
        },
        {
          title: "Prueba de titulo 3",
          date: "Publicado el dia " + moment().day() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio beatae non accusamus dolore abnumquam sunt vero rem! Accusamus dolorem quia ab mollitia, assumenda quae fugit distinctio exercitationem voluptatum."
        },
        {
          title: "Prueba de titulo 4",
          date: "Publicado el dia " + moment().day() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio beatae non accusamus dolore abnumquam sunt vero rem! Accusamus dolorem quia ab mollitia, assumenda quae fugit distinctio exercitationem voluptatum."
        },
        {
          title: "Prueba de titulo 5",
          date: "Publicado el dia " + moment().day() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio beatae non accusamus dolore abnumquam sunt vero rem! Accusamus dolorem quia ab mollitia, assumenda quae fugit distinctio exercitationem voluptatum."
        }
      ]
      //console.log(posts);
      posts.forEach((item, index) =>{
        var post = `
          <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
              ${item.content}
            </p>
            <a href="#" class="buttonMore">Leer más</a>    
          </article>
        
        `;
        $('#posts').append(post);
      });
    //slider
    $(window).on("load", function(){
      $(function(){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
      });
    }); 
  }

  
  
  //Selector de tema
  var styles = $('#theme');
  $('#toGreen').click(function(){
    styles.attr('href', './css/green.css')
  });
  $('#toRed').click(function(){
    styles.attr('href', './css/red.css')
  });
  $('#toBlue').click(function(){
    styles.attr('href', './css/blue.css')
  });
  //scroll arriba de la web
  $('.subir').click(function(e){
    /*Para que el link no haga su funcion fundamental que sería llevarnos
    a otro sitio, simplemente que nos deje que se ejecute esta funcionalidad
    sin que nos redirija a otra parte*/
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500)
    return false;
  });
  //login falso
  $("#login form").submit(function(){
    var formName = $('#formName').val();
    localStorage.setItem("formName", formName); 
  });
  var formName = localStorage.getItem("formName");
  if(formName != null && formName != undefined){
    var aboutParrafo = $('#about p');
    aboutParrafo.html(`<strong>Bienvenido, ${formName}</strong>`);
    aboutParrafo.append(`<a href="#" id="logout">Cerrar sesión</a>`)
    $('#login').hide();
    $('#logout').click(function(){
      localStorage.clear();
      location.reload();
    });
  }
  
  //Acordeon
  if(window.location.href.indexOf('about') > -1){
    $('#acordeon').accordion();
    
  }
  
  //Reloj
  if(window.location.href.indexOf('reloj') > -1){
    setInterval(function(){
      var reloj = moment().format('h:mm:ss');
      $('#reloj').html(reloj);
    }, 1000);
    
  }
  
  //validación de formulario
  if(window.location.href.indexOf('contact') > -1){

    $("form input[name='birthdate']").datepicker({
      dateFormat: "dd-mm-yy"
    });


    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true
    });

  }
});
