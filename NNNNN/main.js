var nama = "Ridwan";
var kelas = "X PPLG 2";
var ps = "PPLG";
var semester = "1";
var ta = "2023-2024";
var kkm = 75;
var pkn = 76;
var pkn1 = 74;
var sunda = 76;
var sunda1 = 74;
var agama = 74;
var agama1 = 74;
var sejarah = 74;
var sejarah1 = 74;
var inggris = 74;
var inggris1 = 74;
var inf = 74;
var inf1 = 74;
var senbud = 74;
var senbud1 = 74;
var ddpk = 74;
var ddpk1 = 74;



if(pkn >= kkm)
{
    document.getElementById('np').innerHTML = pkn;
    document.getElementById('pkn').innerHTML = "sangat baik dalam memahami";
}
else if(pkn1 >= kkm)
{
    document.getElementById('np1').innerHTML = pkn1;
    document.getElementById('pkn1').innerHTML= "sangat baik dalam memahami"
}
else{
    document.getElementById('pkn').innerHTML = "perlu ditingkatkan dalam memahami";
}


