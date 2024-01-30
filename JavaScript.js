// ✅----------------------------First Project--------------------------
// // let rem=document.querySelector("#remove");
// let ad=document.querySelector("#add");
// //why we dont use flag bcoz we have 2 buttons flag used int 1 button
// let flag=0;
// ad.addEventListener("click",function(){
//     if(flag==0){
//         ad.innerHTML="Remove";
//         ad.style.backgroundColor="rgb(194, 193, 193)";
//         ad.style.color="black";
//         flag=1;
//     }else{
//         ad.innerHTML="Add Friend";
//         ad.style.backgroundColor="cadetblue";
//         ad.style.color="white";
//         flag=0;
//     }
// })
// // rem.addEventListener("click",function(){
// //     rem.innerHTML="Share";
// //     ad.innerHTML="Add Friends";
// // })



// ✅----------------------------Second Project--------------------------
// let love=document.querySelector("i");
// let con=document.querySelector("#card");
// con.addEventListener("dblclick",function(){
//     love.style.transform="translate(-50%,-50%) scale(1)";
//     love.style.opacity=0.8;
//     setTimeout(function(){
//         love.style.opacity=0;
//     },1000);
//     setTimeout(function(){
//         love.style.transform="translate(-50%,-50%) scale(0)";
//     },2000);
// });


// ✅----------------------------third Project--------------------------

// let cur=document.querySelector(".cursor");
// let main=document.querySelector("#main");

// main.addEventListener("mousemove",function(dets){
//     cur.style.left=dets.x+"px";
//     cur.style.top=dets.y+"px";
// });



// ✅----------------------------Fourth Project--------------------------
// var elem=document.querySelectorAll(".elem");
// -----------------------1st Method------------------
// let elemimg=document.querySelector("#elem1 img");
// elem.addEventListener("mousemove",function(dets){
//     elemimg.style.left=dets.x+"px";
//     elemimg.style.top=dets.y+"px";
// })
// elem.addEventListener("mouseenter",function(){
//     elemimg.style.opacity=1;
// })
// elem.addEventListener("mouseleave",function(){
//     elemimg.style.opacity=0;
// })
//---------------------------2nd Method----------------------
// elem.forEach(function(val){
//     val.addEventListener("mouseenter",function(){
//         val.childNodes[3].style.opacity=1;
//     });
//     val.addEventListener("mouseleave",function(){
//         val.childNodes[3].style.opacity=0;
//     });
//     val.addEventListener("mousemove",function(dets){
//         val.childNodes[3].style.left=dets.x+"px";
//         val.childNodes[3].style.top=dets.y+"px";
//     });
// });




// ✅----------------------------Fifth Project--------------------------

// let arr=[
//     {dp:"https://th.bing.com/th/id/OIP.5X-s0Oj8MT_nJjHIkFzCWQAAAA?rs=1&pid=ImgDetMain",story:"https://th.bing.com/th/id/OIP.Qr3mU0au8271ihxvHVrUFAHaFM?w=655&h=460&rs=1&pid=ImgDetMain"},
//     {dp:"https://static.toiimg.com/thumb/msid-88708589,imgsize-8804,width-400,resizemode-4/88708589.jpg",story:"https://1.bp.blogspot.com/-Zmkf8IQTLT4/YJPVCK8OwiI/AAAAAAAAI0Y/ErraBtZs7e0JS19bB3ShJhL6szyC83FMgCLcBGAsYHQ/s0/Aishwarya-Ojha.jpg"},
//     {dp:"https://celeblifebio.com/wp-content/uploads/2021/07/109039081_656125155114062_7544512855499915049_n-819x1024.jpg",story:"https://assets.vogue.in/photos/5efdaaab9aeed766057e7d77/2:3/w_2560%2Cc_limit/bulbbul.jpg"},
//     {dp:"https://hotgossips.in/wp-content/uploads/2020/06/tripti_dimri-20180807-0007-696x869.jpg", story:"https://i2.cinestaan.com/image-bank/1500-1500/184001-185000/184477.jpg"}, 
//     {dp:"https://hotgossips.in/wp-content/uploads/2020/06/tripti_dimri-20180807-0007-696x869.jpg", story:"https://i2.cinestaan.com/image-bank/1500-1500/184001-185000/184477.jpg"},
  
// ];
// let clutter="";
// arr.forEach(function(val,idx){
//    clutter+=`<div class="story">
//    <img id="${idx}" src="${val.dp}" alt="">
//    </div>`
// });
// document.querySelector("#storyian").innerHTML=clutter;
// let st=document.querySelector("#storyian");
// st.addEventListener("click",function(dets){
//      document.querySelector("#full-scr").style.display="block";
//      document.querySelector("#full-scr").style.backgroundImage=`url(${(arr[dets.target.id].story)})`;

//      setTimeout(function(){
//         document.querySelector("#full-scr").style.display="none";
//      },3000);
// });