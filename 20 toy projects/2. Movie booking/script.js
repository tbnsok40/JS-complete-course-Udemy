const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById('movie');


populateUI();

// const -> let 으로 바꿔준다
let ticketPrice = +movieSelect.value; // + : makes it as int from string
// console.log(movieSelect.value)


// 4? save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex); // setItem() : key-value 구조
    localStorage.setItem("selectedMoviePrice", moviePrice);
    
}

// 2. update total and count
function updateSelectedCount() {

    // (1) selected 된 것들에 대한 nodeList가 생성된다.
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat)); /// ... : copies the seletedSeats: spread syntax
    // .map() returns array
    // indexOf() : find the index using the element

    // seatsIndex is array => stringify
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    // (2)
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// 3. movie select event (avengers to ironman4)
movieSelect.addEventListener('change', e => {
    // 플러스 사인: to make sure it's number
    ticketPrice = +e.target.value; 
    setMovieData(e.target.selectedIndex, e.target.value)  // selectedIndex is 예약어 같은데
    updateSelectedCount();
});


// 1. Seat click event
container.addEventListener("click", (e) => {
    // addEventListener가 container에 있으므로, 해당 태그 내부에서만 작동한다

    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected') // or Remove() or add()
        // toggle로 인해, classList에 값을 넣거나 뺄 수 있다.
        // 말그대로 toggle이니, 있으면 빼고, 없으면 넣는다. (swtich마냥)
        console.log(e.target.classList)
        updateSelectedCount()
    }
});
// 영화바뀌면 자리도 리셋되고, 저장되게 할 수 잇을가?



// Initial Count and total set
updateSelectedCount();

// + select에 따라 스크린 변하게 해야징
// 시계도 추가할까
// ui만 손볼수있구나 localStorage에 값 저장하는거랑.
// 그럼 ui 바꾸는 거에서 할 수있는거 다해보기.
