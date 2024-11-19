var greeting="Howdy ";
var name='Molly';
var msg= ", please make your order:";
var welcome=greeting+name+msg;


var sign= 'Yes';
var tileCost1=5;
var totalTiles1=sign.length;
var subTotal1=tileCost1*totalTiles1;
var shipping1=7;
var grandTotal1=subTotal1+shipping1;



var elSign=document.getElementById ('customSign');
elSign.textContent= sign;

var elTileCost=document.getElementById ('tileCost');
elTileCost.textContent= '$'+ tileCost1;

var elTotalTiles=document.getElementById ('totalTiles');
elTotalTiles.textContent= totalTiles1;

var elSubTotal=document.getElementById ('subTotal');
elSubTotal.textContent= '$' + subTotal1;

var elShipping=document.getElementById ('shipping');
elShipping.textContent= '$' + shipping1;

var elGrandTotal=document.getElementById ('grandTotal');
elGrandTotal.textContent= '$' + grandTotal1;

