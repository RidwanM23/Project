var nama = "Ridwan";
var kelas = "X PPLG 2";
var ps = "PPLG";
var semester = "1";
var ta = "2023-2024";
var pkn = 97;
var pkn1 = "";
var sunda = 90;
var sunda1 = 89;
var agama = 76;
var agama1 = 78;
var sejarah = 91;
var sejarah1 = 72;
var inggris = 90;
var inggris1 = 93;
var inf = 92;
var inf1 = 90;
var senbud = 92;
var senbud1 = 90;
var ddpk = 85;
var ddpk1 = 75;
var ipas = 99;
var ipas1 = 70;
var mtk = 81;
var mtk1 = 74;
var indo = 92;
var indo1 = 91;
var pjok = 87;
var pjok1 = 65;

document.getElementById('nama').innerHTML = nama;
document.getElementById('kelas').innerHTML = kelas;
document.getElementById('semester').innerHTML = semester;
document.getElementById('ps').innerHTML = ps;
document.getElementById('ta').innerHTML = ta;



if(pkn1 >= 80 && pkn1 <= 100 )
{
    document.getElementById('np').innerHTML = pkn1;
    document.getElementById('pkn').innerHTML = "sangat baik dalam memahami pancasila dan kewarganegaraan";
}

else if (pkn1 <= 80  && pkn1 >0)
{
    document.getElementById('np').innerHTML = pkn1;
    document.getElementById('pkn').innerHTML = "perlu ditingkatkan dalam memahami perundang-undangan";

}
else{
    document.getElementById('pkn').innerHTML = "";
}
if(pkn >= 80 && pkn <=100 )
{
    document.getElementById('np1').innerHTML = pkn;
    document.getElementById('pkn1').innerHTML = "sangat baik dalam memahami pancasila dan kewarganegaraan";
}
 else if(pkn <= 80 && pkn >0 )
{
    document.getElementById('np1').innerHTML = pkn;
    document.getElementById('pkn1').innerHTML = "perlu ditingkatkan dalam memahami perundang-undangan";
}
else {
    document.getElementById('pkn1').innerHTML = "";

}
if(sunda >= 80 && sunda <= 100)
{
    document.getElementById('ns').innerHTML = sunda;
    document.getElementById('sunda').innerHTML = "sangat baik dalam memahami aksara Sunda";
}

else if (sunda <= 80 && sunda <= 100)
{
    document.getElementById('ns').innerHTML = sunda;
    document.getElementById('sunda').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('sunda').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(sunda1 >= 80 && sunda1 <= 100 )
{
    document.getElementById('ns1').innerHTML = sunda1;
    document.getElementById('sunda1').innerHTML = "sangat baik dalam memahami aksara Sunda";
}
 else if(sunda1 <=80 && sunda1 <= 100 )
{
    document.getElementById('ns1').innerHTML = sunda1;
    document.getElementById('sunda1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('sunda1').innerHTML = "perlu ditingkatkan dalam memahami";

}
if(sejarah >= 80 && sejarah <= 100)
{
    document.getElementById('nse').innerHTML = sejarah;
    document.getElementById('sejarah').innerHTML = "sangat baik dalam memahami";
}

else if (sejarah <= 80 && sejarah <= 0)
{
    document.getElementById('nse').innerHTML = sejarah;
    document.getElementById('sejarah').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('sejarah').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(sejarah1 >= 80 && sejarah1 <= 100 )
{
    document.getElementById('nse1').innerHTML = sejarah1;
    document.getElementById('sejarah1').innerHTML = "sangat baik dalam memahami";
}
 else if(sejarah1 <= 80 && sejarah1 >= 0 )
{
    document.getElementById('nse1').innerHTML = sejarah1;
    document.getElementById('sejarah1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('sejarah1').innerHTML = "perlu ditingkatkan dalam memahami";

}
if(inggris >= 80 && inggris <= 100)
{
    document.getElementById('ni').innerHTML = inggris;
    document.getElementById('inggris').innerHTML = "sangat baik dalam memahami";
}

else if (inggris <= 80 && inggris <= 0)
{
    document.getElementById('ni').innerHTML = inggris;
    document.getElementById('inggris').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('inggris').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(inggris1 >= 80 && inggris1 <= 100 )
{
    document.getElementById('ni1').innerHTML = inggris1;
    document.getElementById('inggris1').innerHTML = "sangat baik dalam memahami";
}
 else if(inggris1 <= 80 && inggris1 <= 0 )
{
    document.getElementById('ni1').innerHTML = inggris1;
    document.getElementById('inggris1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('inggris1').innerHTML = "perlu ditingkatkan dalam memahami";

}
if(inf >= 80 && inf <= 100)
{
    document.getElementById('nif').innerHTML = inf;
    document.getElementById('infor').innerHTML = "sangat baik dalam memahami";
}

else if (inf <= 80 && inf <= 0)
{
    document.getElementById('nif').innerHTML = inf;
    document.getElementById('infor').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('infor').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(inf1 >= 80 && inf1 <= 100 )
{
    document.getElementById('nif1').innerHTML = inf1;
    document.getElementById('informatika1').innerHTML = "sangat baik dalam memahami";
}
 else if(inf1 <= 80 && inf1 <= 0 )
{
    document.getElementById('nif1').innerHTML = inf1;
    document.getElementById('informatika1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('informatika1').innerHTML = "perlu ditingkatkan dalam memahami";

}
if(senbud >= 80 && senbud <= 100)
{
    document.getElementById('nis').innerHTML = senbud;
    document.getElementById('senbud').innerHTML = "sangat baik dalam memahami";
}

else if (senbud <= 80 && senbud <= 0)
{
    document.getElementById('nis').innerHTML = senbud;
    document.getElementById('senbud').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('senbud').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(senbud1 >= 80 && senbud1 <= 100 )
{
    document.getElementById('nis1').innerHTML = senbud1;
    document.getElementById('senbud1').innerHTML = "sangat baik dalam memahami";
}
 else if(senbud1 <= 80 && senbud1 <= 0 )
{
    document.getElementById('nis1').innerHTML = senbud1;
    document.getElementById('senbud1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('senbud1').innerHTML = "perlu ditingkatkan dalam memahami";

}
if(ddpk >= 80 && ddpk <= 100)
{
    document.getElementById('nd').innerHTML = ddpk;
    document.getElementById('ddpk').innerHTML = "sangat baik dalam memahami";
}

else if (ddpk <= 80 && ddpk <= 0)
{
    document.getElementById('nd').innerHTML = ddpk;
    document.getElementById('ddpk').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('ddpk').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(ddpk1 >= 80 && ddpk1 <= 100 )
{
    document.getElementById('nd1').innerHTML = ddpk1;
    document.getElementById('ddpk1').innerHTML = "sangat baik dalam memahami";
}
 else if(ddpk1 <= 80 && ddpk1 >= 0 )
{
    document.getElementById('nd1').innerHTML = ddpk1;
    document.getElementById('ddpk1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('ddpk1').innerHTML = "perlu ditingkatkan dalam memahami";

}
if(ipas >= 80 && ipas <= 100)
{
    document.getElementById('nip').innerHTML = ipas;
    document.getElementById('ipas').innerHTML = "sangat baik dalam memahami";
}

else if (ipas <= 80 && ipas <= 0)
{
    document.getElementById('nip').innerHTML = ipas;
    document.getElementById('ipas').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('ipas').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(ipas1 >= 80 && ipas1 <= 100 )
{
    document.getElementById('nip1').innerHTML = ipas1;
    document.getElementById('ipas1').innerHTML = "sangat baik dalam memahami";
}
 else if(ipas1 <= 80 && ipas >= 0 )
{
    document.getElementById('nip1').innerHTML = ipas1;
    document.getElementById('ipas1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('ipas1').innerHTML = "perlu ditingkatkan dalam memahami";

}
if(mtk >= 80 && mtk <= 100)
{
    document.getElementById('nm').innerHTML = mtk;
    document.getElementById('matematika').innerHTML = "sangat baik dalam memahami";
}

else if (mtk <= 80 && mtk <= 0)
{
    document.getElementById('nm').innerHTML = mtk;
    document.getElementById('matematika').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('matematika').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(mtk1 >= 80 && mtk1 <= 100 )
{
    document.getElementById('nm1').innerHTML = mtk1;
    document.getElementById('matematika1').innerHTML = "sangat baik dalam memahami";
}
 else if(mtk1 <= 80 && mtk1 >= 0 )
{
    document.getElementById('nm1').innerHTML = mtk1;
    document.getElementById('matematika1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('matematika1').innerHTML = "perlu ditingkatkan dalam memahami";

}
if(indo >= 80 && indo <= 100)
{
    document.getElementById('nib').innerHTML = indo;
    document.getElementById('indo').innerHTML = "sangat baik dalam memahami";
}

else if (indo <= 80 && indo <= 0)
{
    document.getElementById('nib').innerHTML = indo;
    document.getElementById('indo').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('indo1').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(indo1 >= 80 && indo1 <= 100 )
{
    document.getElementById('nib1').innerHTML = indo1;
    document.getElementById('indo1').innerHTML = "sangat baik dalam memahami";
}
 else if(indo1 <= 80 && indo1 <= 0 )
{
    document.getElementById('nib1').innerHTML = indo1;
    document.getElementById('indo1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('indo1').innerHTML = "perlu ditingkatkan dalam memahami";

}
if(pjok >= 80 && pjok <= 100)
{
    document.getElementById('npo').innerHTML = pjok;
    document.getElementById('pjok').innerHTML = "sangat baik dalam memahami";
}

else if (pjok <= 80 && pjok <= 0)
{
    document.getElementById('npo').innerHTML = pjok;
    document.getElementById('pjok').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('pjok').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(pjok1 >= 80 && pjok1 <= 100 )
{
    document.getElementById('npo1').innerHTML = pjok1;
    document.getElementById('pjok1').innerHTML = "sangat baik dalam memahami";
}
 else if(pjok1 <= 80 && pjok1 >= 0 )
{
    document.getElementById('npo1').innerHTML = pjok1;
    document.getElementById('pjok1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('pjok1').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(agama >= 80 && agama <= 100)
{
    document.getElementById('nag').innerHTML = agama;
    document.getElementById('agama').innerHTML = "sangat baik dalam memahami";
}

else if (agama <= 80 && agama >= 0)
{
    document.getElementById('nag').innerHTML = agama;
    document.getElementById('agama').innerHTML = "perlu ditingkatkan dalam memahami";

}
else{
    document.getElementById('agama').innerHTML = "perlu ditingkatkan dalam memahami";
}
if(agama1 >= 80 && agama1 <= 100 )
{
    document.getElementById('nag1').innerHTML = agama1;
    document.getElementById('agama1').innerHTML = "sangat baik dalam memahami";
}
 else if(agama1 <= 80 && agama1 >= 0 )
{
    document.getElementById('nag1').innerHTML = agama1;
    document.getElementById('agama1').innerHTML = "perlu ditingkatkan dalam memahami";
}
else {
    document.getElementById('agama1').innerHTML = "perlu ditingkatkan dalam memahami";
}
switch(pkn <= 100)
{
    case 90:
        document.getElementById('pkn').innerHTML = pkn;
}