
let aar =[
    '<img src="https://images.unsplash.com/photo-1594950195709-a14f66c242d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="">',
    '<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"alt="a car image">',
    '  <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="a car image">',
    ' <img src="https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="a car image">',
    ' <img src="https://images.unsplash.com/photo-1580679568899-be51739ba2df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="a car image">',
    ' <img src="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="a car image">',
    ' <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60">'

]
let i = 0

    let images = document.querySelector('.imgcontainer');
    
images.innerHTML=aar[i]

function forwardfnc(){

   
   
    if(i==6 ){
        i=-1
    }
    i++;
    console.log(i);
    images.innerHTML=aar[i];
}
function backwardfnc(){

    if(i==0){
i=7
    }
    i--;
    console.log(i);
    images.innerHTML=aar[i];
}