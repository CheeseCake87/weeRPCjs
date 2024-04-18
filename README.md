# 📡 wRPC-JS

This is a small JS library that helps you
work with wRPC.

**See:**
- [Flask-RPC](https://github.com/CheeseCake87/flask-rpc)
- [Quart-RPC](https://github.com/CheeseCake87/quart-rpc)

## Installation

### CDN

```html
<script src="https://unpkg.com/wrpc-js@latest/cdn.js"></script>
```

### NPM

```bash
npm install wrpc-js
```

```js
import {wrpc} from 'wrpc-js';
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
        body: wrpc(
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