const throttling = (fn, waits) => {
  let throttleCheck = null; // 처음에 false로 생성

  return (...args) => {
    if (!throttleCheck) {
      // console.log("이제 실행할 때가 됬다");
      // false이면 setTimeout을 설정할 수 있다. 그다음에는 throttle은 뭔가를 가리키고 있다.
      // 그러고 나서 event가 발생하는 동안은 이 if block안에 못들어와서 이걸 실행할 수가 없다.
      // 얘가 끝나야 다시 새로운 동작을 등록할 수 있다. 그리고 처음에 시작한건 지정한 시간이 지나면 한번은 실행된다.
      // debounce는 동작이 연달아 쭉있으면 앞에껀 다 timer가 클리어되는데 반해 얘는 쭉있으면 그래도 지정한 시간만다 한번은 실행한다.
      throttleCheck = setTimeout(() => {
        fn(...args);
        throttleCheck = null;
      }, waits);
    }
    //  else {
    //   console.log("실행할게 이미 있다. 너는 무시");
    // }
  };
};

export default throttling;
