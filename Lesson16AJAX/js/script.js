`use strict`;
const inputRUB=document.querySelector(`#rub`);
const inputUSD=document.querySelector(`#usd`);
console.log(inputRUB);
console.log(inputUSD);

inputRUB.addEventListener(`input`,()=>{
    const request=new XMLHttpRequest();
    request.open(`GET`,`js/current.json`);
    request.setRequestHeader(`Content-type`,`aplication/json; charset=utf-8`);
    request.send();
    request.addEventListener(`readystatechange`, ()=>{
        //console.log(request.readyState);
        if(request.readyState === 4 && request.status=== 200){
            console.log(request.response);
            const date=JSON.parse(request.response);
            const usdCourse=date.current.usd;
            console.log(inputRUB.value*usdCourse);
            inputUSD.value=(+inputRUB.value/usdCourse).toFixed(2);
        } else{
            inputUSD.value="Что-то не так";
        }
    });






    //staus - номер (например 404)
    //stausText - текст (например Not Found)
    //response - ответ от сервера
    //readyState - свойства XMLHttpRequest {

    // Значение	Состояние	Описание
    // 0	    UNSENT	    Объект XMLHttpRequest был создан, метод open() объекта не вызывался.
    // 1	    OPENED	    Метод open() объекта был вызван. Во время этого состояния заголовки запросов могут быть установлены с помощью метода setRequestHeader() и метод send() может быть вызван, который инициирует отправку запроса.
    // 2	    HEADERS_RECEIVED	Метод send() объекта был вызван, заголовки и статус доступны.
    // 3	    LOADING	    роисходит загрузка тела ответа сервера. Если значение свойства responseType соответствует значению "text" или пустой строке, то значение свойства responseText будет содержать частичные данные.
    // 4	    DONE	    Операция завершена. Это может означать, что передача данных была завершена успешно или не удалась.
    

//     }





});


