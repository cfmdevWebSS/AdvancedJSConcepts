import React from 'react';

function JSXForm() {
    return (
      <div>
        <h1>Your Name Please</h1>
        <form>
          <label htmlFor="first-name">First Name: </label>
          <input type="text" id="first-name" /><br/>
          <label htmlFor="last-name">Last Name: </label>
          <input type="text" id="last-name" /><br/>
          <button>Submit</button>
        </form>
      </div>
    );
}

export default JSXForm;