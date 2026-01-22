let container=document.querySelector('.container')
let para=document.querySelector('.para');
let userimage=document.querySelector('.user-image');
let username=document.querySelector('.username');
let role=document.querySelector('.role');

let users=[

    {
        name:"Maria Maximova",
        position:" Backend Developer",
        photo:"https://images.unsplash.com/photo-1745441888183-c217893cfe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRldmVsb3BlciUyMGdpcmwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        text:"A Co-Founder Agreement is a crucial legal document that outlines the terms and conditions of the relationship between co-founders of a business. It typically includes:Equity Ownership: Details on how equity is distributed among co-founders."
    },


    {
        name:"sanu",
        position:" Front End Developer",
        photo:"https://plus.unsplash.com/premium_photo-1663040480219-075412b6a58e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyJTIwZ2lybCUyMHBob3RvfGVufDB8fDB8fHww",
        text:"A Co-Founder Agreement is a crucial legal document that outlines the terms and conditions of the relationship between co-founders of a business. It typically includes:Equity Ownership: Details on how equity is distributed among co-founders."
    },


    {
        name:"Janvi",
        position:"Developer",
        photo:"https://images.unsplash.com/photo-1650075990015-af095f1659e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyJTIwZ2lybCUyMHBob3RvfGVufDB8fDB8fHww",
        text:"A Co-Founder Agreement is a crucial legal document that outlines the terms and conditions of the relationship between co-founders of a business. It typically includes:Equity Ownership: Details on how equity is distributed among co-founders."
    },


    {
        name:"Bach tern",
        position:"Developer",
        photo:"https://images.unsplash.com/photo-1606406054222-9bdfbc43d033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlciUyMGdpcmwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        text:"A Co-Founder Agreement is a crucial legal document that outlines the terms and conditions of the relationship between co-founders of a business. It typically includes:Equity Ownership: Details on how equity is distributed among co-founders."
    },


    {
        name:"Julian Wan",
        position:"Developer",
        photo:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRldmVsb3BlciUyMGdpcmwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        text:"A Co-Founder Agreement is a crucial legal document that outlines the terms and conditions of the relationship between co-founders of a business. It typically includes:Equity Ownership: Details on how equity is distributed among co-founders."
    },


    {
        name:"Jassir jonis",
        position:"Developer",
        photo:"https://images.unsplash.com/photo-1593524843106-11f37c8bf6e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyJTIwZ2lybCUyMHBob3RvfGVufDB8fDB8fHww",
        text:"A Co-Founder Agreement is a crucial legal document that outlines the terms and conditions of the relationship between co-founders of a business. It typically includes:Equity Ownership: Details on how equity is distributed among co-founders."
    },

]
let idx=1;
function update(){
    let {name,position,photo,text} = users[idx]

    para.innerHTML=text;
    userimage.src=photo;
    username.innerHTML=name;
    role.innerHTML=position;

    idx++

    if(idx>users.length -1){
        idx=0;
    }
}
setInterval(update,1000 ) 