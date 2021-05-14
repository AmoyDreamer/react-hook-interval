# react-hook-interval
A component of [React Hook](https://reactjs.org/docs/hooks-intro.html) based on [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) and [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) that supports multi-interval management.

## Install
### Using npm
```bash
npm install react-hook-interval --save-dev
```

## Usage
### ESM usage
```
import useInterval from 'react-hook-interval';

export default function myComponent() {
    const { setInterval, clearInterval } = useInterval();
    let id = setInterval(() => {
        console.log(Date.now());
        clearInterval(id)
    }, 5000);
}
```
### Description
This hook component supports to remove all interval automatically when component uninstalled.

## Method
setInterval(callback, delay)
- callback => {Function} The callback function for the interval response.(required)
- delay => {Number} Delay time.(required)
- return value => {Number} Interval ID

clearInterval(id)
- id => {Number} Interval ID.(required)

## License
react-hook-interval is [MIT licensed](https://github.com/AmoyDreamer/react-hook-interval/blob/master/LICENSE).
