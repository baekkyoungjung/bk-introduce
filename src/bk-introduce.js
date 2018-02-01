const w = window;
const d = document;
w.onload = () => {
	const options = {
	  // strings: ["", "<span class='type-reserved-word'>const</span> <span class='type-variable'>amI</span> = <span class='type-variable'>'정백경'</span>; \n <span class='type-reserved-word'>let</span> <span class='type-variable'>whoIsHe</span> = <span class='type-variable'>'개발자'</span>; \n <span class='type-variable'>whoIsHe</span> = <span class='type-variable'>'이제 조금은 뭘 아는 프론트앤드 개발자';</span>"],
	  strings: ["", "이  력  서", "정백경 \n \n이제 조금은 뭘 아는 \n프론트앤드 개발자"],
	  typeSpeed: 70,
	  startDelay: 1000,
	};
	const typed = new Typed("#bk-typed", options);
};