// 유저 점수 현황
const userCount = document.querySelector(".userInfoCount");
// 컴퓨터 점수 현황
const computerCount = document.querySelector(".computerInfoCount");

// 컴퓨터가 낸 가위바위보
const computerResult = document.querySelector(".computerResult");
// 컴퓨터가 낼 수 있는 가위바위보 셋팅
const computerResultSet = ['✌️','✊','🖐'];
// 셋팅값 개수
var number = 0;
// 가위바위보 계속해서 바뀌는 함수
const computerChange = () => {
    computerResult.innerText = `${computerResultSet[number]}`;
    number++;
    if(number == computerResultSet.length) number = 0;
}

// 계속 움직이는 랜덤
let randomResult = setInterval(computerChange,300);

let randomComputerValue = 0;

// user가 버튼 클릭 시 랜덤값 멈추는 함수
// 애니메이션 정지 및 현재 값 랜덤
const clickButton = () => {
    // 애니메이션 정지
    clearInterval(randomResult);
    // 랜덤값 생성하는 구문
    randomComputerValue = Math.floor(Math.random()*3);
    // 랜덤 값으로 변환 되는 구문
    computerResult.innerText = `${computerResultSet[randomComputerValue]}`;
    return randomComputerValue;
}

const sissorClick = () => {
    clickButton()
    console.log(randomComputerValue);
}

const rockClick = () => {
    clickButton()
    console.log(randomComputerValue);
}

const paperClick = () =>{
    clickButton()
    console.log(randomComputerValue);
}

const userSissorsButton = document.querySelector(".userSissorsButton").addEventListener('click',sissorClick);
const userRockButton = document.querySelector(".userRockButton").addEventListener('click',rockClick);
const userPaperButton = document.querySelector(".userPaperButton").addEventListener('click',paperClick);

// userCount.innerText=1;
// computerResult.innerHTML = computerResultSet[0];
