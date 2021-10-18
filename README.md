# react-show-hide

[![Build Status](https://img.shields.io/travis/miroed/react-show-hide/master.svg?style=flat)](https://travis-ci.org/miroed/react-show-hide)
[![npm version](https://img.shields.io/npm/v/react-show-hide.svg?style=flat)](https://www.npmjs.com/package/react-show-hide)
[![npm downloads](https://img.shields.io/npm/dm/react-show-hide.svg?style=flat)](https://www.npmjs.com/package/react-show-hide)

Simple react component for conditionally showing or hiding components.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Properties](#properties)

# Installation

`npm install react-show-hide@next --save`

react-show-hide requires **React 16.8.0 or later.**

# Usage

```jsx
import React from "react"
import { Show, Hide } from "react-show-hide";
import MyComponent from './components/MyComponent';

function App(props) {
  return (
      <Show when={true}>
        <MyComponent />
      </Show>
      <Hide when={true}>
        <MyComponent alt={true} />
      </Hide>
  );
}
```

# Components

|   Name   | Description                                     |
| :------: | :---------------------------------------------- |
| **Show** | Display children components after condition met |
| **Hide** | Hide children components after condition met    |

# Properties

|         Name          |    Type     | Default | Description                                |
| :-------------------: | :---------: | :-----: | :----------------------------------------- |
|  **[`when`](#when)**  | `{Boolean}` |         | Condition to be met                        |
| **[`after`](#after)** | `{String}`  |         | Delay on when to show component by seconds |

### `when`

Condition to be met. Needs to result in a truthy or falsy statement.<br /><br />

```jsx
<Show when={value.length > 0}>I feel seen 🙌!</Show>
```

In vanilla JS, doing the following works great:

```js
if (value.length) return "I feel seen 🙌!";
```

Doing the same thing using the Logical && Operator, you're returning a falsy
expression and will cause the component after && to be skipped. In the example
below, `0` will be returned by the render method.

```jsx
{
  value.length && <MyComponent />;
}
```

We catch that for you:

```jsx
<Show when={value.length}>I feel seen 🙌!</Show> // result: I feel seen 🙌!
```

### `after`

```jsx
<Show when={value.length} after={600}>I feel seen 🙌!</Show> // shown in 0.6s seconds after condition met
<Hide when={value.length} after={60000}>Gone after 60 seconds 🏎!</Hide> // gone in 60 seconds after condition met
```

Controls the delay on showing the component.
