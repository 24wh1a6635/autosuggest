//alert("Hello from JS !");

console.log("Hello from js !");

let isJohn = true;

function toggleUser() {

    const image = document.getElementById("userImage");
    const name = document.getElementById("userName");
    const gender = document.getElementById("userGender");

    if (isJohn) {

        image.src = "../images/jane.png";
        name.innerText = "Jane";
        gender.innerText = "Female";

    } else {

        image.src = "../images/john.png";
        name.innerText = "John";
        gender.innerText = "Male";
    }

    isJohn = !isJohn;
}