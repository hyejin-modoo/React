import React, { Component } from 'react';
import Try from './Try_class';
import { METHODS } from 'http';

function getNumbers() { // 숫자 4개를 겹치지 않고, 랜덤으로 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    for (let i=0; i<4; i+=1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        Array.push(chosen);
    }
    return Array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),  // ex: [1,3,5,7]
        tries: [],  // push 쓰면 안됨
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')) {
            this.setState({
                result: '홈런!',
                tries: [...this.state.tries, { try: this.state.value, result: '홈런!'}],
            })
        } else {
            
        }
    };

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        })
    };

    fruits = [
        { fruit: '포도', taste: '폴라포'},
        { fruit: '딸기', taste: '베리베리스트로베리'},
        { fruit: '수박', taste: '수박바'},
        { fruit: '배', taste: '탱크보이'},
        { fruit: '바나', taste: '메로나(바나나맛)'},
    ];

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.state.onSubmitForm}>
                    <input type="text" maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map( (v, i) => {  // i는 index
                        return (
                            <Try key={v.fruit + v.taste} value={v} index={i} />
                        );
                    }) }
                </ul>
            </>
        );
    }
}

export const hello = 'hello';  // import { hello }
export const bye = 'hello';  // import { hello, bye }

export default NumberBaseball;  // import NumberBaseball