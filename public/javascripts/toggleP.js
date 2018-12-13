$(function () {
   
  $(".toggleAllSSP").click(function () {
      $(".SSP").toggle();
    });

    $(".toggleAllBtn").click(function () {
      $(".toggleItem").toggle();
    });
  });

  function oneElmToggle(elm) {
    const display = elm.nextSibling.style.display;
    if (display === "none" || display === "") {
      elm.nextSibling.style.display = "block";
    }
    else {
      elm.nextSibling.style.display = "none";
    }
  }
  



  // FIXXX YOU
  // function oneChildToggle(elm) {
  //   const display = elm.firstChild.style.display;
  //   if (display === "none" || display === "") {
  //     elm.firstChild.style.display = "block";
  //   }
  //   else {
  //     elm.firstChild.style.display = "none";
  //   }
  // }



