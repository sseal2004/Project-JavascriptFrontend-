function calculateBMI(){
    //user-input
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    //display or output
    const result = document.getElementById('result');

    if(height===''||height<=0||isNaN(height)){
        // innerText is a property

        result.innerText = "Please write valid height"
        return;
    }
    if(weight===''||weight<=0||isNaN(weight)){
        result.innerText = "Please write valid weight"
        return;
    }

    //BMI Calculation
    const bmi = (weight / (height* height))*10000;
    

    //category

    const category =(bmi)=>{
        if(bmi < 18.6)
        {
            return "Under Weight";
        }
        if (bmi >= 18.6 && bmi <= 24.9)
        {
            return "Normal Range"
        }
        else{
            return "Overweight"
        }
  }

    //It basically fixes the decimal places upto 2
    result.innerText=`Your BMI is ${bmi.toFixed(2)} and Category is ${category(bmi)}`

}





