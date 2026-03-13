function openInspo(){

document.getElementById("content").innerHTML=

`

<h3>Inspo</h3>

<input type="file" id="imgInput">

<div class="inspo-grid" id="gallery"></div>

`

document.getElementById("imgInput").addEventListener("change",function(){

let file=this.files[0]

let reader=new FileReader()

reader.onload=function(){

let img=document.createElement("img")

img.src=reader.result

document.getElementById("gallery").appendChild(img)

}

reader.readAsDataURL(file)

})

}