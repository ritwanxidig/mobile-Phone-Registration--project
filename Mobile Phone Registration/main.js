// console.log(Date);

const fname = document.querySelector("#fname");
const sname = document.querySelector("#sname");
const lname = document.querySelector("#lname");
const submit = document.querySelector("#submit");

const sendingInput = document.querySelector("#sendInput");
const sendSubmit = document.querySelector("#sendSubmit");
const sendParent = document.querySelector(".sendParent");

const table = document.querySelector(".listedTable");

const optionsBar = document.querySelector(".options");

const numGen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let number = "4";

const addNumbertoLocalStorage = (num) => {
  let savedNumber = [];
  if (localStorage.getItem("person") === null) {
    savedNumber = [];
  } else {
    savedNumber = JSON.parse(localStorage.getItem("person"));
  }
  savedNumber.push(num);
  localStorage.setItem("person", JSON.stringify(savedNumber));
};

const ReadNumbersFromLocalStorage = (num) => {
  let savedNumber = [];
  if (localStorage.getItem("person") === null) {
    savedNumber = [];
  } else {
    savedNumber = JSON.parse(localStorage.getItem("person"));
  }

  savedNumber.forEach((person) => {
    table.innerHTML += ` <tr>
    <td>${person[0]}</td>
    <td>${person[1]}</td>
    <td>${person[2]}</td>
    <td>${person[3]}</td>
</tr>`;
  });
};

submit.addEventListener("click", (e) => {
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * numGen.length);
    number += numGen[random];
  }
  console.log(number);
  e.preventDefault();
  table.innerHTML += ` <tr>
    <td>${fname.value}</td>
    <td>${sname.value}</td>
    <td>${lname.value}</td>
    <td>${number}</td>
</tr>`;
  addNumbertoLocalStorage([fname.value, sname.value, lname.value, number]);
  number = "4";
});

const sendMoney = () => {
  if (sendingInput.value === "*222#") {
    optionsBar.innerHTML = `<div class="card-body bg-light">
    <h5>Fadlan Gali Pin-kaaga</h5>
</div>`;
    sendInput.remove();
    sendSubmit.remove();
  }
  else
  {
    alert('Invalid Code error!!!')
  }
};

const sendMoney2 = () => {
  sendParent.innerHTML += `
    <input type="text" name="" id="sendInput" class="form-control sendInput" placeholder="Your Pin-Number" required>
    <input type="Submit" value="Send" name="" id="sendSubmit" class="btn btn-outline-primary col-sm-4 col-lg-3 col-md-4 col-sm-6 my-3 col-12">
    `;
  const sendingInput2 = document.querySelector(".sendInput");
  const sendingSubmit2 = document.querySelector("#sendSubmit");

  sendingSubmit2.addEventListener("click", (e) => {
    e.preventDefault();
    if (sendingInput2.value === "1111") {
      optionsBar.innerHTML = `<div class="card-body bg-light">
        <h4>Zaad Services</h4>
        <h6>1. Itus Hadhaaga</h6>
        <h6>2. Lacag Dirid</h6>
        <h6>3. Lacag La bixid</h6>
        <h6>4. Ku iibso</h6>
        <h6>5. Itus Dhaqdhaqaaqa</h6>
</div>`;
      // sendMoney3();
      sendingInput2.remove();
      sendingSubmit2.remove();

      sendMoney3();
    } else {
      alert("Invalid Pin");
    }
  });

  // document.querySelector('.card-body').remove();
  // sendingInput.remove();
  // sendParent.innerHTML = `
  // <input type="text" name="" id="sendInput" class="form-control" placeholder="Please Enter the Number" required>
  // `
};
let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();

let d = today.getDay();
let mth = today.getMonth();
let y = today.getFullYear();

const sendMoney3 = () => {
  sendParent.innerHTML += `
    <input type="text" name="" id="sendInput" class="form-control sendInput" placeholder="Fadlan Dooro" required>
    <input type="Submit" value="Send" name="" id="sendSubmit" class="btn btn-outline-primary col-sm-4 col-lg-3 col-md-4 col-sm-6 my-3 col-12">
    `;
  const sendingInput3 = document.querySelector(".sendInput");
  const sendingSubmit3 = document.querySelector("#sendSubmit");

  sendingSubmit3.addEventListener("click", (e) => {
    e.preventDefault();
    if (sendingInput3.value === "1") {
      alert("Hadhaagaaga Xisaabtu Waa: 90,000s,SH");
      location.reload();
    } else if (sendingInput3.value === "2") {
      sendingInput3.remove();
      sendingSubmit3.remove();
      document.querySelector(".card-body").remove();
      //   optionsBar.classList.add("d-none");
      sendParent.innerHTML += `
        <input type="text" name="" id="sendInput" class="form-control sendInput" placeholder="Fadlan Gali Numberka aad Lacagta u dirayso" required>
        <input type="Submit" value="Send" name="" id="sendSubmit" class="btn btn-outline-primary col-sm-4 col-lg-3 col-md-4 col-sm-6 my-3 col-12">
        `;
      const sendingInput3_1 = document.querySelector(".sendInput");
      const sendingSubmit3_1 = document.querySelector("#sendSubmit");

      sendingSubmit3_1.addEventListener("click", (e) => {
        e.preventDefault();
        let savedNumber = [];
        if (localStorage.getItem("person") === null) {
          savedNumber = [];
        } else {
          savedNumber = JSON.parse(localStorage.getItem("person"));
        }
        savedNumber.forEach((person) => {
          if (sendingInput3_1.value === person[3]) {
            sendingInput3_1.remove();
            sendingSubmit3_1.remove();
            sendParent.innerHTML += `
        <input type="text" name="" id="sendInput" class="form-control sendInput" placeholder="Fadlan Gali Lacagta aad Lacagta u dirayso" required>
        <input type="Submit" value="Send" name="" id="sendSubmit" class="btn btn-outline-primary col-sm-4 col-lg-3 col-md-4 col-sm-6 my-3 col-12">
        `;
            const sendingInput3_2 = document.querySelector(".sendInput");
            const sendingSubmit3_2 = document.querySelector("#sendSubmit");

            sendingSubmit3_2.addEventListener("click", (e) => {
              e.preventDefault();
              if (sendingInput3_2.value > 0) {
                //optionsBar.classList.remove('d-none')
                const money = sendingInput3_2.value;
                optionsBar.innerHTML = `<div class="card-body bg-light">
                    <h4>[Zaad Services]</h4>
                    <h6>Ma Hubtaa inaad u dirtid SSH${money} ${person[0]} ${person[1]} ${person[2]}(${person[3]}), Haddii aad Hubtid Number 1 dooro </br> 1.Haa Waan Hubaa </br> 2. ka noqo </h6>
            </div>`;
                sendingInput3_2.remove();
                sendingSubmit3_2.remove();
                sendParent.innerHTML += `
        <input type="text" name="" id="sendInput" class="form-control sendInput" placeholder="Fadlan Dooro 1 ama 2" required>
        <input type="Submit" value="Send" name="" id="sendSubmit" class="btn btn-outline-primary col-sm-4 col-lg-3 col-md-4 col-sm-6 my-3 col-12">
        `;
                const sendingInput3_3 = document.querySelector(".sendInput");
                const sendingSubmit3_3 = document.querySelector("#sendSubmit");

                sendingSubmit3_3.addEventListener("click", (e) => {
                  e.preventDefault();
                  if (sendingInput3_3.value === "1") {
                    //         const msg = `<div class="card-body bg-light">
                    //         <h4>[-Zaad Services-]</h4>
                    //         <h6>Tix:2523534534 </br> SSH${money} ayaad u dirtay  ${person[0]} ${person[1]} ${person[2]}(${person[3]}), </br> Tar: ${d}/ ${mth}/ ${y} </br> ${h}:${m}:${s}, </br> Hadhaagaagu Waa SLSH${money}  </h6>
                    // </div>`;
                    const msg = `[-Zaad Services-]
                Tix:2523534534
                SSH${money} ayaad u dirtay ${person[0]} ${person[1]} ${person[2]}(${person[3]}),
                Tar: ${d}/ ${mth}/ ${y}
                ${h}:${m}:${s},
                Hadhaagaagu Waa SLSH${money}.08`;
                    alert(msg);
                    addMsgtoLocalStorage(msg);
                    location.reload();
                  }
                });
              }
            });

            const addMsgtoLocalStorage = (data) => {
              let Lastmsg = [];
              if (localStorage.getItem("Msg") === null) {
                Lastmsg = [];
              } else {
                Lastmsg = JSON.parse(localStorage.getItem("Msg"));
              }
              Lastmsg.push(data);
              localStorage.setItem("Msg", JSON.stringify(Lastmsg));
            };
          } else {
            return;
          }
        });
      });
    } else {
      alert("Invalid Code!!!");
    }
  });
};

ReadNumbersFromLocalStorage([fname.value, sname.value, lname.value, number]);

sendSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  sendMoney();
  sendMoney2();
});
