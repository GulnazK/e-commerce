import React from 'react';
import Proptypes from 'prop-types'

const Rating = ({rating,color}) => {
    return (
        <div style={{color}} className="rating">
            <i className={
                rating > 0.5 ? "fas fa-star" : rating > 0 ? "fas fa-star-half-alt" : "far fa-star"
            }/>
            <i className={
                rating > 1.5 ? "fas fa-star" : rating > 1 ? "fas fa-star-half-alt" : "far fa-star"
            }/>
            <i className={
                rating > 2.5 ? "fas fa-star" : rating > 2 ? "fas fa-star-half-alt" : "far fa-star"
            }/>
            <i className={
                rating > 3.5 ? "fas fa-star" : rating > 3 ? "fas fa-star-half-alt" : "far fa-star"
            }/>
            <i className={
                rating > 4.5 ? "fas fa-star" : rating > 4 ? "fas fa-star-half-alt" : "far fa-star"
            }/>
        </div>
    );
};

export default Rating;
Rating.defaultProps = {
    color: 'gold'
}

Rating.propTypes = {
    color: Proptypes.string.isRequired
}