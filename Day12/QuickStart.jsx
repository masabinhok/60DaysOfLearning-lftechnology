//React

//Creating and Nesting components
//React component naming system uses Camel Case, first letter is capital.

function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <MyButton />
    </div>
  );
}

//Writing markup with JSX
//We can't return mulitple jsx tags, so keep it inside a div or <></>

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

//Adding styles
<img className="avatar" />;

//In your CSS;
// .avatar {
//   border-radius: 50%;
// }

//Displaying data
//jsx helps us add markup into js, if you use {}, you can embed some variable from your code.

function DisplayName() {
  const user = {
    name: "Sabin",
  };

  return <h1>{user.name}</h1>;
}

function EscapeAttribute() {
  const user = {
    imageUrl: "https://avatars0.githubusercontent.com/u/1?v=4",
  };
  return <img className="avatar" src={user.imageUrl} />;
}

const user = {
  name: "Sabin Shrestha",
  imageUrl: "https://avatars0.githubusercontent.com/u/1?v=4",
  imageSize: 90,
};

export default function Profile () {
  return (
    <>
    <h1>{user.name}</h1>
    <img
    className = 'avatar'
    src= {user.imageUrl}
    //alt = 'photo of sabin'
    alt = {'Photo of' + user.name}
    //style= 'height:30px width:30px' is converted into style {} (jsx) containing an object. style{{}}
    style = {{
      width: user.imageSize,
      height: user.imageSize,
    }}/>
    </>
  )
}

//condional rendering

function ConditionalRender() {
  let content;
  //let us decide which component to use haha
  if(isLoggedIn){
    content = <AdminPanel />;//adminPanel is a component somewhere
  }
  else {
    content = <LoginForm />; //loginform is a component somewhere
  }
  return (
    <div>
      {content}
    </div>
  )
}

//ternary operator can be used inside jsx, unlike if/else

function TernaryRender () {
  return (<>
  {isLoggedIn? (<AdminPanel /> ): (<LoginForm />)}
  </>)
}

function LogicalAnd () {
  return (<div>
    {isLoggedIn && <AdminPanel />}
  </div>)
}

//Rendering Lists
//You will rely on JavaScript features like for loop and the array map() functoin to render lists of components

function List () {

const products = [
  {title: 'Cabbage', id:1, isFruit:false,},
  {title: 'Garlic', id: 2, isFruit:false},
  {title: 'Apple', id: 3, isFruit : true},

];

const listItems = products.map((product)=>{
  <li key={product.id}>{product.title}</li>
})

return (<div>
  <ul>{listItems}</ul>
</div>)

}

const products = [
  {title: 'Cabbage', id:1, isFruit:false,},
  {title: 'Garlic', id: 2, isFruit:false},
  {title: 'Apple', id: 3, isFruit : true},

];

export function  ShoppingList () {
  const listItems = products.map((product)=>{
    <li
    key={product.id}
    style= {{
      color : isFruit ? 'red' : 'green',
    }}>{product.title}</li>

  })
  return (
    <>
    <ul>{listItems}</ul>
    </>
  )
}

//Responding to events
function Button () {
  function handleClick () {
    alert('You clicked me!')
  }
  return
  (
    <button onClick={handleClick}>Click me</button> //dont call the function, just pass it REACT will call it when its clicked.
  )
}

//Updating the screen
//we would want our components to remember some info and display it.

import {useState} from 'react';

function Counter () {
  const [count, setCount] = useState(0);

}

//useState is a hook, which is a function that returns an array with two elements. The first element is the current state, and the second element is a function that allows us to update that state.

function YourButton () {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick = {handleClick}>Clicked {count} times</button>
  )
}

//React will call you component functon again. This time, count will be 1. then it wil be 2. and so on .

//if we render the same button multiple times, each will get its own state.

export function MyApp () {
  return (
    <div>
      <h1>Counters that update seperately.</h1>
      <YourButton />
      <YourButton />
    </div>
  )
}

//each button remembers, its own count and doesnt affect other buttons.. wow ily react.

//USING HOOKS

//functions starting with use are called hooks. useState, useState is a built-in hook provided by react. You can find other built-in hooks in the API reference. You can also write your own hoooks by combining the existing ones.

//Sharing data between components
//we want our components to remember some info and display it.

import { useState } from "react";

//parent component
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
//passing down information like this is called props.
//MyApp component contains the count state and the handleClick eventHandler, and passes both of them down as props to each of the buttons.
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

//count and onClick are the props here.

//read the props
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked{count} times</button>;
}
