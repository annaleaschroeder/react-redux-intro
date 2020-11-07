import React from "react";
import ListElement from "./ListElement";
import { connect } from "react-redux";

export default function List({ pokemons }) {
  return (
    <div>
      <ul>
        {pokemons.map(({ name }, index) => (
          <ListElement key={index} value={name} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
  };
}

export const ConnectedList = connect(mapStateToProps)(List);
