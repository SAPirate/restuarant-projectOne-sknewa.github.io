
function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex ], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin() {
//    Wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let selectItem = "";

    let AC = shuffle([1890, 2250, 2610]);
    let Camera = shuffle([1850, 2210, 2570]);
    let Zonk = shuffle([1770, 2130, 2530]);
    let wings = shuffle([1810, 2170, 2530]);
    let steak = shuffle([1750, 2110, 2470]);
    let bbq = shuffle([1630, 1990, 2350]);
    let vors = shuffle([1570, 1930, 2290]);

    let results = shuffle([
        AC[0],
        Camera[0],
        Zonk[0],
        wings[0],
        steak[0],
        bbq[0],
        vors[0],

    ]);

    if (AC.includes(results[0])) selectItem = "Air conditioner";
    if (Camera.includes(results[0])) selectItem = "camera spot action";
    if (Zonk.includes(results[0])) selectItem = "sales of wings by R25.00";
    if (wings.includes(results[0])) selectItem = "sales of wings by R25.00";
    if (steak.includes(results[0])) selectItem = "stake Air conditioner";
    if (bbq.includes(results[0])) selectItem = "bbq on the go sales";
    if (vors.includes(results[0])) selectItem = "Air it out with fam with a cola addition";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function() {
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        // applause.play();
        Swal.fire({
            title: 'Sweet hooray!',
            html: 'you won !' + selectItem + '|' + '<a href="#" style="text-decoration:none;color:blue;">claim now </a>',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          });
    }, 7000);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);



}



// 


// tabs list

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
    })

    tabs.forEach(tab => {
        tab.classList.remove('active');
})

     tab.classList.add('active');
     target.classList.add('active');
    })
});
