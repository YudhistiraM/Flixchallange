import React, { Component } from 'react';
import { Card, CardDeck, Pagination } from 'react-bootstrap';

class MovieList extends Component {
  render() {
    return (
      <div className="container">
      <br/>
      <h4>Film Indonesia</h4>
      <br/>
      <div className="row">
      <CardDeck>
      <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
      </Card.Text>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      This card has supporting text below as a natural lead-in to additional
      content.{' '}
      </Card.Text>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This card has even longer content than the first to
      show that equal height action.
      </Card.Text>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
      </Card>
      </CardDeck>
      </div>
      <div>
      <br/>
      <br/>
      <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
      </Pagination>
      </div>
      </div>

    );
  }
}

export default MovieList;
