import PropTypes from "prop-types";
function Parent2({ nama }) {
  return <div>Parent2 {nama}</div>;
}

Parent2.propTypes = {
  nama: PropTypes.string,
};

export default Parent2;
