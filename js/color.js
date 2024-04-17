// 쌩 자바 / 바닐라 자바 스크립트 버전
// var Body = {
//     // Body 라는 객체이고, 속성으로 
//     // 속성 키 : setColor , 값 : 함수 정의 : function(color) { ~
//     // 속성 키 : setBackgroundColor , 값 : 함수 정의 : function(color) { ~
//     setColor: function (color) {
//         document.querySelector('body').style.color = color;
//     },
//     setBackgroundColor: function (color) {
//         document.querySelector('body').style.backgroundColor = color;
//     }
// } 
// jquery 버전, 도구 이용.
var Body = {
	setColor: function(color) {
 $('body').css('color', color);
  },
  setBackgroundColor: function(color) {
  $('body').css('backgroundColor', color);
  }
 }

var Links = {
    setColor: function (color) {
        var alist = document.querySelector('a');
        var i = 0;
        while (i < alist.length) { alist[i].style.color = color; i = i + 1; }
    }
}

function nightDayHandler(self) {
    if (self.value === 'night') {
        // 작업 순서 5, 사용안하는 함수 주석
        // BodySetBackgroudColor('black');

        // 작업 순서 6, 객체 버전으로 속성의 함수 이용하기. 
        // 객체 속성의 함수 버전으로 사용해보기. 
        Body.setBackgroundColor('black');

        // 작업 순서 5, 사용안하는 함수 주석
        // BodySetColor('white');

        // 작업 순서 6, 객체 버전으로 속성의 함수 이용하기. 
        // 객체 속성의 함수 버전으로 사용해보기. 
        Body.setColor('white')

        self.value = 'day'
        LinksSetColor('powderblue');

    } else {
        // 작업 순서 5, 사용안하는 함수 주석
        // BodySetBackgroudColor('white');

        // 작업 순서 6, 객체 버전으로 속성의 함수 이용하기. 
        // 객체 속성의 함수 버전으로 사용해보기. 
        Body.setBackgroundColor('white')

        // 작업 순서 5, 사용안하는 함수 주석
        // BodySetColor('black');
        // 작업 순서 6, 객체 버전으로 속성의 함수 이용하기. 
        // 객체 속성의 함수 버전으로 사용해보기. 
        Body.setColor('black')

        self.value = 'night'
        LinksSetColor('blue');
    }
}