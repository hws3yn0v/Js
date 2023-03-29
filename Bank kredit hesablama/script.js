function btn(){
    var amount = Number(document.getElementById("credit_amount").value);
    var month = Number(document.getElementById("credit_month").value);
    var percent = Number(document.getElementById("credit_percent").value);

    if(isNaN(amount && month && percent)){
        alert('Rəqəm daxil edin!');
    }
    else{
        var mebleg = amount * percent / month / 8
        document.getElementById("month_price").innerHTML = mebleg;
    }
}