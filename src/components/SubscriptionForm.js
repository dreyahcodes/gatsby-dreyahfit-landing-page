import React from "react"
import styled from "styled-components"

const SubscriptionFormEl = styled.div`
  /* justify-items: center;
  display: grid; */
  .form-wrapper {
    padding: 0 20px;

    form {
      margin-bottom: 0px;
      input[type="text"] {
        font-size: 1.3rem;
        width: 49%;
        padding: 12px 20px;
        /* margin: 8px 0; */
        display: inline-block;
        border: 1px solid #33333345;
        border-radius: 4px;
        box-sizing: border-box;

        &:first-child {
          margin-right: 2%;
        }
      }

      button {
        font-size: 1.3rem;
        color: #eee;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        background-color: #fb77ad;
        text-transform: uppercase;
        border-radius: 2px;
        width: 100%;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-out;
      }
      button:hover {
        background: #fb77adb3;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        color: #eee;
      }
    }
  }
  /* 
  @media screen and (max-width: 950px) {
    .form-wrapper {
      padding: 0 20%;
    }
  }

  @media screen and (max-width: 750px) {
    .form-wrapper {
      padding: 0 10%;
    }
  }*/

  @media screen and (max-width: 650px) {
    .form-wrapper {
      form {
        input[type="text"] {
          width: 100%;
          margin-right: 0;
          margin-bottom: 1rem;
        }
      }
    }
  }
`

const SubscriptionForm = () => {
  return (
    <SubscriptionFormEl>
      <div className="form-wrapper">
        <form action="/action_page.php">
          {/* <span> */}
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="First Name*"
          />
          <input type="text" id="lname" name="lastname" placeholder="Email*" />
          {/* </span> */}
          <button type="submit">Sign Me Up!</button>
        </form>
      </div>
    </SubscriptionFormEl>
  )
}

export default SubscriptionForm
