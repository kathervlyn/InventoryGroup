let inventoryOpen = false;

/*En liste med 5 ting*/
let inventar = [`<div onclick="flytt(1)" id="1">
<img src="Images/sko.png" alt="Bilde av en Sko">
<div>Sko</div>
</div>`, `<div onclick="flytt(2)" id="2">
<img src="Images/kvikklunsj.png" alt="Bilde av kvikklunsj">
<div>Kvikklunsj</div>
</div>`, `<div onclick="flytt(3)" id="3">
<img src="Images/voffsen.png" height="300px" alt="Bilde av Frøya">
<div>Frøya</div>
</div>`, `<div onclick="flytt(4)" id="4">
<img src="Images/potion.png" alt="Bilde av Potion">
<div>Potion</div>
</div>`, `<div onclick="flytt(5)" id="5">
<img src="Images/dolk.png" alt="Bilde av sverd">
<div>Sverd</div>
</div>`]

let flyttet = ['n', 'n', 'n', 'n', 'n'];

function openInventory() {
    if (inventoryOpen == true) {
        document.getElementById('inventoryContainer').innerHTML = `
        <div id="inventory">
                Inventory <button id="closeOpen" onclick="openInventory()">O</button>
            </div>`;
            inventoryOpen = false;
    }
    else if (inventoryOpen == false) {
        document.getElementById('inventoryContainer').innerHTML = /*HTML*/`
        <div id="inventory">
        Inventory <button id="closeOpen" onclick="openInventory()" style= "color: red"; >X</button>
        </div>
        
        <div id="inventoryContent">
        </div>`;

        for(i = 0; i < inventar.length; i++){
            if (flyttet[i] == 'y') {
                 document.getElementById('inventoryContent').innerHTML += inventar[i];
            } 
         }

        inventoryOpen = true;
    }

}

let chestOpen = false;

function openChestBox() {
    if (chestOpen == true) {
        document.getElementById('chestContainer').innerHTML = /*HTML*/`<div id="chestBox">
        <img src="Images/kiste.png" onclick="openChestBox()" alt="Bilde av kiste">
    </div>`;
        chestOpen = false;
    }
    else if (chestOpen == false) {
        document.getElementById('chestContainer').innerHTML = /*HTML*/`
    <div id="chestBox"></div>
    <img src="Images/kiste.png" onclick="openChestBox()" alt="Bilde av kiste">
        </div>
            <div id="items">

            </div>
  `;
        for(i = 0; i < inventar.length; i++){
           if (flyttet[i] == 'n') {
                document.getElementById('items').innerHTML += inventar[i];
           } 
        }
        chestOpen = true;
    }
}

function flytt(x){
    if (flyttet[x-1] == 'n') {
       // document.getElementById('items').innerHTML += inventar[x-1];
        flyttet[x-1] = 'y';
        openChestBox();
        openChestBox();
        openInventory();
        openInventory();
    }
    else if (flyttet[x-1] == 'y') {
       // document.getElementById('inventoryContent').innerHTML += inventar[x-1];
        flyttet[x-1] = 'n';
        openInventory();
        openInventory();
        openChestBox();
        openChestBox();
    }
    
}

