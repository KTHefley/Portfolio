const motiveArray = [
	"Immortality - Acquire a legendary item to prolong life",
	"Immortality - Ascend to Godhood",
	"Immortality - Become undead or obtain a younger body",
	"Immortality - Steal a planar creature essence",
	"Influence - Seize a position of power or title",
	"Influence - Win a contest or tournament",
	"Influence - Win favor with a powerful individual",
	"Influence - Place a pawn into a position of power",
	"Magic - Obtain an ancient artifact",
	"Magic - Build a construct or magical device",
	"Magic - Carry out a deity’s wishes",
	"Magic - Offer a sacrifice to a deity",
	"Magic - Contact a lost deity or power",
	"Magic - Open a gate to another world",
	"Mayhem - Fulfill an apocalyptic prophecy",
	"Mayhem - Enact the vengeful will of a god or patron",
	"Mayhem - Spread a vile contagion",
	"Mayhem - Overthrow a government",
	"Mayhem - Trigger a natural disaster",
	"Mayhem - Utterly destroy a bloodline or clan",
	"Passion - Prolong the life of a loved one",
	"Passion - Prove worthy of another person’s love",
	"Passion - Raise or restore a dead loved one",
	"Passion - Destroy rivals for another person’s affection",
	"Power - Conquer a region or incite a rebellion",
	"Power - Seize control of an army",
	"Power - Become the power behind the throne",
	"Power - Gain the favor of a ruler",
	"Revenge - Avenge a past humiliation",
	"Revenge - Avenge a past imprisonment or injury",
	"Revenge - Avenge the death of a loved one",
	"Revenge - Retrieve stolen property and punish the thief",
	"Wealth - Control natural resources or trade",
	"Wealth - Marry into wealth",
	"Wealth - Plunder ancient ruins",
	"Wealth - Steal land, goods, or money",
]
const motiveButton = document.querySelector("button");
const villainMotiveText = document.querySelector(".villainMotiveText");
motiveButton.addEventListener("click",function(){
	let res = Math.floor(Math.random()*motiveArray.length);
	villainMotiveText.innerText = motiveArray[res];
})