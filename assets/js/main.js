/* 
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//mi linko gli id e le classi dell html 
const selectedLevel = document.getElementById(`level`);
const playButton = document.getElementById(`play`);
const gridElement = document.querySelector(`.grid`);

//setto la funzione al clik del tasto play
playButton.addEventListener(`click`,startGame)

//segna punti 
let points = 0;

//stabilisco i tipi di livelli con il numero massimo di celle 
typeOfLevel = [100, 81, 49]

// al click del tasto play verra generato la griglia di caselle in base alla difficolta scelta
function startGame() {
    
    gridElement.innerHTML = ``;
    //Scelgo il livello
    const selLevel = parseInt(selectedLevel.value);
    /*   console.log(`selLevel`, selLevel); */
    //stabilisco il numero di celle in base al livello
    const cellCount = typeOfLevel[selLevel]
    /* console.log(`cellCount`, cellCount); */
    // calcolo le celle per fila in base all valore del livello scelto
    const cellForRow = Math.sqrt(cellCount);
    
 
    // genera l'array di bombe
    let bombArray = [];
    while (bombArray.length < 16) {
        let bombNum = Math.floor(Math.random() * cellCount) + 1;
        if (bombArray.includes(bombNum) == false) {
            bombArray.push(bombNum);
        }
    }
    console.log(bombArray);
    
 
    //stampo le celle a pagina e do la classe per il colore e tutto 
    for ( let cellNum = 1; cellNum <= cellCount; cellNum++){
        
        const cellElement = document.createElement(`div`);
        cellElement.classList.add(`cell`);
        cellElement.innerHTML = cellNum;
        cellElement.style.width = `calc(100% / ${cellForRow})`;
        cellElement.style.height = `calc(100% / ${cellForRow})`;
        gridElement.append(cellElement);
        cellElement.addEventListener(`click`, () => {
            /*   console.log(this) */
            if (bombArray.includes(cellNum)){
                const cells = document.querySelectorAll('.cell')
                for (let x = 0; x < cells.length; x++) {
                    if (bombArray.includes(x+1)){
                        cells[x].classList.add('bg_red')
                        cells[x].innerHTML = ` <i class="fa-solid fa-bomb fa-3x"></i> `
                    }
                }
                
                cellElement.classList.add('bg_red');
                alert(`KABOOOM HAI PERSO , ERI ARRIVATO A ${points} PUNTI . ORA LA PAGINA STA PER ESSERE RICARICATA `)  
                cellElement.innerHTML = ` <i class="fa-solid fa-bomb fa-3x"></i> `
                setTimeout("location.reload(true);", 1000);
                
               
                
            } else{
                cellElement.classList.add(`bg_azul`)
                points++}
                console.log(points)
                
                
                if (points == cellCount - 16){
                    alert(`EHI HAI VINTO !!!! HAI TOTALIZZATO ${points} PUNTI` )
                    setTimeout("location.reload(true);", 2000);
                }
                
            });    
            gridElement.append(cellElement);
            
            
            /*   console.log(cellNum) */
        }    
        // Manca il bonus per girare tutte le bombe sulla griglia 
    }    
   
    