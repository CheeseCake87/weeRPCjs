# 📡 fRPC-JS

This is a small JS library that helps you
work with fRPC.

**See:**
- [Flask-RPC](https://github.com/CheeseCake87/flask-rpc)
- [Quart-RPC](https://github.com/CheeseCake87/quart-rpc)

## Installation

### CDN

```html
<script src="https://unpkg.com/frpc-js@latest/cdn.js"></script>
```

### NPM

```bash
npm install frpc-js
```

```js
import {frpc} from 'frpc-js';
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
        body: frpc(
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