import React, { useContext } from 'react'
import { useReducer } from 'react'
import { signupcontext } from '../context/signup/contextsignup'


const formData = {
  email: "",
  password: "",
  city: "",
  zip: "",
  address: "",
  skills:[]
}
const form_reducer = (form_state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...form_state, [action.payload.name]: action.payload.value }
    //name main field type yani email wagera arahi hogi from array
    // value main user jo likh raha hoga wo


    case "TOGGLE_SKILLCHANGE":
      const skills = form_state.skills.includes(action.payload.skill) // jo khali skills hain unmain new skill jo ayi wo hai ya nh
        ? form_state.skills.filter((s) => s !== action.payload.skill)
        : [...form_state.skills, action.payload.skill];   //agar nahi ha to 

      return { ...form_state, skills };


    default:
      return form_state;
  }
}



export default function Signup() {
  const [form_state, form_dispatch] = useReducer(form_reducer, formData)
const {state,dispatch}=useContext(signupcontext)
  const handlechange = (e) => {
    form_dispatch({
      type: "UPDATE_FIELD",
      payload: {
        name: e.target.name,    //name unique hota for each field is se pata chalega k konsi field ha jaisy email,password etc, KEY
        value: e.target.value   //wo value milegi jo user likh raha hoga real time main
      }
    })
  }
  // onchange pe yeh chalega
  const handleskillchange=(e)=>{        //e se wo change agaya
    form_dispatch({
      type:"TOGGLE_SKILLCHANGE",
      payload:{
        skill:e.target.value              //value se pata chalega k kya ha html css ya js
      }
  
    })
  }
  const handlesubmit = (e) => {
    e.preventDefault();   //purana na chala jaye isliye
      dispatch({       //submit pe dipatch ho rahi hamari state ki sari values
      type: "SIGNUP_USER",
      payload:form_state
    });
    console.log(form_state);
    
  }
  
  return (
    <>

      <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="email" onChange={handlechange} id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" name="password" className="form-control" onChange={handlechange} id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text" onChange={handlechange}
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" onChange={handlechange} name="city" id="inputCity" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" name='zip' className="form-control" onChange={handlechange} id="inputZip" />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id='html'
            value="HTML"
            checked={form_state.skills.includes("HTML")}
            onChange={handleskillchange}
          />
          <label htmlFor="HTML" className="form-check-label">HTML</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id='js'
            value="JS"
            name="JS"
            checked={form_state.skills.includes("JS")}
            onChange={handleskillchange}
          />
          <label htmlFor="js" className="form-check-label">JS</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id='css'
            value="CSS"
            name="CSS"
            checked={form_state.skills.includes("CSS")}
            onChange={handleskillchange}
          />
          <label htmlFor="css" className="form-check-label">CSS</label>
        </div>



        <div className="col-12">
          <button type="submit" onClick={handlesubmit} className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      </div>



    </>
  )
}
