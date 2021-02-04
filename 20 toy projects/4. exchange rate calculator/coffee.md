>리액트 - 중첩된 객체 state 변경하기

```javascript
this.state = {
            tempList: {
                List1: [],
                List2: [],
                List3: [],
                List4: [],
                List5: [],
                List6: [],
                List7: [],
            }
        };
```

state의 List1, List2, List3 ... 같이 중첩된 객체의 state를 변경하려면, 
단순 setState만으로는 한계가 있습니다.

``` javascript
const newList = [1, 2, 3]

this.setState(prevState => {
  let tempList = Object.assign({}, prevState.tempList);  // creating copy of state variable jasper
  tempList.List1 = newList;                              // update the name property, assign a new value                 
  return { tempList };                                   // return new tempList object
})  

 ```
 아래처럼 사용할 수도 있습니다.
 ```javascript
 this.setState(prevState => ({
    tempList: {                   // object that we want to update
        ...prevState.tempList,    // keep all other key-value pairs
        List1: newList2           // update the value of specific key
    }
}))
 ```


 >중복제어 로직

``` javascript
 let noDuplicatedList = duplicatedList.reduce((unique, item) =>{
            return unique.includes(item) ? unique : [...unique, item]
        }, []);
```

화살표함수를 알아야겠는데


```json
{cno=4, 
APIList=[{"value":"�����߾��������","key":"D01"},
    {"value":"��ȥ","key":"B001"},
    {"value":"������","key":"B032"},
    {"value":"���Ѽ�","key":"B011"}]
    }


```