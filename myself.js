
//Load my document
document.addEventListener( "DOMContentLoaded", function(){
    // get an id and detect click action
    document.querySelector( "#reveal").onclick = function(){
        // dummy-var to do the equivalent of css
        const vall1 = document.querySelector( "#secondary1").style;
        const vall2 = document.querySelector( "#secondary2").style;
        const vall3 = document.querySelector( "#secondary3").style;
        const vall4 = document.querySelector( "#secondary4").style;
        if(vall1.display == "none"){
            vall1.display = "block";
            vall2.display = "block";
            vall3.display = "block";
            vall4.display = "block";
        }
        else{
            vall1.display = "none";
            vall2.display = "none";
            vall3.display = "none";
            vall4.display = "none";
        }
    }
});
    const h1 = document.querySelector( 'h1');
    h1.style.animationPlayState === 'paused'
    document.querySelector(' .menus').onclick = ()=>{
    if(h1.style.animationPlayState === 'paused'){
    h1.style.animationPlayState = 'running';
    }}
