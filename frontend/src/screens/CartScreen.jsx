import React from "react";
import {
  Col,
  ListGroup,
  Form,
  Image,
  ListGroupItem,
  Row,
  Button,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../slices/CartSlice";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkHandler=()=>{
navigate('/login?redirect=/shipping')
  }


  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: "20px" }}>Shoping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            <h3>
              Cart is empty.
              <Link to={"/"}>let's go shoping</Link>
            </h3>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem key={item._id}>
                <Row>
                  <Col md={"3"}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={"3"}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={"2"}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={"2"}>
                    <Button type="button" variant="outline-danger" onClick={()=>removeFromCartHandler(item._id)}>
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={"4"}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h3>
              ${" "}
              {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
            </ListGroupItem>

            <ListGroupItem>
              <Button type="button" disabled={cartItems.length === 0} onClick={checkHandler}>
                Proceed to Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
