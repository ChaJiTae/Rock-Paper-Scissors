// 유저 점수 현황
const userCount = document.querySelector(".userInfoCount");
// 컴퓨터 점수 현황
const computerCount = document.querySelector(".computerInfoCount");
// 컴퓨터가 낸 가위바위보
const computerResult = document.querySelector(".computerResult");
// 컴퓨터가 낼 수 있는 가위바위보 셋팅
const computerResultSet = ['✌️','✊','🖐'];
// 셋팅값 개수
const number = 0;
// 가위바위보 계속해서 바뀌는 함수
// const computerChange = () =>{
//     computerResult.innerText = `${computerResultSet[number]}`;
//     number++;
//     if(number == computerResultSet.length) number = 0;
// }
// let randomResult = setInterval(computerChange,1000);
// clearInterval(randomResult);
// userCount.innerText=1;
computerResult.innerHTML = computerResultSet[0];