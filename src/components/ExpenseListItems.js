import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from 'numeral';

const ExpenseListItem = props => {
  return (
    <div>
      <Link to={`/edit/${props.id}`}>
        <p>{props.description} </p>
      </Link>
      <p>
        {numeral(props.amount).format('$0,0.00')} -
        {moment(props.createdAt).format("MMMM Do, YYYY")}
      </p>
    </div>
  );
};

export default ExpenseListItem;
