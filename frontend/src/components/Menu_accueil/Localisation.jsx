import React from "react";
import PropTypes from "prop-types";
import "../../style/_navigationCategories.scss";
import { NavLink } from "react-router-dom";

function Localisation({ donnees, setDept }) {
  const handleDepaChange = (e) => {
    setDept(e.target.id);
  };
  const handleLoc = () => {
    let locData = [];

    locData = donnees.map((e) => {
      return e.fields.departement;
    });

    const filtLocData = locData.filter((e, i) => {
      return locData.indexOf(e) === i;
    });

    return filtLocData.map((e) => {
      return e === undefined ? (
        <NavLink to="/Page2">
          <div
            className="navigation-categories"
            key="Sans Categorie"
            id="Sans Categorie"
            onClick={(el) => handleDepaChange(el)}
            onKeyDown={(el) => handleDepaChange(el)}
            role="presentation"
          >
            Sans Categorie
          </div>
        </NavLink>
      ) : (
        <NavLink to="/Page2">
          <div
            className="navigation-categories"
            key={e}
            id={e}
            onClick={(el) => handleDepaChange(el)}
            onKeyDown={(el) => handleDepaChange(el)}
            role="presentation"
          >
            {e}
          </div>
        </NavLink>
      );
    });
  };

  return <div onChange={(e) => handleDepaChange(e)}>{handleLoc()}</div>;
}

export default Localisation;

Localisation.propTypes = {
  donnees: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  setDept: PropTypes.string.isRequired,
};
