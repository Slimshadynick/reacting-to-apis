import React from "react";
import { Component } from "react";
import FilmCard from "./FilmCard.jsx";
import fetch from "isomorphic-fetch";
import "es6-promise";
import { Container, Row, Button } from "react-bootstrap";
import Person from "./Person";

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmCards: [],
      load: false,
      isFilm: false,
    };
  }
  fetchFilms() {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => res.json())
      .then((obj) => {
        for (let i = 0; i < Object.keys(obj).length; i++) {
          this.setState({
            filmCards: [
              ...this.state.filmCards,
              {
                title: obj[i].title,
                desc: obj[i].description,
              },
            ],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  fetchPeople() {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((res) => res.json())
      .then((obj) => {
        for (let i = 0; i < Object.keys(obj).length; i++) {
          this.setState({
            filmCards: [
              ...this.state.filmCards,
              {
                name: obj[i].name,
                age: obj[i].age,
                eyes: obj[i].eye_color,
                hair: obj[i].hair_color,
                gender: obj[i].gender,
              },
            ],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    if (this.state.load) {
      let childCompo;
      if (this.state.isFilm) {
        childCompo = this.state.filmCards.map((obj, index) => {
          return <FilmCard title={obj.title} desc={obj.desc} key={index} />;
        });
      } else {
        childCompo = this.state.filmCards.map((obj, index) => {
          return (
            <Person
              name={obj.name}
              age={obj.age}
              eyes={obj.eyes}
              hair={obj.hair}
              gender={obj.gender}
            />
          );
        });
      }
      return (
        <Container fluid>
          <Row>{childCompo}</Row>
        </Container>
      );
    } else {
      return (
        <div>
          <Button
            onClick={(e) => {
              this.setState({
                load: true,
                isFilm: true,
              });
              this.fetchFilms();
            }}
          >
            Load Films!
          </Button>
          <Button
            onClick={(e) => {
              this.setState({
                load: true,
              });
              this.fetchPeople();
            }}
          >
            Load People!
          </Button>
        </div>
      );
    }
  }
}

export { Films };
