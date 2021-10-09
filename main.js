var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://thumbs.dreamstime.com/b/dark-haired-girl-holding-white-cat-lovely-cartoon-character-vector-illustration-coloring-book-pin-sticker-dark-haired-girl-180913926.jpg", "https://cdn.imgbin.com/11/23/12/imgbin-cartoon-illustration-cartoon-kids-boy-wearing-backpack-illustration-DnpcLSWNHWUyxfV9fvATqZ7hc.jpg" , "https://image.shutterstock.com/image-illustration/geek-cartoon-nerd-character-nerdy-260nw-531985081.jpg", "https://thumbs.dreamstime.com/z/black-hair-woman-cartoon-head-vector-design-girl-female-person-people-human-social-media-theme-illustration-197313861.jpg" ];
var names = ["Fmaily Book","Isha Mishra", "Aneesh Mishra", "dad", "mom"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
      var updatedImage = images[i];
      var updatedName = names[i] ;
    

 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
