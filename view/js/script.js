function allLetter()
      {
      var x, text;
      x = document.getElementById("input").value;

      var letters = /^[A-Za-z]+$/;
      if(x.match(letters))
      {
      alert('Your name have accepted : you can try another');
      return true;
      }
      else
      {
      alert('provide the valid input');
      return false;
      }
      }
