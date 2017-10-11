var dialogLib = {
  alert:{
    show: function(msg, label){
      label = label || "OK";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
            "<button onclick='dialogLib.alert.hide()'>" + label + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
    },
    hide: function(){

    }
  }
}
