import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{S as p}from"./assets/vendor-c9def49e.js";const n=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],r=n.map(o=>`<li class="gallery-item">
    <a
      class="gallery-link"
      href="${o.original}">
      <img
        class="gallery-image"
        src="${o.preview}"
        alt="${o.description}"
        width="200"
        height="360"
      />
    </a>
  </li>`).join(`

`),c=document.querySelector(".gallery");c.insertAdjacentHTML("afterbegin",r);document.querySelector(".gallery").addEventListener("click",o=>o.preventDefault());const l=new p(".gallery-link",{captionsData:"alt",captionDelay:250,alertError:!1});l.on("shown.simplelightbox",()=>{const o=document.querySelector(".sl-wrapper"),t=document.querySelector(".sl-counter"),e=document.querySelector(".sl-close"),a=document.querySelectorAll(".sl-wrapper .sl-navigation button");o.style.backgroundColor="rgba(46, 47, 66, 0.8)",t.style.color="#fff",t.style.fontFamily="Montserrat",t.style.top="16px",e.style.color="#fff",a.forEach(i=>i.style.color="#fff")});
//# sourceMappingURL=commonHelpers.js.map
