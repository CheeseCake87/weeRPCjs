# 📡 weeRPCjs

This is a small JS library that helps you
work with [weeRPC](https://github.com/CheeseCake87/weeRPC).

## Installation

### CDN

```html
<script src="https://unpkg.com/weerpcjs@latest/cdn.js"></script>
```

### NPM

```bash
npm install weerpcjs
```

```js
import {weerpc} from 'weerpcjs';
```

## Usage

```js
fetch(
    'http://127.0.0.1:5000/rpc/clients',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: weerpc(
            function_ = 'add',
            data = {
                'name': 'John Doe',
            }
        ),
    }
).then(
    response => response.json()
).then(
    data => console.log(data)
);
```
