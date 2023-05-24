import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";


export default function App() {
 


 const { register, handleSubmit } = useForm();
 const onFormSubmit = data => console.log(data);
 const onErrors = errors => console.error(errors);




  return (
    <div style={{textAlign:'center'}}>
      <Container className="mt-5 pt-5">
        <h1 className="text-center mb-5">Form</h1>


<form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
  <label htmlFor="">Name</label>
  <input type="text" Name="Name" {...register('Name',{ required: "Name is required" })} id="" />
  <br />
  <label htmlFor="">Address</label>
  <input type="text" name="Address" {...register('Address',{ required: "Address is required" })} id="" />
  <br />
  <label htmlFor="">College</label>
  <input type="text" name="College" {...register('College',{ required: "College is required" })} id="" />
  <br />
  <label htmlFor="">Phone</label>
  <input type="text" name="Phone" {...register('Phone',{ required: "Phone is required" })} id="" />
  <br />
  <button type="submit">Submit</button>
</form>




      </Container>
    </div>
   );
}

