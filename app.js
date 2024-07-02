// write code here
let setNumber = +prompt("ใส่เลข 1 ตัว ที่มีค่าระหว่าง 1-100");
let guess = +prompt("ลองทายดู");
while (setNumber != guess) {
    if (setNumber > guess){
        alert("ตัวเลขมีค่ามากกว่านี้")
    } else if (setNumber < guess){
        alert("ตัวเลขมีค่าน้อยกว่านี้")
    } 
    guess = +prompt("ทายใหม่อีกครั้ง")
};
alert("ถูกต้องง");
