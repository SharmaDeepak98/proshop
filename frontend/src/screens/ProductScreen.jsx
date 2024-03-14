import { useParams } from "react-router-dom";
import {
  Card,
  ListGroup,
  Row,
  Col,
  Image,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating.jsx";
import { Link } from "react-router-dom";
import { useGetProductDetailQuery } from "../slices/ProductApiSlice.js";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";

const ProductScreen = () => {

  const { id:productId } = useParams();

  const {data:product,isLoading,error}=useGetProductDetailQuery(productId);

  return (
    <>
      <Link to="/">
        <Button className="btn btn-light my-3">Go Back</Button>
      </Link>

{isLoading ? (
<div><Loader /></div>
) : error ? (<Message variant="danger">{error?.data?.message || error.error}</Message>) : (

      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: $ {product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              Price: <strong>$ {product.price}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Status:{" "}
              <strong>
                {" "}
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}{" "}
              </strong>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
)}




    </>
  );
};

export default ProductScreen;
