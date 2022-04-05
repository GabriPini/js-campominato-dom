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

//stabilisco i tipi di livelli con il numero massimo di celle 
typeOfLevel = [100, 81, 49]

// al click del tasto play verra generato la griglia di caselle in base alla difficolta scelta
function startGame() {

    gridElement.innerHTML = ``;
    //Scelgo il livello
    const selLevel = parseInt(selectedLevel.value);
    console.log(`selLevel`, selLevel);
    //stabilisco il numero di celle in base al livello
    const cellCount = typeOfLevel[selLevel]
    console.log(`cellCount`, cellCount);
    // calcolo le celle per fila in base all valore del livello scelto
    const cellForRow = Math.sqrt(cellCount);

    //stampo le celle a pagina e do la classe per il colore e tutto 
    for ( let cellNum = 1; cellNum <= cellCount; cellNum++){

        const cellElement = document.createElement(`div`);
        cellElement.classList.add(`cell`);
        cellElement.innerHTML = cellNum;
        cellElement.style.width = `calc(100% / ${cellForRow})`;
        cellElement.style.height = `calc(100% / ${cellForRow})`;
        cellElement.addEventListener(`click`, () => {
          /*   console.log(this) */
            cellElement.classList.toggle(`bg_azul`)
        });
        gridElement.append(cellElement);

        console.log(cellNum)
    }
}

