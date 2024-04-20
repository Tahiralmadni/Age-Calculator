function call(){
    var a= prompt('Enter Your Date of Birth'+' yyyy/mm/dd' , "yyyy/mm/dd");
    var b= new Date(a);
var c= new Date();

var res= c.getFullYear() - b.getFullYear();

document.write('<h1><center><b><i>you are ' + res + ' year old</b></i></center></h1>');
document.write('<h2><center><b><i>اللہ پاک آپ کو درازی عمر بالخیر عطا فرماۓ</b></i></center></h2>');
document.write('<h3> Regards: <span>Tahir Almadni</span></h3>')
}
call()

