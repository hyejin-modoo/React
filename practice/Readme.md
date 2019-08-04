주석 : `{/*  */}`  

1. [class / Hooks](class_hooks.md)
1. [webpack 설치 & 모듈시스템](webpack_install_module.md)
1. [import & map() & props](import_map_props.md)

<br><br>

- react 에서는 배열에 **push()** 를 사용하면 안된다
- [...arr, 1] 이런식으로 사용해야한다

```
const arr = [];
arr.push(1);
arr === arr   // true


const arr1 = [];
const arr2 = [...arr1, 1];
arr1 === arr2  // false
```
