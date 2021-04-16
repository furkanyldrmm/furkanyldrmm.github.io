$(function() {

    var input=$("#input1");
var button=$("#button");
var kare =$(".square");
var site =$(".tire");
var close=$("#clo");
var input2=$("#input2");
var ekran=$(".close");
var ekran2=$(".baslik");
var selectbox=$("#inputs2");

$( "#myselect option:selected" ).text();

close.click(function(){

  
ekran.css("display","none");
ekran2.css("display","none");
kare.css("display","none");
site.css("display","none");
});

selectbox.change(function(){
   var type1= $( "#inputs1 :selected" ).val();
   var type2=$(" #inputs2 :selected").val();
   if(type1-type2<0){

var index=Math.abs(type1-type2);
if(type1==1){
    var value=document.getElementById("input1").value;
    console.log(value);
    var index2=8*(Math.pow(1024,index-1));
 
    var result=value/index2;

    document.getElementById("input2").value =result;


}


   }
   else{

   }

})

input.change(function(){
    var type1= $( "#inputs1 :selected" ).val();
    var type2=$(" #inputs2 :selected").val();
    if(type1-type2<0){
 
 var index=Math.abs(type1-type2);
 if(type1==1){
     var value=document.getElementById("input1").value;
     console.log(value);
     var index2=8*(Math.pow(1024,index-1));
  
     var result=value/index2;
 
     document.getElementById("input2").value =result;
 
 
 }
 
 
    }
    else{
 
    }
 
 })
 
});












