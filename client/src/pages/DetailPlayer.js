import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";

export default class DetailPlayer extends Component {
    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Detail Player</h1>
            </Container>
        )
    }
}