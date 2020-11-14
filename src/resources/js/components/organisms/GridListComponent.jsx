import React from "react";
import ReactDOM from "react-dom";
import { GridList, GridListTile } from "@material-ui/core";

function GridListComponent() {
  const tileData = [
    {
      image: "../storage/images/image1.jpeg",
      cols: 1,
    },
    {
      image: "../storage/images/image2.jpg",
      cols: 1,
    },
    {
      image: "../storage/images/image3.jpeg",
      cols: 1,
    },
    {
      image: "../storage/images/image4.jpg",
      cols: 1,
    },
    {
      image: "../storage/images/image5.jpg",
      cols: 2,
    },
    {
      image: "../storage/images/image5.jpg",
      cols: 2,
    },
  ];

  return (
    <GridList cellHeight={160} cols={3}>
      {tileData.map((tile) => (
        <GridListTile key={tile.image} cols={tile.cols || 1}>
          <img src={tile.image} />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default GridListComponent;

if (document.getElementById("product__collection-wrapper")) {
  ReactDOM.render(
    <GridListComponent />,
    document.getElementById("product__collection-wrapper"),
  );
}
