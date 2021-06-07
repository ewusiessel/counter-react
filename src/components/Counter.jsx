import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

class Counter extends Component {
  state = {
    number: 0
  };

  increase = () => this.setState({ number: this.state.number + 1 });
  decrease = () => this.setState({ number: this.state.number - 1 });

  render() {
    return (
      <div>
        <Center>
          <button onClick={this.increase} type="button" class="btn btn-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
          <Title>Counter {this.state.number}</Title>

          <button onClick={this.decrease} type="button" class="btn btn-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              fill="currentColor"
              class="bi bi-dash-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </button>
        </Center>
      </div>
    );
  }
}

export default Counter;

const Title = styled.h1`
  color: red;
  font-size: 50px;
  padding: 20px;
  text-align: center;
`;

const Center = styled.section`
  text-align: center;
  padding-top: 30vh;
`;
