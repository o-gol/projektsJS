function forms(){

     //------------------------- Forms
     const allForms = document.querySelectorAll(`form`);
     //const callMeBackButton=document.querySelectorAll(`[call-button]`);
     //console.log(callMeBackButton);
     //console.log(orderForm);
     //modelCaller;
     //callMe;
     //modal__input
     //order__input
     //[phone-input]
     //[name-input]
     //console.log(allForms);
     allForms.forEach(item => {
         callMeBack(item);
     });
 
     // });
     const message = {
         loading: `img/form/spinner.svg`,
         success: `Спасибо мы с вами свяжемся!`,
         failure: `Что-то пошло не так!`
 
     };
 
 
     const coments = {
         //  function callMeBack(form){
 
         //      form.addEventListener(`submit`,e=>{
 
         //         e.preventDefault();
         //         const statusMessage=document.createElement(`div`);
         //         statusMessage.classList.add(`status`);
         //         statusMessage.textContent=message.loading;
         //         form.append(statusMessage);
         //         const request= new XMLHttpRequest();
         //         request.open(`POST`,`server.php`);    
         //         //request.setRequestHeader(`Content-type`,`multipart/form-data`);
         //         const formData=new FormData(form);
         //         //console.dir(formData);
         //         request.send(formData);
         //         request.addEventListener(`load`, ()=>{
         //             if(request.status===200){
         //                 console.log(`Ok`);
         //                 console.log(request.response);
         //                 statusMessage.textContent=message.success;
         //                 form.reset();
         //                 setTimeout(()=>{
         //                     statusMessage.remove();
         //                 }, 2000);
         //             }else{
         //                  console.log(`Eror`);
         //                  statusMessage.textContent=message.failure;
         //              }
         //         });    
 
 
         //      });
 
 
         //  }
 
         //  function callMeBack(form){
         //      form.addEventListener(`submit`,e=>{
         //         e.preventDefault();
         //         const statusMessage=document.createElement(`img`);
         //         statusMessage.src=message.loading;
         //         // statusMessage.style.cssText=`
         //         //     display: block;
         //         //     margin: 0 auto;
         //         //     width: 30px;
         //         //     height: 30px;
         //         // `;
         //         statusMessage.classList.add(`rot`);
         //         console.log(statusMessage);
         //         //form.append(statusMessage);
         //         form.insertAdjacentElement(`afterend`, statusMessage);
         //         const phone=form.querySelector(`[phone-input]`);
         //         const name=form.querySelector(`[name-input]`);
         //             //  console.log(phone);
         //             //  console.log(name);
         //             const info={
         //                 phone: phone.value,
         //                 name: name.value
 
         //             };
         //             const infoJSON=JSON.stringify(info);
         //             console.log(infoJSON);
         //             const request= new XMLHttpRequest();
         //             request.open(`POST`,`server.php`);
         //             request.setRequestHeader(`Content-type`,`aplication/json`);
         //             request.send(infoJSON);
         //             request.addEventListener(`load`, ()=>{
         //                 if(request.status===200){
         //                     console.log(`Ok`);
         //                     console.log(request.response);
         //                     showThanksModal(message.success);
         //                     statusMessage.remove();
         //                     // statusMessage.textContent=message.success;
         //                     form.reset();
 
         //                     // setTimeout(()=>{
         //                     //     statusMessage.remove();
         //                     // }, 2000);
         //                 }else{
         //                     console.log(`Eror`);
         //                     //statusMessage.textContent=message.failure;
         //                     showThanksModal(message.failure);
         //                 }
         //             }); 
 
 
         //      });
         //     }
     };
 
 
     // const   postConnect =  (url, headers1, body1)=> {
 
     //     const res= fetch(url, {
     //         method: `POST`,
     //         headers: headers1,
     //         body: body1
 
     //     });
 
     //     return  res.json();
     // };
     // async function   postConnect  (url, headers1, body1) {
 
     //     const res= await fetch(url, {
     //         method: `POST`,
     //         headers: headers1,
     //         body: body1
 
     //     });
 
     //     return await res.json();
     // }
 
     async function postConnect(url, headers1, body1) {
         return await fetch(url, {
                 method: `POST`,
                 headers: headers1,
                 body: body1
 
             })
             .then((response) => response.json());
     }
     async function getConnect(url) {
 
         const res = await fetch(url);
         if (!res.ok) {
             throw new Error(`Could not fetch ${url}, status ${res.status} `);
         }
         return res.json();
     }
 
 
 
 
 
 
 
     function callMeBack(form) {
         form.addEventListener(`submit`, e => {
             e.preventDefault();
             const statusMessage = document.createElement(`img`);
             statusMessage.src = message.loading;
             statusMessage.classList.add(`rot`);
             form.insertAdjacentElement(`afterend`, statusMessage);
             const phone = form.querySelector(`[phone-input]`);
             const name = form.querySelector(`[name-input]`);
             const info = {
                 phone: phone.value,
                 name: name.value
 
             };
 
 
             const infoFormData = new FormData(form);
             console.log(Object.fromEntries(infoFormData.entries()));
             const jsonInfoFormData = JSON
                 .stringify(Object.fromEntries(infoFormData.entries()));
 
 
 
 
 
 
             postConnect(`http://localhost:3000/requests`, {
                     "Content-Type": "application/json; charset=UTF-8"
                 }, JSON.stringify(info))
                 //.then(data => data.text())
                 .then(data => {
                     console.log(`Ok`);
                     console.log(data);
                     showThanksModal(message.success);
                     statusMessage.remove();
                 }).catch((e) => {
                     console.log('Error: ' + e.message);
                     //console.log(`Eror`);
                     showThanksModal(message.failure);
                     statusMessage.remove();
                 }).finally(() => {
                     form.reset();
                 });
         });
     }
 
 
 
 
 
 
 
 
     function showThanksModal(messageAnsver) {
         const prevModalDialog = document.querySelector(`.modal__dialog`);
         prevModalDialog.classList.add(`hide`);
         showModal();
         const thanksModal = document.createElement(`div`);
         thanksModal.classList.add(`modal__dialog`);
         thanksModal.innerHTML = `
     <div class="modal__content">
         <div data-close class="modal__close">×</div>
         <div class="modal__title">${messageAnsver}</div>
     </div>
 
     `;
 
         modelCaller.append(thanksModal);
         setTimeout(() => {
 
             thanksModal.remove();
             prevModalDialog.classList.add(`show`);
             prevModalDialog.classList.remove(`hide`);
             closeModel();
 
         }, 5000);
 
 
 
     }
 
 
     //------------------------- End Forms




}


export default forms;