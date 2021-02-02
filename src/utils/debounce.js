// promise가 없이
// const debounce = (fn, wait) => {
//   let lastTimeoutId = null;
//   // 클로저, 아래의 내용을 반환한다.
//   return (...args) => {
//     // 1. 제일 처음 반환할때는, lastTimeoutId===null 이라, if는 건너뛰고 setTimeout을 설정하게 된다.
//     // 2. 다시한번 실행될때, lastTimeoutId가 혹시 설정이 되어있으면(null이 아니면), timer를 초기화하고, 다시 setTimeout을 설정한다.
//     // 3. 이렇게 계속 실행될때마다 lastTimeoutId가 null이 아니면 그전에 타이머 설정한걸 계속 무력화 시킨다.
//     if (lastTimeoutId) {
//       // 이전에 불린게 있으면, timeout을 clear한다.
//       clearTimeout(lastTimeoutId); // lastTimeoutId는 마지막 명령을 가리킨다
//       lastTimeoutId = null; // 이렇게 아예 해제한다
//     }

//     // 그러다가 4. setTimeout내의 함수가 실행되면, 우리가 첨에 넘겨순 fn에 모든 인자를 넘겨주고, lastTimeoutId를 초기화한다.
//     // 5. 이때 클로저 특성때문에 lastTimeoutId는 계속 남아있다!
//     lastTimeoutId = setTimeout(() => {
//       // wait 시간동안 기다리는 새로운 setTimeout 함수를 설정한다, 여전히 lastTimeoutId로 가리킨다
//       // 시간이 되면 얘가 실행되고, lastTimeoutId를 해제한다. 그래야 다음에 새로 시작하는애들은 또 null로 시작하니까

//       fn(...args); // 함수에 모든 인자를 넘겨준다
//       lastTimeoutId = null;
//     }, wait);
//   };
// };

// promise를 이용해서 비동기 처리(settimeout이 제대로 수행됬는지 아닌지 확인)
// 1. 여기서 lastTimeoutId는 기존처럼 마지막거를 가리킨다. 그래가지구, 여전히 setTimeout잘되면 해제해주고, 그런동작은 그대로다.
// 2. 근데 여기서는 한번더 감싸가지구 promise를 반환했어서 debouncedLog(1) 한다고 뭐 바로 다 끝나는거 아니고, thenable한 객체가 반환된다.
// 3. 이대 checkTimeoutId가 등장하는데 얘는 내가 현재 뭔지를 가리킨다. 즉, lastTimeout는 여러 setTimeout이 공유해서 쓰는거고,checkTimeoutId는 현재거라,
// setTimeout이 제때 실행되서 clear해주는게 아니면 실행되는 부분이다

const debounce = (fn, wait) => {
    let lastTimeoutId = null;
    // 클로저, 아래의 내용을 반환한다.
    return (...args) => {
        // 여기를 한번 더 감싸서 promise 함수를 반환한다.
        return new Promise((resolve) => {
            let checkTimeoutId = null;

            if (lastTimeoutId) {
                // 이전에 불린게 있으면, timeout을 clear한다.
                clearTimeout(lastTimeoutId); // lastTimeoutId는 마지막 명령을 가리킨다
                lastTimeoutId = null; // 이렇게 아예 해제한다
            }

            lastTimeoutId = setTimeout(() => {
                clearTimeout(checkTimeoutId);
                fn(...args); // 함수에 모든 인자를 넘겨준다
                resolve(true);
                lastTimeoutId = null;
            }, wait);

            // wait만큼 기다렸는데, clearTimeout안되면 얘를 실행한다.
            checkTimeoutId = setTimeout(() => {
                resolve(false);
            }, wait);
        });
    };
};

export default debounce;
