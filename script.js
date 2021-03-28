/* script */
var localStorage = window.localStorage;
// 회원가입시 사용하기 위한 data배열로 member라는 localStorage가 있을 경우 해당 data 가져옴
var data = (!localStorage.getItem("member")) ? [] : JSON.parse(localStorage.getItem("member"));
var logCheck = (!localStorage.getItem("login")) ? "" : localStorage.getItem("login");
	
function join() {
	// 로컬스토리지 지원하지 않을 경우
	if(!localStorage) alert("로컬 스토리지를 지원하지 않아 회원가입이 불가합니다.");

	if(joinCheck()) { // true라는 것은 빈값 없이 입력했다는 것
		joinData(); // localStorage에 저장하여 회원가입
	}
}

function joinCheck() { // 빈값인지 아닌지 check
		var id = document.getElementById("jid");
		var pw = document.getElementById("jpw");
		var pwCheck = document.getElementById("pw_check");
		var names = document.getElementById("names");
		var phone = document.getElementById("phone");
		var email = document.getElementById("mail");
		
		var value = [id, pw, pwCheck, names, phone, email];
		var values = ["아이디", "비밀번호", "비밀번호 확인", "이름", "전화번호", "이메일"];
		var txt = [];
		var ctxt = "";
		var ids = [];
		for(var i=0; i<value.length; i++) {
			value[i].style.background = 'white';
			// 빈 값인 경우 alert 띄우기 위해 txt 배열에 저장
			if(value[i].value == "") {
				txt.push(values[i]);
				ids.push(value[i]);
			}
		}
		ctxt = txt.join(', ');
		if(ctxt != "") { // ctxt가 빈값이 아니라는 것은 input이 모두 입력 되지 않음
			alert(ctxt+"란을 확인해 주세요."); // alert 창 띄운 후
			for(var i=0; i<ids.length; i++) {
				ids[i].style.background = '#ffc0cb'; // 해당 input background 변경
			}
			return false;
		} 
		else {
			if(pw.value != pwCheck.value) { // 비밀번호와 비밀번호 확인란이 다를경우
				alert("비밀번호란과 비밀번호 확인란의 값이 다릅니다.");
				pw.value = "";
				pwCheck.value = "";
				pw.style.background = '#ffc0cb'; 
				pwCheck.style.background = '#ffc0cb'; 
			} else {
				// localstorage에 저장하기 위해 data 저장
				var joinInfo = {
					id : id.value,
					pw : pw.value,
					name : names.value,
					phone : phone.value,
					email : email.value
				}
				data.push(joinInfo);
				return true; // 모두 입력한 경우
			}
		}
}

function joinData() { // localStorage에 저장
	// 객체로 저장하기 위해서는 JSON.stringify를 사용해 원하는 값으로 저장

	localStorage.setItem("member", JSON.stringify(data));
	alert("회원가입이 완료 되었습니다!");
	// 로그인 페이지로 이동
	location.href = "login.html";
}

function login() { // 로그인
	var id = document.getElementById("id");
	var pw = document.getElementById("pw");

	if(id.value == "" || pw.value == "") {
		alert("아이디와 비밀번호 모두 입력해 주세요!");
	} else {	
		var list = localStorage.getItem("member");
		list = JSON.parse(list); // 저장시 Stringify 해주었으므로 사용시에도 변환
		var check = false;
		for(var i=0; i<list.length; i++) {
			if(list[i].id == id.value && list[i].pw == pw.value) { // data에서 일치하는 회원이 있다면
				check = true;
			}
		}

		if(check == false) {
			alert("아이디 또는 비밀번호가 일치하지 않습니다.");
			id.value = "";
			pw.value = "";
		} else {
			localStorage.setItem("login", id.value); // 로그인 상태를 나타내기 위해 저장			
			alert("환영합니다! "+id.value+"님!");			
			location.href = "../index.html";
		}
	}
}

function logout(url) { // 로그아웃
	var outCheck = confirm("로그아웃 하시겠습니까?");
	if(outCheck) {
		localStorage.removeItem("login");
		alert("로그아웃 되었습니다!");
		init();
		if(url != null) {
			wCheck(url);
		}
	}
}

function init() { // 로그인, 로그아웃 버튼
	if(logCheck != "") { // 누군가 로그인 한 사람이 있음
		document.getElementById("loginul").style.display = 'none';
		document.getElementById("logoutul").style.display = 'block';
		var wvalue = (document.getElementById("writer") == null) ? "" : document.getElementById("writer");
		console.log(wvalue);
		if(wvalue != "") wvalue.value = logCheck; 
		
	} else {
		document.getElementById("logoutul").style.display = 'none';
		document.getElementById("loginul").style.display = 'block';
	}
}

function wCheck(url) { // 글쓰기 버튼 눌렀을 때
	if(logCheck == "") { // 로그인 안함 
		alert("로그인 후 이용해 주세요");
		event.preventDefault();
	} else {
		location.href = url;
	}
	
}

// 문서 로드 완료 후 스크립트 실행, 객체를 못 찾을 경우
window.onload = function() {
	init();
};