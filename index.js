// 유저 점수 현황
const userCount = document.querySelector(".userInfoCount");
let userCurrentPoint = 0;

// 컴퓨터 점수 현황
const computerCount = document.querySelector(".computerInfoCount");
let computerCurrentPoint = 0;

// 각 버튼 클릭 시 이벤트 발생을 위한 변수 구현
const userSissorsButton = document.querySelector(".userSissorsButton")
const userRockButton = document.querySelector(".userRockButton")
const userPaperButton = document.querySelector(".userPaperButton")

// 현재 게임 결과
const currentGameResult = document.querySelector(".currentGameResult");

// 다시 하기 버튼
const regame = document.querySelector(".regame");

// 컴퓨터가 낸 가위바위보
const computerResult = document.querySelector(".computerResult");
// 컴퓨터가 낼 수 있는 가위바위보 셋팅
const computerResultSet = ['✌️', '✊', '🖐'];
// 셋팅값 개수
var number = 0;
// 가위바위보 계속해서 바뀌는 함수
const computerChange = () => {
    computerResult.innerText = `${computerResultSet[number]}`;
    number++;
    if (number == computerResultSet.length) number = 0;
}

// 계속 움직이는 랜덤
let randomResult = setInterval(computerChange, 300);

// 컴퓨터의 랜덤값 구현
let randomComputerValue = 0;

// user가 버튼 클릭 시 랜덤값 멈추는 함수
// 애니메이션 정지 및 현재 값 랜덤
const clickButton = () => {
    // 애니메이션 정지
    clearInterval(randomResult);
    // 랜덤값 생성하는 구문
    randomComputerValue = Math.floor(Math.random() * 3);
    // 랜덤 값으로 변환 되는 구문
    computerResult.innerText = `${computerResultSet[randomComputerValue]}`;
    // 중지 된 이벤트 다시 시작
    randomResult = setInterval(computerChange, 400);
}

// 가위 버튼 클릭시 이벤트
const sissorClick = () => {
    clickButton()
    if (computerResult.innerText == "🖐") {
        userCurrentPoint++;
        currentGameResult.innerText = "이겼습니다.";
    }
    else if (computerResult.innerText == "✊") {
        computerCurrentPoint++;
        currentGameResult.innerText = "졌습니다.";
    }
    else {
        currentGameResult.innerText = "비겼습니다.";
    }
    paintCurrentPoint()
    checkPoint()
}

// 바위 버튼 클릭시 이벤트
const rockClick = () => {
    clickButton()
    if (computerResult.innerText == "🖐") {
        computerCurrentPoint++;
        currentGameResult.innerText = "졌습니다.";
    }
    else if (computerResult.innerText == "✊") {
        currentGameResult.innerText = "비겼습니다.";
    }
    else {
        userCurrentPoint++;
        currentGameResult.innerText = "이겼습니다.";
    }
    paintCurrentPoint()
    checkPoint()
}

// 보자기 버튼 클릭시 이벤트
const paperClick = () => {
    clickButton()
    if (computerResult.innerText == "✊") {
        userCurrentPoint++;
        currentGameResult.innerText = "이겼습니다.";
    }
    else if (computerResult.innerText == "🖐") {
        currentGameResult.innerText = "비겼습니다.";
    }
    else {
        computerCurrentPoint++;
        currentGameResult.innerText = "졌습니다.";
    }
    paintCurrentPoint()
    checkPoint();
}

// 점수판 갱신하기
const paintCurrentPoint = () => {
    userCount.innerText = userCurrentPoint;
    computerCount.innerText = computerCurrentPoint;
}

// 점수 체크 후 이벤트 결과 나오기/다시하기
const checkPoint = () => {
    if (userCurrentPoint == 5) {
        currentGameResult.innerText = "컴퓨터와 대결에서 이겼습니다.";
        setTimeout(function () {
            currentGameResult.style.display = "none";
            regame.style.display = "block";
        }, 5000);
    }
    else if (computerCurrentPoint == 5) {
        currentGameResult.innerText = "컴퓨터와 대결에서 졌습니다.";
        setTimeout(function () {
            currentGameResult.style.display = "none";
            regame.style.display = "block";
        }, 5000);
    }
}

// 패배하면 이벤트 더 추가하면 좋을듯함

// 유저의 버튼 클릭 이벤트 추가
userSissorsButton.addEventListener('click', sissorClick);
userRockButton.addEventListener('click', rockClick);
userPaperButton.addEventListener('click', paperClick);

// userCount.innerText=1;
// computerResult.innerHTML = computerResultSet[0];
