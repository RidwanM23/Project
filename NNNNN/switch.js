var pkn = -10;
var pkn1 = -110;
var sunda = 76;
var sunda1 = 80;
var agama = 76;
var agama1 = 78;
var sejarah = 91;
var sejarah1 = 72;
var inggris = 90;
var inggris1 = 93;
var inf = 92;
var inf1 = 90;
var senbud = 80;
var senbud1 = 90;
var ddpk = 85;
var ddpk1 = 75;
var ipas = 80;
var ipas1 = 70;
var mtk = 81;
var mtk1 = 74;
var indo = 92;
var indo1 = 91;
var pjok = 87;
var pjok1 = 65;



if(pkn1 >= 80 && pkn1 <= 100 )
{
    document.getElementById('np').innerHTML = pkn1;
    document.getElementById('pkn').innerHTML = "sangat baik dalam memahami";
}

else if (pkn1 <= 80 && pkn1 >0)
{
    document.getElementById('np').innerHTML = pkn1;
    document.getElementById('pkn').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('pkn').innerHTML = "";
}
if(pkn >= 80 && pkn <=100 )
{
    document.getElementById('np1').innerHTML = pkn;
    document.getElementById('pkn1').innerHTML = "sangat baik dalam memahami";
}
 else if(pkn <= 80 && pkn >0 )
{
    document.getElementById('np1').innerHTML = pkn;
    document.getElementById('pkn1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('pkn1').innerHTML = "";

}
if(sunda >= 80)
{
    document.getElementById('ns').innerHTML = sunda;
    document.getElementById('sunda').innerHTML = "sangat baik dalam memahami";
}

else if (sunda <= 80)
{
    document.getElementById('ns').innerHTML = sunda;
    document.getElementById('sunda').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('sunda').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(sunda1 >= 80 )
{
    document.getElementById('ns1').innerHTML = sunda1;
    document.getElementById('sunda1').innerHTML = "sangat baik dalam memahami";
}
 else if(sunda1 <= 80 )
{
    document.getElementById('ns1').innerHTML = sunda1;
    document.getElementById('sunda1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('sunda1').innerHTML = "perlu ditingkatkan dalam memahami";

}
