    function bg(){
      var h = document.getElementById("bgChange");
      var b = document.createAttribute("style");
      var bg = "bg-00";
      b.value = "background-image: url(img/" + bg +".jpg);";
      h.setAttributeNode(b);
    }
    
    bg();