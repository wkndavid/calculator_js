function insert(num){
    var numero = document.getElementById('output').innerHTML;
    document.getElementById('output').innerHTML=numero + num;
} 
function clean(){
    document.getElementById('output').innerHTML = ''; 
}
function apagar1(){
    var res = document.getElementById('output').innerHTML;
    document.getElementById('output').innerHTML = res.substring(0, res.length -1);

}
function calcular(){
    var res = document.getElementById('output').innerHTML;
    if (res){
         document.getElementById('output').innerHTML = eval(res);
    } else {
        document.getElementById('output').innerHTML = 'Error';
    }
}