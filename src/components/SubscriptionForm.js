import React from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"

const initialSubScribeFormData = {
  FNAME: "",
  LNAME: "",
  email: "",
  PATHNAME: "/",
}

const successMsg = `You've been added to the list successfully!`
const errorMsg =
  "An error occured. You may already have signed up with that email"

const errorState = {
  formSuccess: "",
  formError: errorMsg,
}

const successState = {
  formError: "",
  formSuccess: successMsg,
  subscribeFormData: initialSubScribeFormData,
}

class SubscriptionForm extends React.Component {
  state = {
    subscribeFormData: initialSubScribeFormData,
    formError: "",
    formSuccess: "",
  }

  onInputChange = (name, value) => {
    this.setState(({ subscribeFormData }) => ({
      subscribeFormData: {
        ...subscribeFormData,
        [name]: value,
      },
    }))
  }

  subscribeUser = async e => {
    e.preventDefault()
    this.setState({
      formSuccess: "",
      formError: "",
    })

    try {
      console.log(this.state.subscribeFormData)
      const { email, FNAME, LNAME, PATHNAME } = this.state.subscribeFormData

      if (!email && !FNAME) {
        return this.setState(errorState)
      }

      const { result } = await addToMailchimp(email, {
        FNAME,
        LNAME,
        PATHNAME,
      })
      console.log("there and back?", result)
      if (result == "success") {
        this.setState(successState)
      } else {
        this.setState(errorState)
      }
    } catch (e) {
      console.log("error: ", e)
      console.log("error: ", e.message)
      this.setState(errorState)
    }
  }

  render() {
    console.log("state: ", this.state)
    return (
      <SubscriptionFormEl>
        <div className="form-wrapper">
          <form onSubmit={this.subscribeUser}>
            <input
              type="text"
              value={this.state.subscribeFormData.FNAME}
              onChange={e => this.onInputChange("FNAME", e.target.value)}
              placeholder="First Name"
            />
            <input
              type="email"
              value={this.state.subscribeFormData.email}
              onChange={e => this.onInputChange("email", e.target.value)}
              placeholder="Email"
            />

            <button type="submit">Sign Me Up!</button>
            <div className="small-info-text error">{this.state.formError}</div>
            <div className="small-info-text success">
              {this.state.formSuccess}
            </div>
          </form>
        </div>
      </SubscriptionFormEl>
    )
  }
}

const SubscriptionFormEl = styled.div`
  /* justify-items: center;
  display: grid; */
  .form-wrapper {
    padding: 0 20px;

    form {
      margin-bottom: 0px;
      input[type="text"],
      input[type="email"] {
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

      .small-info-text {
        font-weight: bold;
        font-size: 1.2rem;

        &.success {
          color: #63e463;
        }

        &.error {
          color: #f14848;
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

        &:hover {
          background: #fb77ad;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          color: #eee;
        }
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
        input[type="text"],
        input[type="email"] {
          width: 100%;
          margin-right: 0;
          margin-bottom: 1rem;
        }
      }
    }
  }
`

export default SubscriptionForm
