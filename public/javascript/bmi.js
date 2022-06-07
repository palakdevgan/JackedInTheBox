function calculateBMI(weight, height) {
    var height_meter = 0;
    var bmi = 0;
    var range = "";
    if (height && weight) {
        height_meter = height / 100;
        bmi = weight / (height_meter * height_meter);
        bmi = Math.round(bmi);
        if (bmi < 18.5) {
            range = "Underweight";
        }
        if (bmi >= 18.5 && bmi <= 24.9) {
            range = "Healthy";
        }
        if (bmi >= 25 && bmi <= 29.9) {
            range = "Overweight";
        }
        if (bmi >= 30 && bmi <= 34.9) {
            range = "Obese";
        }
        if (bmi >= 35 && bmi <= 39.9) {
            range = "Severely Obese";
        }
        if (bmi >= 40) {
            range = "Morbidly Obese";
        }
    }
    return bmi + " " + range;
}

async function BMIhandler(event) {
    event.preventDefault();


    const age = document.querySelector('#age').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const height = document.querySelector('#height').value.trim();

    if (age && weight && height) {

        bmi = calculateBMI(weight, height);
        $(".yourBMI").html("Your BMI is " + bmi);
    }
}

document.querySelector('.bmi-form').addEventListener('submit', BMIhandler);