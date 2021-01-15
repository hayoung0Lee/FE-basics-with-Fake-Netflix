# FE-basics-with-Fake-Netflix
FE basics with Fake Netflix

## React 와 FE basics 다루기
Netflix(React로 멋지게 만든것!)처럼 잘만든 사이트를 따라하면서 React 기본기를 다시 다지고, FE basics도 익히려고 한다. 

[Visit My Website](https://romantic-goldberg-a2af0b.netlify.app/)


### 공부할 주제 소개
- [Debounce](memo/Debounce.md)
- [Throttle](memo/Throttle.md)
- [Image Lazy Loading](memo/ImageLazyLoading.md)
- [Infinite Scroll](memo/InfiniteScroll.md)
- [Virtual List](memo/VirtualList.md)
- [Justified Layout](memo/JustifiedLayout.md)
- [Repaint vs Reflow](memo/RepainAndReflow.md)

### 구조를 참고할 프로젝트
- [real-app-react](https://github.com/gothinkster/react-redux-realworld-example-app)

- [netflix](https://www.netflix.com/browse)

- [koa란?](https://backend-intro.vlpt.us/) / [koa vs express](https://geonlee.tistory.com/217)

### 참고한 내용
- [styled-components](https://styled-components.com/docs)
- [picsum](https://picsum.photos/)
  
## 학습 내용
### 1단계 프로젝트 구조 잡기(Route 관련)
1. components 폴더를 만들고, 필요할 것 같은 컴포넌트를 생성했다. 

2. [react-router](https://reactrouter.com/)
- App.js에서 Header, Footer, 그리고 라우트 처리를 한다
- 라우팅 설정하기: [참고자료](https://velopert.com/2937)
- [react-router-docs](https://reactrouter.com/web/guides/quick-start)
    ```
    yarn add react-router-dom
    ```
  
<img src="./assets/1.png" width="300">

<img src="./assets/2.png" width="300">

react router를 통해서 간단하게 라우터를 구성했다. 해보고 다른게 더 좋으면 그때 써보려고 한다. 

### 2단계 main 리스트 구성하기

- Header 구성하기: [layout 잡기](https://heropy.blog/2018/11/24/css-flexible-box/)
  - layout 은 styled-components를 사용해서 스타일을 적용했고, layout은 flex를 이용해서 했는데, 공부한지 좀 되서 나중에 레이아웃 잡는것만 싹 한번 정리를 하긴 하려고 한다. 
  - 헤더 구성
  <img src="./assets/3.png">

- thumbnail이 보이고 등등 main의 레이아웃 구성하기
  <img src="./assets/4.png">

  <img src="./assets/5.png">

  오랜만에 레이아웃을 잡고하니까 좀 헷갈리긴 하는데, 이번에 해보고 다음에 다른 프로젝트를 하면 좀더 기억이 날 것 같긴하다. 이미지는 지금까지는 고정으로 구성하고, 스크롤 등 필요할 기능들은 구현을 했다. 
  
  이제 이를 바탕으로 필요한 이미지만 로드 할 수 있도록 하고, 무한 로딩은 필요한건 아닌데 한번 넣어보고 싶다. 


## 3단계 Debounce와 Throttling
- [참고한 제로초 님의 블로그](https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa)
  
- 검색할때 검색이 끝나면 결과를 보이도록만들기(Debounce, Throttle)

- Debounce: 여러번 연달아 동작이 있으면 마지막이나 제일처음것만 실행하게 하는것
  - ex) 글자가 타다타다닥 연달아 쳐지면 제일 마지막에 search function이 실행 되는것(따다다다닥 뭔가를 치고 200ms동안 아무일도 없으면 실행, 이 시간내에 뭔일이 있으면 타이머를 다시 설정)
  - 200ms라는 시간을 설정하면, 200ms동안 아무일도 없으면 API를 날리고, 200ms내에 뭔 동작이 있으면 타이머를 거기서 부터 다시 200ms로 설정한다. 그래서 계속 따다다다다다다다닥 치고 200ms를 쉬면 그때야 API를 날린다. 

- Throttling: 마지막에 호출한후, 일정 시간이 지나야 다른 함수를 호출할 수 있는 것
  - ex) 스크롤 이벤트가 연속적으로 발생할때(쭉 올리고 내리면 엄청 많이 발생함) 뭔 동작을 하게하면 수천번 동작해가지구 난리를 치는데, 몇초에 한번만 어떤 동작을 하게 제한 하는것.
  - 스크롤을 debounce로하면 계속 뭔가 타이머가 리셋이 되가지규, 그냥 스크롤을 쭉하면 다 움직이고 멈춰야만 어떤 동작을 실행하는데, throttling을 해야 적어도 지정한 시간에 한번은 실행하는거다. 


- Debounce를 이용해서 Search 기능을 만들기: [debounce 구현하기 예제](https://jungdujang.medium.com/javascript-debounce-%EA%B5%AC%ED%98%84-%ED%95%98%EA%B8%B0-4838b7f7efcf)
  - debounce는 closure를 이용해서 구현한다. 
  - promise가 없는 버전
  ```javascript
  const debounce = (fn, wait) => {
    let lastTimeoutId = null;
    // 클로저, 아래의 내용을 반환한다.
    return (...args) => {
      // 1. 제일 처음 반환할때는, lastTimeoutId===null 이라, if는 건너뛰고 setTimeout을 설정하게 된다.
      // 2. 다시한번 실행될때, lastTimeoutId가 혹시 설정이 되어있으면(null이 아니면), timer를 초기화하고, 다시 setTimeout을 설정한다.
      // 3. 이렇게 계속 실행될때마다 lastTimeoutId가 null이 아니면 그전에 타이머 설정한걸 계속 무력화 시킨다.
      if (lastTimeoutId) {
        // 이전에 불린게 있으면, timeout을 clear한다.
        clearTimeout(lastTimeoutId); // lastTimeoutId는 마지막 명령을 가리킨다
        lastTimeoutId = null; // 이렇게 아예 해제한다
      }

      // 그러다가 4. setTimeout내의 함수가 실행되면, 우리가 첨에 넘겨순 fn에 모든 인자를 넘겨주고, lastTimeoutId를 초기화한다.
      // 5. 이때 클로저 특성때문에 lastTimeoutId는 계속 남아있다!
      lastTimeoutId = setTimeout(() => {
        // wait 시간동안 기다리는 새로운 setTimeout 함수를 설정한다, 여전히 lastTimeoutId로 가리킨다
        // 시간이 되면 얘가 실행되고, lastTimeoutId를 해제한다. 그래야 다음에 새로 시작하는애들은 또 null로 시작하니까

        fn(...args); // 함수에 모든 인자를 넘겨준다
        lastTimeoutId = null;
      }, wait);
    };
  }; 
  ```
  - promise가 있는 버전
  ```javascript
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
  ```
  - promise로 한경우 실행 화면: wait을 200ms로 줘서 걔가 끝나면 실행하고, 아닌건 false라고 결과를 출력한다. 
  
  <img src="./assets/6.png">

  - search 의 구조:
  ```javascript
  const searchInit = (e) => {
    // 지정된 시간동안 이 함수가 여러번 호출되면 제일끝에 200ms동안 아무일도 없으면 검색하기!
    setSearchWord(e.target.value);
  };
  const debounceSearch = debounce(searchInit, 200);
  ```

  ```javascript
    <div>
      <input
        onChange={(e) =>
          debounceSearch(e).then((result) => console.log("실행 여부", result))
        }
      />
      {/* search Word가 없으면 browse로 redirect */}
      {!searchWord && (
        <Redirect
          to={{
            pathname: "/browse",
          }}
        />
      )}
      {/* search word가 있으면 그에 해당하게 이동 */}
      {searchWord && (
        <Redirect
          to={{
            pathname: "/search",
            search: `?q=${searchWord}`,
          }}
        />
      )}
    </div>
  ```
  이렇게 debounce를 활용해서 성공한 경우든 아니든 console.log를 출력하고, 성공하면 searchInit이라는 함수를 실행해서 state를 업데이트 해주면 searchBtn 컴포넌트가 리렌더링 된다. 
  그러면 searchView로 리다이렉트 하거나, 글자가 하나도 없으면 browse화면으로 redirect한다.



- Throttling을 통해서 무한 스크롤 만들어보기(더 좋은 방법도 공부하기)
  - [Javascript - 디바운싱, 쓰로틀링](https://zinirun.github.io/2020/08/16/js-throttling-debouncing/)
  - [무한 스크롤 만들기](https://velog.io/@hyeon930/%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0-Throttling)



- react router 관련: https://jeonghwan-kim.github.io/dev/2019/07/08/react-router-ts.html


<!-- 
- 이미지 여러개 보이게 하기(스크롤 계속해서 보이도록) (Image Lazy Loading)


1. [react-router-redux](https://www.npmjs.com/package/react-router-redux)
  - 처음 진입하는 화면(로그인 후 프로파일 설정화면)
  - 메인 화면(계속 늘어나는)
  - 네비게이션 선택마다 비슷한 모양인데도 다르게 보이도록 구성(장르별로 보이는 것)
  
1. [react-redux](https://react-redux.js.org/)

2. [redux-saga](https://redux-saga.js.org/)
   
3. styled-component
- 이미지는 그냥 랜덤하게 아무거나 보이도록 만들기

### 2단계 메인 페이지 처리하기
- 계속 로딩 늘어나는것(컨텐츠가 다 보일때까지) - image lazy loading, infinite scroll 등의 개념을 적용하지 않을까 예상
- 검색하면 검색 대상만 보여주기 - 검색시에 debounce/throttle의 개념을 확실히 다질것으로 예상
- layout을 잡기위한 고민

### 3단계 컴포넌트 재활용하기
- 메인 페이지에서 생성한 컴포넌트를 재활용해서 다른 페이지도 보일 수 있도록

### 4단계 마크업을 마무리하기
- account 페이지는 그냥 마크업 연습만 하는 정도로! -->

## 끝나고 더 공부할것
1. [react-router](https://reactrouter.com/web/api/Redirect/to-string):  추가 공부하기
## 참고한 문서
### create react app docs
- [what is public folder](https://create-react-app.dev/docs/using-the-public-folder/)

### react with typescript
- [adding typescript](https://create-react-app.dev/docs/adding-typescript/)

- [typescript cheatsheets](https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets)
