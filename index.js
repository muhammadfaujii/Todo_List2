// console.log("Salt Academy Betch 6 == Latihan Javascript");

// operator ==
// let secreNumber = 7;
// let userInput = prompt ('Masukan sebuha angka');

// if(secreNumber == userInput) {
//     alert('Angka yang anda masukkan benar');
// }else {
//     prompt ('Angka yang anda masukkan salah');
// }

// function thisFunctionObject(param) {
//     console.log(param * param);
// }

// thisFunctionObject(10.10);
// thisFunctionObject(20.20);

// // Operator Aritmatika
// console.log(2 == 2);
// console.log(2 === 2);

// console.log(2 != 2);
// console.log(2 !== 3);

// console.log(3 > 3);
// console.log(3 >= 3);

// console.log( 3 < 3);
// console.log( 3 <= 3);

// console.log("-----Logical---");
// console.log(2 == 2 && 3 ==3 );
// console.log(2 ==1 || 3 == 4 || 5 ==7);

// console.log("----Assigment----");
// let x = 10;
// console.log(x += 8);
// console.log(x -= 8);


// if else if
// if(2 == 2) {
//     console.log("Ini hasil dari if");
// }else if (3 == 3 ){
//     console.log("Ini hasil dari else");
// }else if(4 == 4) {
//     console.log("Ini hasil dari if ketiga");
// }else {
//     console.log("ini hasil dari else");
// }

// // swich
// const fruit = "Apple";
// switch (fruit) {
//     case "Jeruk":
//          console.log("Aplle");
//          break;
//     case "Magga":
//           console.log("Magga");
//            break;
//     case "Avocado":
//           console.log("Avocado");
//           break;
//     default:
//         console.log("Buah tidak ditemukan");               
// }

// // Ternary
// console.log(2 == 2 ? "betul" : "salah");

// // Perulangan for
// for (i = 0; i <= 10; i++) {
//     console.log("For ke 10");
// }

// // Perulangn while
// let j = 1;
// while(i <= 10) {
//     console.log("while ke 10");
//     j++;
// }

// // For In
// let arrayofNumber = [1,2,3,4];
// for(const key in arrayofNumber) {
//     console.log(key);
// }

// console.log("hallo");
// console.log("hari".length);

// let text = "apple,banan,kiwi";
// console.log(text.slice(-4,-1));
// console.log(text.substring(7,13));
// console.log(text.substr(0,7));

// let sentence = "Please visit microsoft !, micsorosft";
// let newtext = sentence.replace("microsoft","salt academy");
// let newtextReplaceAll = sentence.replaceAll("Microsoft","saltAcademy");
// console.log(newtext);
// console.log(newtextReplaceAll);

// console.log(text.toLocaleUpperCase());
// console.log(text.toLocaleLowerCase());

// let text1 = "hallo";
// let text2 = "Dunia";
// console.log(`${text1}apa saja ${text2}`);
// console.log(text1 + "" + text2);

// let text3 = "5";
// console.log(text3.padStart(17,"num"));

// let text4 = "Hallo Word";
// console.log(text4.charAt(6));

// let text5 = "abcd";
// console.log(text5.charCodeAt(0));

// let text6 = "apple,banana,kiwi, manggo";
// console.log(text6.split(","));


/*const maxLoop = 10;

for(let counter = 1; counter <= maxLoop; counter++){
    if(counter === 5){
        console.log(counter + ' Batas 5');
    }else if(counter === 3){
        console.log(counter + ' Batas 3')
    } else {
        console.log(counter + ' Hello world');
    }
}
*/
// const isLate = false;
// const weater = "Rain";

// if(isLate){
//     console.log('masukkan sarapan ke ke tas');
// }else {
//     console.log('sarapan di rumah');   
// }

// if(weater === 'Rain'){
//     console.log('masukan payung ke dalam tas');
// }else if(weater === 'cold'){
//     console.log('masukkan jaket ke dalam tas');
// }

const addCarForm = document.getElementById('addCarForm');
const card_container = document.getElementById('card_container');

addCarForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const ownerInput = document.getElementById('owner');
    const platnumInput = document.getElementById('platnum');
    const brandInput = document.getElementById('brand');

    const owner = ownerInput.value.trim();
    const platnum = platnumInput.value.trim();
    const brand = brandInput.value;

    // Basic validation
    if (!owner || !platnum || !brand) {
        alert('Please fill in all fields');
        return;
    }

    // Reset form
    ownerInput.value = '';
    platnumInput.value = '';
    brandInput.value = '';

    // Add new element
    addElement(owner, platnum, brand);
});

function addElement(owner, platnum, brand) {
    // Create a new div for the todo card
    const newElement = document.createElement('div');
    newElement.classList.add('car_card'); // Add the 'car_card' class

    // Populate the inner HTML of the new card
    newElement.innerHTML = `
      <img class="car_pic" src="img/car.png" />
      <div>
        <p>Plat No: ${platnum}</p>
        <p>Brand: ${brand}</p>
        <p id="owner">Owner: <strong>${owner}</strong></p>
      </div>
      <div class="editBtn" onclick="editElement(this)">Edit</div>
      <div class="deleteBtn" onclick="deleteElement(this)">X</div>
    `;

    // Append the new card to the card container
    card_container.appendChild(newElement);
};

const editElement = (element) => {
    const carDiv = element.parentElement

    const existingPlatnum = carDiv.querySelector('p:nth-child(1)').textContent;    
    const existingBrand = carDiv.querySelector('p:nth-child(1)').textContent;    
    const existingOwner = carDiv.querySelector('p:nth-child(1)').textContent;
    
    const newPlatnum = prompt('Edit Plat Number', existingPlatnum);
    const newBrand = prompt('Edit Plat brand', existingBrand);
    const newOwner = prompt('Edit Plat Owner', existingOwner);

    carDiv.querySelector('p:nth-child(1)').textContent = newPlatnum;
    carDiv.querySelector('p:nth-child(2)').textContent = newBrand;
    carDiv.querySelector('p#owner strong').textContent = newOwner;
};



// Function to delete the todo card
function deleteElement(element) {
    card_container.removeChild(element.parentElement);
};
