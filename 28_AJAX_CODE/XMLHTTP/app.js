const req = new XMLHttpRequest();

req.onload = function() {
    console.log('成功！！！');
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
    
}

req.onerror = function() {
    console.log('失敗！！');
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-jpy');
req.send();