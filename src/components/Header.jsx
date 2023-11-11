import PropTypes from 'prop-types';

const Header = ({shopName}) => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>{shopName}</h2>
            </div>
        </div>
    );
};

Header.propTypes = {
    shopName: PropTypes.string.isRequired
};

export {Header};