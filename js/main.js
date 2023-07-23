// // 1. Tạo 1 mảng gồm tên các khoá học của CFD Circle. In ra số lượng các khoá học? In ra chỉ số
// // index của mảng? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách
// // nhau bằng dấu phẩy? Tính tổng giá các khoá học? (bắt buộc dùng 1 trong những Phương
// // thức xử lý mảng nâng cao đã học)
// const courses = [
//   { name: "FE newbie", price: 5000000 },
//   { name: "FE Responsive", price: 4000000 },
//   { name: "ReactJS Master", price: 6000000 },
//   { name: "ReactJS Advantage", price: 6000000 },
//   { name: "Typescript and ReactJS", price: 7000000 },
// ];
// // In số lượng khóa học.
// const totalCourse = (array) => {
//   return array.length;
// };
// //In ra chuỗi tên các khoá học cách
// // nhau bằng dấu phẩy?
// const courseName = (array) => {
//   return array.map((object) => {
//     return object.name;
//   });
// };
// // In ra tên khoá học ở vị trí index thứ 2.
// const printKey2 = (array) => {
//   return array[2].name;
// };
// //Tính tổng giá các khoá học? (bắt buộc dùng 1 trong những Phương
// // thức xử lý mảng nâng cao đã học)
// //Input  with array and key
// const sumPrice = (courses, key) => {
//   const total = courses.reduce((accumulator, course) => {
//     return accumulator + course[key];
//   }, 0);

//   return `Total of full ${key}: ${total.toLocaleString("en-Us")}`;
// };
// const result1 = sumPrice(courses, "price");
// let ex1 = [
//   { ex: "1a", a: totalCourse(courses) },
//   { ex: "1b", b: courseName(courses) },
//   { ex: "1c", c: printKey2(courses) },
//   { ex: "1d", d: result1 },
// ];
// console.log(ex1, "Ex 3.1.1");

// //2.Viết 1 hàm nhận vào 1 mảng số và trả về tổng giá trị các phần tử của mảng?
// const length = (array) => {
//   return { TotalElements: array.length };
// };
// console.log(length(courses), "Ex 3.1.2");

// //3. Viết 1 hàm nhận vào 2 tham số là array và character. Hàm trả về 1 chuỗi là kết quả của việc
// // nối các phần tử của array với character? (lưu ý: array là mảng nhận vào, character là ký tự để
// // nối các phần tử của mảng).
// let newCourse = { name: "Typescript Indepth", price: 5000000 };

// const addItem = (name, price) => {
//   let Fixprice = price.toLocaleString("en-Us");

//   let newCourse = { name, Fixprice };

//   const newArray = [...courses, newCourse];

//   console.log(newArray, "Ex 3.1.3");
// };
// addItem("UI & UX", 6000000);

// //4. Tạo 1 object user gồm: tên, tuổi, địa chỉ và 1 mảng chứa tên bạn bè. In ra array bạn bè? In ra
// // tên của người bạn cuối cùng? In ra địa chỉ của user? Thêm 1 người bạn vào mảng bạn bè? in
// // ra độ dài mảng bạn bè?
// const prinTheLast = (array) => {
//   return { LastFriend: array.friends.slice(-1), ListFriends: array.friends };
// };
// const student1 = {
//   name: "Tin",
//   age: 25,
//   address: "111 Cong Hoa , p12 ,TB",
//   friends: ["Kiet", "Nghia", "Tuan"],
// };
// console.log(prinTheLast(student1), "Ex 3.1.4");

// //5. Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Trả về và in ra mảng mới gồm các phần tử có
// // giá trị gấp đôi giá trị của từng phần tử mảng đã khởi tạo? Gợi ý dùng hàm map().
// const number3 = [2, 4, 5, 7, 32, 67, 30, 100];

// const doubleNum = (numberArray) => {
//   const newArray = numberArray.map((number) => {
//     return number * 2;
//   });
//   console.log(newArray, "Ex 3.1.5");
// };
// doubleNum(number3);

// ///////////////////////////////////////////////////// 3.2
// //1 Viết 1 hàm nhận vào 1 tham số là mảng và trả về ngẫu nhiên 1 phần tử của mảng?
// const randomIndex = (array) => {
//   return Math.floor(Math.random(array.length) * array.length);
// };
// const returnRandomElement = (array) => {
//   console.log(array[randomIndex(array)], "Ex 3.2.1");
// };

// returnRandomElement(courses);

// //2Tạo 1 đối tượng student trống: Thêm thuộc tính name với giá trị là tên student? Thêm thuộc tính
// // age với giá trị là tuổi? Thay đổi giá trị name của student thành tên bất kỳ? Xóa thuộc tính age ra
// // khỏi đối tượng?
// const createAStudent = (name, age) => {
//   let studentName = name.toUpperCase();
//   let student = { studentName, age };
//   if (name && !age) {
//     delete student.age;
//     let noAgeStudent = student;
//     console.log(noAgeStudent, "Deleted Age", "Ex 3.2.2");
//   }
//   if (name && age) {
//     console.log(student, "New Student", "Ex 3.2.2");
//   }
// };
// const ex3_2_2 = [
//   { a: createAStudent("bruno", 25) },
//   { b: createAStudent("Jessice") },
//   { c: createAStudent("thomas", 30) },
// ];

// //3Tạo 1 mảng gồm các object là các student gồm tên và điểm trung bình. Viết 1 hàm nhận vào 1
// // tham số là mảng vừa tạo và trả về các object có điểm trung bình lớn hơn 5?

// const students = [
//   { name: "Kiet", score: 9.5 },
//   { name: "Chau", score: 9.7 },
//   { name: "Huong", score: 9.6 },
//   { name: "Hai", score: 9.5 },
//   { name: "Tin", score: 4 },
// ];
// const returnStudentPassed = (array) => {
//   const studentPassed = array.filter((student) => student.score > 5);
//   console.log(
//     studentPassed,
//     `Total ${studentPassed.length} Passed`,
//     "Ex 3.2.3"
//   );
// };
// returnStudentPassed(students);

// // 4.Tạo 1 mảng chứa các object có thuộc tính là tên các nhân viên và giá trị là tiền lương. Viết hàm
// // trả về tổng tất cả lương của các nhân viên trong object?
// const staff = [
//   { name: "Kiet", salary: 20000000 },
//   { name: "Huong", salary: 15000000 },
//   { name: "Hai", salary: 14000000 },
// ];
// const result2 = (array, key) => {
//   const totalSalary = sumPrice(array, key);
//   console.log(totalSalary.toLocaleString("en-Us"), "Ex 3.2.4");
// };
// result2(staff, "salary");

// //5.Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Tìm và in ra phần tử đầu tiên thoả điều kiện phần
// // tử đó > 20?
// const numbers = [2, 4, 5, 6, 32, 67, 30, 100];
// const isItBiggerThan = (number) => {
//   let num = numbers.find((num) => num > number);
//   return num;
// };
// let ex5 = [
//   { case1: isItBiggerThan(20) },
//   { case2: isItBiggerThan(60) },
//   { case1: isItBiggerThan(5) },
// ];
// console.log(ex5, "Ex 3.2.5");
// //6.Cho mảng diemso gồm các phần tử 5, 7, 8, 9, 3. Sử dụng hàm every để kiểm tra điểm số của học
// // sinh được lưu dưới dạng mảng có đủ để đỗ kỳ thì không. Điều kiện tất cả điểm số >= 5. Nếu đủ
// // điều kiện thì in ra “Đủ điểm đỗ” ngược lại thì “Không đủ điểm đỗ”?

// const scores = [5, 7, 8, 9, 3];
// const scores2 = [6, 7, 8, 9, 10];

// const checkIsPass = (array) => {
//   const isStudentBelow5 = (currentValue) => currentValue > 5;
//   if (array.every(isStudentBelow5)) {
//     return `Passed`;
//   }
//   return `Not pass because have score below 5`;
// };

// console.log(checkIsPass(scores), "Ex 3.3.6");
// console.log(checkIsPass(scores2), "Ex 3.3.6");

const scrollTop = document.querySelector(".btntotop");
const headerHeight = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let y = window.scrollY;

  if (y > headerHeight.offsetHeight) {
    headerHeight.classList.add("bgGray");
  } else {
    headerHeight.classList.remove("bgGray");
  }
});

scrollTop.addEventListener("click", () => {
  document.body.scrollToTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  let trigger =
    document.querySelector("html").offsetHeight -
    document.querySelector("footer").offsetHeight;

  if (y + window.innerHeight >= trigger) {
    document.querySelector(".btntotop").classList.add("showBtn");
  } else {
    document.querySelector(".btntotop").classList.remove("showBtn");
  }
});

//progress

window.addEventListener("scroll", () => {
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;
  const progress =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scroll / progress) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + `%`;
});
