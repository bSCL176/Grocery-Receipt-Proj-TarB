var arrayProducts = [];
var lastProduct;
var units;
var strQuantity="";
var shoppingCart=[];
var shoppingCartLength=0;
var months=["January", "February","March","April","May","June","July","August","September","October","November", "December"];
var products = [];
function addingItem() {
    var userEnteredItem = document.getElementById('productName').value;
    var productObj = { name: userEnteredItem, price: 0 };
    

    document.getElementById("productName").value = "";
   


    if (userEnteredItem != "") {
        arrayProducts.push(productObj);
        var menuList = document.getElementById("firstSelect");
        var myOption = document.createElement("option");
        myOption.text = productObj.name;
        menuList.add(myOption);
    }
}
function addPriceOfProduct() {
    var item = document.getElementById("firstSelect").value;
    var priceOfProduct = document.getElementById("price").value;
    document.getElementById("price").value = "";
    var i; 
    if (priceOfProduct != "") {
        for (var i = 0; i < arrayProducts.length; i++) {
            if (arrayProducts[i].name == item) {
                arrayProducts[i].price = priceOfProduct;
                var unitMenuList = document.getElementById("secondSelect");
                var myOption = document.createElement("option");
                myOption.text = arrayProducts[i].name + "$" + priceOfProduct + "/unit";
                unitMenuList.add(myOption);
            }
        }
    }
}

    
function addUnitsToProduct1(){
    strQuantity +="1";

}

function addUnitsToProduct2(){
    strQuantity +="2";

}
function addUnitsToProduct3(){
    strQuantity +="3";

}
function addUnitsToProduct4(){
    strQuantity +="4";
}
function addUnitsToProduct5(){
    strQuantity +="5";

}

function addUnitsToProduct6(){
    strQuantity +="6";

}
function addUnitsToProduct7(){
    strQuantity +="7";

}
function addUnitsToProduct8(){
    strQuantity +="8";

}
function addUnitsToProduct9(){
    strQuantity +="9";
}

function addUnitsToProduct0(){
    strQuantity +="0";
}

function addToCart(){
    var totalUnits=parseInt(strQuantity,10);
    strQuantity="";

var item=document.getElementById("secondSelect").value


for(var i=0; i<arrayProducts.length; i++){
    if(item.search(arrayProducts[i].name)>=0){
        var productWithQuantityObject={product:arrayProducts
            [i],units: totalUnits,
            totalPrice: arrayProducts[i].price*totalUnits
        };


        shoppingCart.push(
              productWithQuantityObject);
        shoppingCartLength++;    

        }
    }
}


function amtDue(){
    var grandPrice=0;
    var rowStart=3;
    var tax;
    var table=document.getElementById("thisTable");
    for (var i = 0; i < shoppingCart.length; i++) {
        var cartItem=shoppingCart[i];
        var product2=cartItem.product;
        console.log(product2);



        var total_Price=cartItem.totalPrice;
        grandPrice += total_Price;

        var myUnits=cartItem.units;
        var pricePerUnit=product2.price;
        
        var myRow=table.insertRow(rowStart);
        rowStart++;

        var dataCell1=myRow.insertCell(0);
        var dataCell2=myRow.insertCell(1);
        var dataCell3=myRow.insertCell(2);
        var dataCell4=myRow.insertCell(3);

        dataCell1.innerHTML=product2.name;
        dataCell2.innerHTML=pricePerUnit;
        dataCell3.innerHTML=myUnits;
        dataCell4.innerHTML=total_Price;
    }

    tax = grandPrice*5.0;
    tax = tax/100;

    if(shoppingCart.length>0){
        document.getElementById("totalPrice").innerHTML="TotalPrice: " + parseFloat(grandPrice);
        document.getElementById("totalTax").innerHTML="Taxes: " + tax.toFixed(2);
        document.getElementById("totalAmt").innerHTML="Amount Due "+ (grandPrice + tax);        
    }
    shoppingCart=[];
}
function reset(){
    var table=document.getElementById("thisTable");
    var rowStart=3;
    for(var i=0; i<shoppingCartLength; i++){
        table.deleteRow(rowStart)
    }

    shoppingCartLength=0;
    shoppingCart=[];
    document.getElementById("totalPrice").innerHTML="Total Price: ";
    document.getElementById("totalTax").innerHTML="Taxes: ";
    document.getElementById("totalAmt").innerHTML="Amount Due: ";
}

function myDisplayDateTime(){
    var dateFromTable=document.getElementById("date");
    var time=document.getElementById("time");
    var date=new Date();
    dateFromTable.innerHTML="Date: " + months[date.getMonth()] + " " + date.getDate() +", " + date.getFullYear();



    var hours=date.getHours();
    if (hours>12){
        var min = date.getMinutes();
        if (min<10){
            time.innerHTML = "Time: " + (date.getHours() - 12) + ":0" + date.getMinutes() + " PM";
        }
        else {
             time.innerHTML = "Time: " + (date.getHours() - 12) + ":" + date.getMinutes() + " PM";
             }        
        }
        else {
             if (min<10){
               time.innerHTML = "Time: " + (date.getHours() - 12) + ":0" + date.getMinutes() + " AM";
             }
        
            else {
                 time.innerHTML = "Time: " + (date.getHours() - 12) + ":" + date.getMinutes() + " AM";
        }
    }
}