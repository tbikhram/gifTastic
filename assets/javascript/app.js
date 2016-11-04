//-----------------------------------------------------------------   
// this are will be checking the query for the gifs tied to animals 
// 


    $('button').on('click', function() {
        var animal = $(this).data('animal');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                console.log(response)

            var results = response.data;

           for (var i = 0; i < results.length; i++) {


             var animalDiv =$('<div>');

                    
                    var rating = results[i].rating;
                    
                    var p = $('<p>').text("Rating:" + rating);

                    var animalImage =$('<img>');
                    animalImage.attr('src', results[i].images.fixed_height.url);
                   
                    animalDiv.append(p)
                    animalDiv.append(animalImage)
                    
                    $('#gifsAppearHere').prepend(animalDiv);
                
            }

            });
    });

    //-----------------------------------------------------------
    // this is suppose to tie into the gif to make them
    // still and animate on a click

    $('.gif').on('click', function(){

       var state = $(this).attr('data-state');

            if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');

            }else{
                $(this).attr('src',$(this).data('still'));
                $(this).attr('data-state', 'still');
            }




  });