import React, { useEffect, useState } from "react";

const LeetCode = () => {
  const [code, setCode] = useState("");
  // ======= leet code =======
  console.log("code------>", code);

  // const set = new Set(["foo", "bar", "baz", "foo"]);
  // console.log("cccccc---->", Array.from(set));

  const insertElementArray = (array, position, number) => {
    // for (let i = 0; i <= array.length; i++) {
    //   console.log("array--i", array[i]);
    // }
  };

  const nameArray = (array) => {
    let abc = [];
    array.forEach((element) => abc.push(Array.from(element)));
    // console.log("arrray-name-->", Array.from(array[0]));
    // let filterArray= abc.filter((element)=> {abc[element].length > })
    // console.log("array==>abc", abc);
    // for (var i = 0; i <= 3;i++) {
    //   for(var j = 0; j <= 3; j++)

    // }
  };
  // (){}[] this
  const check = () => {
    let code1 = code.indexOf("(") + 1;
    let code2 = code.indexOf(")") + 1;
    let code3 = code.indexOf("{") + 1;
    let code4 = code.indexOf("}") + 1;
    let code5 = code.indexOf("[") + 1;
    let code6 = code.indexOf("]") + 1;
    console.log("abc--->", code1, code2, code3, code4, code5, code6);

    if (code1 && code2 && code3 && code4 && code5 && code6) {
      // (){}[]
      if (
        code == "(){}[]" ||
        code == "()[]{}" ||
        code == "({[]})" ||
        code == "([{}])" ||
        code == "({}[])" ||
        code == "([]{})"
      ) {
        alert(true);
      } else if (
        code == "{}[]()" ||
        code == "{}()[]" ||
        code == "{()[]}" ||
        code == "{[()]}" ||
        code == "{([])}" ||
        code == "{[]()}"
      ) {
        alert(true);
      } else if (
        code == "[]{}()" ||
        code == "[](){}" ||
        code == "[{()}]" ||
        code == "[({})]" ||
        code == "[{}()]" ||
        code == "[(){}]"
      ) {
        alert(true);
      } else {
        alert(false);
      }
    } else if (code1 && code2 && code3 && code4) {
      if (
        code == "(){}" ||
        code == "{}()" ||
        code == "({})" ||
        code == "{()}"
      ) {
        alert(true);
      } else {
        alert(false);
      }
    } else if (code1 && code2 && code5 && code6) {
      // ()[]

      if (
        code == "()[]" ||
        code == "[]()" ||
        code == "([])" ||
        code == "[()]"
      ) {
        alert(true);
      } else {
        alert(false);
      }
    } else if (code3 && code4 && code5 && code6) {
      // {}[]
      alert("full()[]");

      if (code == "{[]}" || code == "{}[]" || code == "[]{}") {
        alert(true);
      } else {
        alert(false);
      }
    } else if (code == "()" || code == "{}" || code == "[]") alert(true);
    else {
      alert(false);
    }
  };
  // [2,3,4] [4,8,6] 432+684=1116 return([6,1,1,1]) this
  const addTwoNumbers = (one, tow) => {
    console.log("oneee====>", one, "tow====>", tow);
    let oneStr = one.reverse().toString().replaceAll(",", "");
    let towStr = tow.reverse().toString().replaceAll(",", "");
    // console.log("avvv-->", parseInt(abc) + 785);
    let total = parseInt(oneStr) + parseInt(towStr);
    // console.log("total--str", Array.from(total));
  };

  // [1,2,3,7,[5,5]] return [1,2,3,7,5,5] this
  const removeArrayInArray = () => {
    let arrayInArray = [1, 2, 4, [5, 6]];
    let abc = arrayInArray.reduce((item, index) => item.concat(index), []);
    console.log("aaaaarrryy---->", abc);
  };

  // [j,e,n,j,i,e] return([jeni]) this
  const removeDuplicates = () => {
    const abc = ["j", "e", "n", "j", "i", "e"];

    let notDuplicate = abc.filter(
      (element, index) => abc.indexOf(element) === index
    );
    // let notDuplicate = [];
    // abc.forEach((c) => {
    //   if (!notDuplicate.includes(c)) {
    //     notDuplicate.push(c);
    //     // return;
    //   }
    // });

    // let notDuplicate = [...new Set(abc)];

    // let notDuplicate = abc.filter(
    //   (element, index) => abc.indexOf(element) !== index
    // );
    console.log("not duplicate-->", notDuplicate);
  };

  let leetDemo = [1, 2, 5, 4, 7, 8];

  const twoSum = (nums, target) => {
    console.log("num-->", nums, "target-->", target);
    console.log("ssssss");
    let abc = 1235;
    let array = Int32Array.from(`${abc}`);
    array.reverse();
    let nmn = array;
    console.log("aaa   aaa", nmn);

    for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
          let totalcount = [];

          totalcount.push(nums[i]);
          totalcount.push(nums[j]);

          console.log("yesss->", nums[i]);
          console.log("yesss------//>", nums[j]);
          console.log("totalctounttotalcount", totalcount);
          return totalcount;
        }
      }
    }
  };

  const idValueChang = () => {
    let abc = [1, 2, 3, 4, 5];
    console.log("leet demo-->", abc);
    for (var i = abc.length; i > 0; i--) {
      console.log("iiiiiii", i);
      if (i >= 2) {
        abc[i] = abc[i - 1];
        if (i == 2) {
          abc[2] = 10;
        }
      }
    }
    console.log("leet demo-->", abc);
  };

  const reverseBetween = (head, left, right) => {
    console.log("ddd", head, "left", left, "right", right);
    let leftIndex = head.indexOf(left);
    let rightIndex = head.indexOf(right);

    head.forEach((element) => {
      console.log("elemnt", element);
      if (element == left) {
        console.log(element, left);
        head[leftIndex] = right;
      } else if (element == right) {
        head[rightIndex] = left;
      }
      // return element;
    });
    console.log("head change", head);
    // cheng[1] = leetDemo.splice(leftIndex, 1);
    // chang.push(leetDemo.splice(rightIndex, 1), leetDemo.splice(leftIndex, 1));

    // console.log("splice-->", chang);
  };
  const reversInArray = (array) => {
    let abc = [];
    // let jk;
    for (var i = array.length - 1; i >= 0; i--) {
      // console.log("iiiiii-->", i);
      abc.push(array[i]);
    }
    // jk = abc.toString().replaceAll(",", "");

    // console.log("array reverse--->", parseInt(jk));
    // let hj;
    // for (var i = 0; i <= jk.length; i++) {
    //   let yu = jk.slice(i, i + 1).replace(",", "");
    //   console.log("yu--", yu);
    //   if (yu == 87) {
    //     alert("CC");
    //   }
    //   // hj = yu;
    // }
  };
  const addElementArray = (array) => {
    console.log("ad-array", array);
    let position = 3;
    let addNumber = 33;
    for (var i = array.length; i >= 1; i--) {
      console.log("i-->", i, "array[i]", array[i]);
      if (position < i) {
        array[i] = array[i - 1];
      } else if (position == i) {
        array[position] = addNumber;
      }
    }
    console.log("ad-array", array);
  };
  const deletElementArray = (array) => {
    // [10, 20, 30, 40, 50, 60];
    let deletP = 2;
    for (var i = deletP; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    console.log("dddd->", array);
  };

  useEffect(() => {
    reverseBetween(leetDemo, 2, 4);
    twoSum(leetDemo, 7);
    idValueChang();
    removeDuplicates();
    reversInArray([1, 2, 4, 6, 7, 8]);
    removeArrayInArray();
    addTwoNumbers([2, 4, 3], [5, 6, 4]);
    addElementArray([1, 2, 3, 4, 5, 6]);
    deletElementArray([10, 20, 30, 40, 50, 60]);
    nameArray(["jenis", "jenil", "kushal"]);
    insertElementArray([20, 30, 40, 5, 6, 90], 3, 200);
    console.log("leeet", leetDemo);
  }, []);

  return (
    <div>
      LeetCode
      <label>leetCode input :-</label>
      <input
        type="text"
        placeholder="Enter code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={() => check()}>check</button>
    </div>
  );
};

export default LeetCode;
//
