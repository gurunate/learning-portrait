import React from 'react';

export type GreetProps = {
    name: string;
};

/**
 * @param {GreetProps} props
 * @returns {JSX.Element}
 */
const Greet: React.FC<GreetProps> = ({ name }: GreetProps): JSX.Element => {
    const now = new Date();
    var hours = now.getHours();
    var greet;

    if (hours < 12) {
        greet = 'Good Morning';
    } else if (hours >= 12 && hours <= 17) {
        greet = 'Good Afternoon';
    } else if (hours >= 17 && hours <= 24) {
        greet = 'Good Evening';
    }

    return (
        <>
            {greet}, {name}
        </>
    );
};

export default Greet;
