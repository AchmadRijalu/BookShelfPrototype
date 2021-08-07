const notdone = document.querySelector(".item1");
const done = document.querySelector(".item2");
const ID = "ID";
let arr = [];
 
 
let check = document.getElementById("check");
const key = "key";
const key2 = "key2";
 
 
function buat(){
    const create = getList();
    
    for(let isi of create){
        
        const judul = document.createElement("h2");
        judul.classList.add("jud");
        judul.innerText = isi.title;
        
        const penulis = document.createElement("p");
        penulis.innerText = "Penulis :" + isi.writer;
    
        const tahun = document.createElement("p");
        tahun.innerText = "Tahun Terbit :"+ isi.year;
        const hapus = document.createElement("button");
        const selesai = document.createElement("button");
        const back = document.createElement("button");
    
    
        hapus.classList.add("button2");
        selesai.classList.add("button1");
        back.classList.add("button3");
        back.innerText = "Belum Selesai"
        selesai.innerText = "Selesai";
        hapus.innerText = "Hapus";
    
        const bungkus = document.createElement("div");
        bungkus.classList.add("detail1");
 
        bungkus.append(judul , penulis, tahun, selesai, hapus);
        notdone.append(bungkus);
        
        
        hapus.addEventListener('click', function(event){
            
            let prom = confirm("Apakah yakin mau menghapus?");
            if(prom == true){
                let a = bungkus.remove(event.target.parentElement);
                window.location.reload();
                // deleteItem(event);
                menghapus(event);
            }
            
        })
    
        selesai.addEventListener('click', function(event){
            menghapus(event);
            bungkus.removeChild(selesai);
            bungkus.append(judul , penulis, tahun, back,hapus);
            done.append(bungkus);
            
            

            const obj ={
                id: new Date,
                title: isi.title,
                writer: isi.writer,
                year: isi.year,
                
                isComplete: true
            }
            window.location.reload();
            putListDone(obj);
        })
       
    }
}
function buatDone(){
    const createDone = getListDone();
    
    for(let isi of createDone){
        let oop = 0;
        const judul = document.createElement("h2");
        judul.innerText = isi.title;
        
        const penulis = document.createElement("p");
        penulis.innerText = "Penulis :" + isi.writer;
    
        const tahun = document.createElement("p");
        tahun.innerText = "Tahun Terbit :"+ isi.year;
        const hapus = document.createElement("button");
        const selesai = document.createElement("button");
        const back = document.createElement("button");
    
    
        hapus.classList.add("button2");
        selesai.classList.add("button1");
        back.classList.add("button3");
        back.innerText = "Belum Selesai"
        selesai.innerText = "Selesai";
        hapus.innerText = "Hapus";
    
        const bungkus = document.createElement("div");
        bungkus.classList.add("detail2");
            
        bungkus.append(judul , penulis, tahun, back, hapus);
        done.append(bungkus);
        
        hapus.addEventListener('click', function(event){
            let prom = confirm("Apakah yakin mau menghapus?");
            if(prom == true){
                menghapusDone(event);
                window.location.reload();
            }
            
        })
    
        back.addEventListener('click', function(event){
            menghapusDone(event);
            bungkus.remove(event.target.parentElement);
            bungkus.removeChild(back);
            bungkus.append(judul , penulis, tahun, selesai,hapus);
            notdone.append(bungkus);
 
            
            const obj ={
                id: new Date,
                title: isi.title,
                    writer: isi.writer,
        year: isi.year,
                
                isComplete: true
            }
            window.location.reload();
            putList(obj);
        })
        
    }
}
 
 
function make(title , writer, year){
    const judul = document.createElement("h2");
    judul.innerText = title;
    
    const penulis = document.createElement("p");
    penulis.innerText = "Penulis :" + writer;
 
    const tahun = document.createElement("p");
    tahun.innerText = "Tahun Terbit :"+ year;
    const hapus = document.createElement("button");
    const selesai = document.createElement("button");
    const back = document.createElement("button");
 
 
    hapus.classList.add("button2");
    selesai.classList.add("button1");
    back.classList.add("button3");
    back.innerText = "Belum Selesai"
    selesai.innerText = "Selesai";
    hapus.innerText = "Hapus";
 
    const bungkus = document.createElement("div");
    bungkus.classList.add("detail1");
        
    bungkus.append(judul , penulis, tahun, selesai, hapus);
    notdone.append(bungkus);
 
    hapus.addEventListener('click', function(event){
        removeID(event);
     })
    
    return bungkus;
    
}
 
 
function menghapus(index){
    const item = index.target;
    const detail = item.parentElement;
    detail.remove();
    deleteItem(detail);
}
function menghapusDone(index){
    const item = index.target;
    const detail = item.parentElement;
    detail.remove();
    deleteItemDone(detail);
}
 
function deleteItemDone(index){
    let item = JSON.parse(localStorage.getItem(key2));
    item.splice(index,1); 
    localStorage.setItem(key2, JSON.stringify(item));
}
function deleteItem(index){
    let item = JSON.parse(localStorage.getItem(key));
    item.splice(index ,1); 
    localStorage.setItem(key, JSON.stringify(item));
}
function tambah(){
    const judul = document.getElementById("judul").value;
    const penulis = document.getElementById("penulis").value;
    const tahun = document.getElementById("tahun").value;
    
    
    
    if(check.checked){
        const insert = make(judul , penulis , tahun);
        const obj ={
            id: new Date,
            title: judul,
            writer: penulis,
            year: tahun,
            isComplete: true
        }
      putListDone(obj);
    }
    else{
 
        const insert = make(judul , penulis , tahun);
        
        const obj ={
            id : +new Date(),
            title: judul,
            writer: penulis,
            year: tahun,
            isComplete: false
          }
        //   putList(obj);
         
         arr.push(insert);
         putList(obj);
    }  
}
 
function checkStorage(){
    return typeof(Storage) !== "undefined";
}
 
function putList(i){
    if(checkStorage()){
        // let data = [];
        arr;
        if(localStorage.getItem(key) === null){
            arr = [];
        }
        else{
            arr = JSON.parse(localStorage.getItem(key));
        }
        arr.push(i);
        
        localStorage.setItem(key, JSON.stringify(arr));
    }
}
function putListDone(j){
    if(checkStorage()){
        let data = [];
        if(localStorage.getItem(key2) === null){
            data = [];
        }
        else{
            data = JSON.parse(localStorage.getItem(key2));
        }
        data.push(j);
        localStorage.setItem(key2, JSON.stringify(data));
    }
}
function getList() {
    if (checkStorage()) {
        return JSON.parse(localStorage.getItem(key)) || arr;


    } else {
        return [];
    }
}
function getListDone() {
    if (checkStorage()) {
        return JSON.parse(localStorage.getItem(key2)) || [];
    } else {
        return [];
    }
}
 
    
    document.addEventListener("DOMContentLoaded", function () {
 
        const form = document.querySelector(".form");
    form.addEventListener("submit", function(event){
        tambah();


        
       document.getElementById("judul").value = "";
        document.getElementById("penulis").value = "";
       document.getElementById("tahun").value = "";
       
 
    })
 
    });
    
 
window.addEventListener("load", function(event){
    if(checkStorage){
        if(localStorage.getItem(key) != null){
            const load = getList();
             buat(load);
            
           
        }
        if(localStorage.getItem(key2) != null){
            const loadDone = getListDone();
            buatDone(loadDone);
            
        }
    }
    else{
        alert("Browser yang Anda gunakan tidak mendukung Web Storage")
 
    }
});