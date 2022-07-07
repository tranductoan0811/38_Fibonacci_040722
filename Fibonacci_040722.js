function fibonacci() {
  let number, num1 = 0, num2 = 1, sum, display;
    number = +document.getElementById("number").value;
    sum = num1+num2;
    if (number < 0) {
      
      document.getElementById("result").innerHTML = "Số nhập vào phải là số nguyên dương."

    } else if (number >= 0) {

        if (number ==0 || number ==1) {
          // khi số nhập vào là 0 hoặc 1 thì đều trả về 1
          document.getElementById("result").innerHTML = sum;

        } else if (number >= 2) {

          while (sum <= number) {

            //hoán đổi cho số thứ 2 thành tổng 2 số trước đó, số thứ 1 bằng số thứ 2
          
            num1 = num2;
            num2 = sum;
            sum = num1+num2;
            sum++;
            document.getElementById("result").innerHTML =sum;
          }
        }
     
      }
  }


