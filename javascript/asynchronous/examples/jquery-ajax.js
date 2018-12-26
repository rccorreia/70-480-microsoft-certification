window.onload = function () {
  $('#searchButton').click(function () {
    var searchPath;
    $('#searchResults').empty();
    switch ($('#searchFruit').val()) {
      case 'long':
        searchPath = "Fruit/Long.xml";
        break;
      case 'round':
        searchPath = "Fruit/Round.xml";
        break;
      case 'orange':
        searchPath = "Fruit/Orange.xml";
        break;
      default:
        InvalidSearchTerm();
    }

    $.ajax({
      url: searchPath,
      cache: false,
      dataType: "xml",
      type: "GET",
      success: function (data) {
        $(data).find("fruit").each(
          function () {
            $('#searchResults').append($(this).text());
            $('#searchResults').append("<BR />");
          })
      },
      error: function (xhr, textStatus, errorThrown) {
        $('#searchResults').append(errorThrown);
      }
    });
  });
}

function InvalidSearchTerm() {
  $('#searchResults').empty();
  $('#searchResults').append('Invalid Search Term. Please try again.');
}
