import React, { useState } from "react";
import './App.css';

export function Calculator() {
    const [display, setDisplay] = useState(''); // 表示欄の状態管理

    // 計算実行関数
    const calculate = (expression) => {
        try {
            const validExpression = /^(\d+)([+\-*/])(\d+)$/;
            const match = expression.match(validExpression);
            if (!match) throw new Error('無効な式です');

            const num1 = Number(match[1]);
            const operator = match[2];
            const num2 = Number(match[3]);
            let result;

            switch (operator) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num2 !== 0 ? num1 / num2 : 'エラー'; break;
                default: throw new Error('無効な式です');
            }
            return result;
        } catch {
            return 'エラー';
        }
    };

    // ボタンクリック処理
    const handleClick = (btn) => {
        if (btn === 'C') {
            setDisplay('');
        } else if (btn === '=') {
            setDisplay(calculate(display).toString());
        } else {
            setDisplay(prev => prev + btn);
        }
    };

    // ボタン配列
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', 'C', '=', '+'
    ];

    return (
        <div className="calculator-container">
            <h2>電卓アプリ</h2>
            <div className="display">{display || '0'}</div>
            <div className="button-grid">
                {buttons.map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}
            </div>
        </div>
    );
}