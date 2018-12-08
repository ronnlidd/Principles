function toggleNextP(elm) {
    const display = elm.nextSibling.style.display;
    if (display === "none" || display === "") {
      elm.nextSibling.style.display = "block";
    }
    else {
      elm.nextSibling.style.display = "none";
    }
  }

  window.onload = function () {
    $("#toggleAllSSSP").click(function () {
      $(".SSSP").toggle('fast');
      $( "#toggleSuccess" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
      $( "#toggleSuccess" ).dialog( "open" );
    }); 
};

  