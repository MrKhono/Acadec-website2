function detecterSysteme(){

    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("android")){
        return window.location.href="https://play.google.com/store/apps/details?id=sn.layetech.acadec&hl=fr&gl=US&pli=1";
        
    }
    if (userAgent.includes("ios") || userAgent.includes("ipad") || userAgent.includes("mac")) {
       return window.location.href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwio_6-Bjt2EAxX2AvsDHejpDeUQFnoECBgQAQ&url=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Facadec%2Fid6448538182&usg=AOvVaw16iW7VzdccIcTbdCaUgwvR&opi=89978449"; 
        
    }
}

document.getElementById("detecter").addEventListener('click', function(){
    detecterSysteme();
});


function onSubmit(token) {
  document.getElementById("demo-form").submit();
}


