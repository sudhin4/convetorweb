const convert = () => {
    let amount = document.getElementById('Enteritem').value;
    let from = document.getElementById('option11').value;
    let to = document.getElementById('option22').value;

    var myHeaders = new Headers();
    myHeaders.append("apikey", "FSBW0tWC5TcWfcKQNk9Uwse1HYPTbQ0e");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/convert?to=" + to +"&from="+ from +"&amount="+amount+"", requestOptions)
        .then(response => response.json())
        .then(json => {
            let quotation = json.result;
            document.getElementById("result").innerHTML = quotation;
        })
        .catch(error => console.log('error', error));


}












