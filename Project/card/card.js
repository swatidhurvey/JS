 const data = [
  {
    title: "HTML",
    desc: "HTML is the structure of web Dev",
    img: "https://images.unsplash.com/photo-1590874315261-788881621f7a?w=500"
  },
  {
    title: "Back End",
    desc: "Back End is the structure of web Dev",
    img:  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60"

  },
  
  {
    title: "Java",
    desc: "Back End is the structure of web Dev",
    img: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Python",
    desc: "Back End is the structure of web Dev",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60"

  }
];

const box = document.querySelector(".container");

data.forEach(item => {
  box.innerHTML += `
    <div class="card">
      <img src="${item.img}" alt="">
      <h1>${item.title}</h1>
      <p>${item.desc}</p>
      <div class="btn">
        <button>Learn More</button>
        <button>Pay</button>
      </div>
    </div>
  `;
});
