function imc() {
  var num1 = document.getElementById('number1');
  var num2 = document.getElementById('number2');
  if (num1.value !== '') {
    if (num2.value !== '') {
      var weight = parseInt(num1.value, 0);
      var height = parseInt(num2.value, 0);
      
      var height = height / 100;
      var sum = weight / (height * height);
      
      document.getElementById('result').value = sum.toFixed(1); // Format the result to one digit after the comma
      
      // Reset background color for all rows
      var rows = document.querySelectorAll('.level1, .level2, .level3, .level4, .level5, .level6, .level7, .level8');
      for (var i = 0; i < rows.length; i++) {
        rows[i].style.background = 'none';
      }

      // Update background color for the appropriate row
      if (sum < 15.0) {
        document.querySelector('.level1').style.background = '#85CE4D';
      } else if (sum >= 15.0 && sum <= 15.99) {
        document.querySelector('.level2').style.background = '#85CE4D';
      } else if (sum >= 16.0 && sum <= 18.49) {
        document.querySelector('.level3').style.background = '#85CE4D';
      } else if (sum >= 18.5 && sum <= 24.89) {
        document.querySelector('.level4').style.background = '#85CE4D';
      } else if (sum >= 24.9 && sum <= 29.99) {
        document.querySelector('.level5').style.background = '#85CE4D';
      } else if (sum >= 30.0 && sum <= 34.99) {
        document.querySelector('.level6').style.background = '#85CE4D';
      } else if (sum >= 35.0 && sum <= 39.99) {
        document.querySelector('.level7').style.background = '#85CE4D';
      } else if (sum >= 40.0) {
        document.querySelector('.level8').style.background = '#85CE4D';
      }
      
    }
  }
}
