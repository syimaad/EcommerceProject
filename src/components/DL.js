import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function DL() {
  const navigate = useNavigate();
  let login = (values) => {
    let email = values.email;
    let password = values.password;

    axios.get("http://localhost:8086/dealer/ListDealer").then((response)=>{
        let users=response.data;
        let validUser=users.filter((users)=> {
            return users.email === email && users.password === password;
        });
        if(validUser.length>0){
            alert("success");
            navigate("/Dprofile");

        }
        else{
            alert("login failed");
        }
    });
}


  let loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is mandatory"),
    password: Yup.string()
      .required("password is mandatory"),
  });
  return (
    <div className="login-container d-flex flex-column align-items-center ">
      <h1 className="heading">LOGIN</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => login(e)}
        validationSchema={loginSchema}
      >
        {(props) => (
          <Form>
            <div className="field-container">
              <label className="form-label">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email">
                {(error) => <p className="error-info">{error}</p>}
              </ErrorMessage>
            </div>
            <div className="field-container">
              <label className="form-label">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password">
                {(error) => <p className="error-info">{error}</p>}
              </ErrorMessage>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-primary login-btn">      
                Login            
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p className="new">
        New User?<button className="sbutton"> <Link to="/signup">Signup</Link></button>
      </p>
    </div>
  );
}

export default DL;