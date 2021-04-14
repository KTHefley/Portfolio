const answerArray = ["Personal Goal",
					 "Family Members",
					 "Colleagues or Compartiots",
					 "Benefactor, Patron, or Employer", 
					 "Romantic Interest",
					 "Special Place",
					 "Keepsake",
					 "Valuable Possession",
					 "Revenge",
					 "Self Preservation"];
const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click",function(){
	let res = Math.floor(Math.random()*answerArray.length);
	message.innerText = question.value + " " + answerArray[res];
	question.value = "";
    	})