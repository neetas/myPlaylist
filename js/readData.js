$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "playlistData.csv",
    success: function(data){
        var albumURLs = data.split(/\r\n|\n/).sort();

        var table = buildTable(albumURLs);

        $("#albumlist").append(table);

        // var submitTest = $(#addAlbum).submit();
        var inputURL = $('#inputURL').val();

    }
  });
});

function buildTable(albumURLs){
  var table_html=" ";
  var artist_results=" ";

  albumURLs.forEach(function(link){
    var albumData= link.split('/');
    if (!albumData[4]) { return; }
    var albumArtist = albumData[4].replace(/-/g," ");
    var albumTitle = albumData[6].replace(/-\d+$/," ").replace(/-/g," ");
    artist_results += "<tr><td class='artist'>"+ albumArtist+"</td><td class='title'><a target='blank' href='" + link + "'>" + albumTitle + "</a></td></tr>"
    table_html = artist_results
  });
  return table_html;
}
