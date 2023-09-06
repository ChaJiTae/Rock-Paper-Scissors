// 유저 점수판 : 유저점수 변수
const userCount = document.querySelector(".userInfoCount");
// 유저 현재 점수
let userCurrentPoint = 0;

// 컴퓨터 점수판 : 컴퓨터점수 변수
const computerCount = document.querySelector(".computerInfoCount");
// 컴퓨터 현재 점수
let computerCurrentPoint = 0;

// 각 버튼 클릭 시 이벤트 발생을 위한 변수 구현
// 가위 버튼
const userSissorsButton = document.querySelector(".userSissorsButton")
// 바위 버튼
const userRockButton = document.querySelector(".userRockButton")
// 보 버튼
const userPaperButton = document.querySelector(".userPaperButton")

// 가위 바위 보 게임 진행 관련 이벤트
// 현재 게임 진행 / 현재 게임 결과
const currentGameResult = document.querySelector(".currentGameResult");
// 다시 하기 버튼
const regame = document.querySelector(".regame");

// 컴퓨터 가위바위보 셋팅
// 컴퓨터가 낸 가위바위보 변수 : 화면에 그려지는 가위바위보 종류 : 바뀌는 애니메이션
const computerResult = document.querySelector(".computerResult");
// 컴퓨터가 낼 수 있는 가위바위보 배열
const computerResultSet = ['✌️', '✊', '🖐'];
// 현재 값 개수 : number가 바뀌면서 가위바위보 바뀌는 애니메이션이 진행됨
var number = 0;
// 가위바위보 계속해서 바뀌는 함수
const computerChange = () => {
    // 가위바위보 계속 바뀜
    computerResult.innerText = `${computerResultSet[number]}`;
    // 숫자를 증가시켜 0~2까지 배열 값을 그리는 느낌
    number++;
    if (number == computerResultSet.length) number = 0;
}

// 계속 움직이는 랜덤 변수 : setInerval로 바뀌는 간격 조정
let randomResult = setInterval(computerChange, 400);

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
    // 점수판에 현재 값을 innerText로 입력한다.
    userCount.innerText = userCurrentPoint;
    computerCount.innerText = computerCurrentPoint;
}

// 점수 체크 후 이벤트 결과 나오기 / 다시하기
// setTimeout(함수,시간) 시간 동안 정지 시킨 후 인자로 받는 함수 실행시키기
const checkPoint = () => {
    if (userCurrentPoint == 5) {
        currentGameResult.innerText = "컴퓨터와 대결에서 이겼습니다.";
        setTimeout(function () {
            currentGameResult.style.display = "none";
            regame.style.display = "block";
            window.alert("게임이 종료 되었습니다. 다시 하시려면 다시하기 버튼을 클릭해주세요")
        }, 5000);
    }
    else if (computerCurrentPoint == 5) {
        currentGameResult.innerText = "컴퓨터와 대결에서 졌습니다.";
        setTimeout(function () {
            currentGameResult.style.display = "none";
            regame.style.display = "block";
            window.alert("게임이 종료 되었습니다. 다시 하시려면 다시하기 버튼을 클릭해주세요")
        }, 5000);
    }
}

// 유저의 버튼 클릭 이벤트 추가
userSissorsButton.addEventListener('click', sissorClick);
userRockButton.addEventListener('click', rockClick);
userPaperButton.addEventListener('click', paperClick);