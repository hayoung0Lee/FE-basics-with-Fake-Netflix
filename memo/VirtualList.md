[자료1](https://simsimjae.medium.com/react-virtualized%EC%9D%98-autosizer-bcd7a8c31202)
[자료2](https://www.npmjs.com/package/react-virtual-list)

## Virtual list란
- [Virtual List가 뭔지?](https://medium.com/ingeniouslysimple/building-a-virtualized-list-from-scratch-9225e8bec120)
- React는 주로 빠르긴한데, 반복적으로 수천개의 elements를 rendering 하려면 좀 문제가 있다. 왜냐하면 한번에 보이는건 일정부분 뿐이니까! 
- UI "virtualization"은 많은 element 가 있는 리스트를  그리는데, 최대한 조금만 그리는거다(UI "virtualization" is a technique for emulating a list with many elements while only rendering as few as possible __`to make the screen look correct`__)
- React에서는 이를 위해 `react-virtualized`라는 라이브러리가 있다. 