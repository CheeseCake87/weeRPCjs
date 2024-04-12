# 📣 Flask-RPC-JS

This is a small JS library that helps you
build fetch body data for Flask-RPC.

See: [Flask-RPC](https://github.com/CheeseCake87/flask-rpc)

## Installation

### CDN

```html
<script src="https://unpkg.com/flask-rpc-js@latest/cdn.js"></script>
```

### NPM

```bash
npm install flask-rpc-js
```

```js
import {frpc} from 'flask-rpc-js';
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