$(document).ready(function(processData) {
    var source = $('#album-name').html();
    var template = Handlebars.compile(source);

    var sevenDigitalUrlStart = "https://www.7digital.com/artist/"

    var sevenDlink = "https://www.7digital.com/artist/murcof/release/cosmos"

    return processData

    var context = {
      albums: [
        {artist: "Murcof", title: "Cosmos", link: "https://www.7digital.com/artist/murcof/release/cosmos", text: playlistData},
        {artist: "Murcof", title: "La Sangre Iluminada",link: "https://www.7digital.com/artist/murcof/release/la-sangre-iluminada"}
      ],

    };


    var html = template(context);
    $(document.body).append(html);
});
