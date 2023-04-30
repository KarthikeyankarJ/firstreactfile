import React from 'react';
import './App.css';

function App() {
  const cartData = [
    {
      access : "Free",
      price : "$0",
      month : "/month",
      userCount : "✔ Single User",
      storage : "✔ 5GB Storage",
      use : "✔ Unlimited Public Projects",
      community : "✔ Community Access",
      projecttype : "✖ Unlimited Private Projects",
      support : "✖ Dedicated Phone Support",
      domin : "✖ Free Subdomain",
      report : "✖ Monthly Status Reports"
    },
    {
      access : "PLUS",
      price : "$9",
      month : "/month",
      userCount : "✔ 5 User",
      storage : "✔ 50GB Storage",
      use : "✔ Unlimited Public Projects",
      community : "✔ Community Access",
      projecttype : "✔ Unlimited Private Projects",
      support : "✔ Dedicated Phone Support",
      domin : "✔ Free Subdomain",
      report : "✖ Monthly Status Reports"
    },
    {
      access : "PRO",
      price : "$49",
      month : "/month",
      userCount : "✔ Unlimited Users",
      storage : "✔ 150GB Storage",
      use : "✔ Unlimited Public Projects",
      community : "✔ Community Access",
      projecttype : "✔ Unlimited Private Projects",
      support : "✔ Dedicated Phone Support",
      domin : "✔ Unlimited Free Subdomains",
      report : "✔ Monthly Status Reports"
    }
  ]
   
  return (
    <div className="App">
      {
        cartData.map((items)=>(
          <Cart
          access = {items.access}
          price = {items.price}
          month = {items.month}
          userCount = {items.userCount}
          storage = {items.storage}
          use = {items.use}
          community = {items.community}
          projecttype = {items.projecttype}
          support = {items.support}
          domin = {items.domin}
          report = {items.report}
          check = {items.check}
          nocheck = {items.nocheck}
          />
        ))
      }
    </div>
  );
}

export default App;
function Cart(props) {
  return(
    <div className='Container'>
      <div id='header'>
      <h5 id='access'>{props.access}</h5>
      <div id='price'>{props.price}<span>{props.month}</span></div>
      <hr></hr>
      </div>
      <div id='accessability'>
        {/* plan detail line by line */}
      <div className="detail">{props.userCount}</div>
      <div className="detail">{props.storage}</div>
      <div className="detail">{props.use}</div>
      <div className="detail">{props.community}</div>
      <div className="detail">{props.projecttype}</div>
      <div className="detail">{props.support}</div>
      <div className="detail">{props.domin}</div>
      <div className="detail">{props.report}</div>
      </div>
      <div id='button'><button id="btn">BUTTON</button></div>
    </div>
  )
}