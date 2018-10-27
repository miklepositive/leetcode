/**
 * Task: #2 Leetcode
 * Time: spent 7 hours 00 min
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const addTwoNumbers = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  const origional = new ListNode(null);
  let temp = origional;
  let num1 = 0;
  let num2 = 0;
  let ten = 0;

  for (let i = 0; i < Infinity; i++) {
    if (ten || l1 || l2) {
      num1 = l1 ? l1.val : 0;
      num2 = l2 ? l2.val : 0;
      if ((num1 + num2 + ten) >= 10) {
        temp.next = new ListNode((num1 + num2 + ten) % 10);
        temp = temp.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        ten = 1;
      } else {
        temp.next = new ListNode(num1 + num2 + ten);
        temp = temp.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        ten = 0;
      }
    } else {
      break;
    }
  }
  return origional.next;
};

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};
console.log(addTwoNumbers(l1, l2));
