import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = () => {
  return;
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary w-50" type="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
