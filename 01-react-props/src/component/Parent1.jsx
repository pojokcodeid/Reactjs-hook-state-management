import Parent2 from "./Parent2.jsx";
import PropTypes from "prop-types";

function Parent1({ nama }) {
  return (
    <h1>
      <div>Parent1</div>
      <Parent2 nama={nama} />
    </h1>
  );
}

Parent1.propTypes = {
  nama: PropTypes.string,
};

export default Parent1;
