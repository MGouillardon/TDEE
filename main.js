import "/main.css";

let age = document.getElementById("age");

let height = document.getElementById("height");

let weight = document.getElementById("weight");

let caloriesResult = document.getElementById('calories');

let calculateBtn = document.querySelector('button');

const calculateTDEE = (gender, age, height, weight, activityLevel) => {

    if(gender == "male") {
        return (10 * weight + 6.25 * height - 5 * age + 5) * activityLevel;
    }
    
    return (10 * weight + 6.25 * height - 5 * age - 161) * activityLevel;

}

calculateBtn.addEventListener('click', () => {
    let genderValue = document.querySelector("input[name='gender']:checked").value;

    let activityLevelValue = document.querySelector("input[name='activityLevel']:checked").value;

    let TDEE = Math.trunc(calculateTDEE(genderValue, age.value, height.value, weight.value, activityLevelValue)) ;

    caloriesResult.innerHTML = TDEE;
})