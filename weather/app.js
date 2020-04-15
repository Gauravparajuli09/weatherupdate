window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description');
    let temperaturedegree=document.querySelector(".temperature-degree");
    let locationtimezone=document.querySelector(".location-timezone");
   let temperature=document.querySelector("..temperature");
   let tempspan=document.querySelector(".temperature span");

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy='https://cors-anywhere.herokuapp.com/';

            const api=`${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
            fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                const {temperature,summary,icon} = data.currently;
                temperaturedegree.textContent=temperature;
                temperatureDescription.textContent=summary;
                locationtimezone.textContent=data.timezone;
                setIcons(icon,document.querySelector(".icon"));


                temperature.addEventListener('click'()=>{
                   if(tempspan.textContent==='F'){
                       tempspan.textContent="c";
                   } else{
                       tempspan.textContent="F";
                   }
                })
            });
                
        });
    }
    function setIcons(icon,iconID){
        const skycons=new skycons({color:"white"});
        const currentIcon = icon.replace(/-/g,'_').toUpperCase();
        skycons.play();
        return skycons.set(iconID, skycons[currentIcon]);
    }

});