import React from 'react';
import { Leader as ILeader } from '../shared/leaders';
import { Media } from 'reactstrap';
import { BASE_URL } from '../shared/baseUrl';

interface LeaderProps {
    leader: ILeader;
}

export const Leader: React.SFC<LeaderProps> = ({ leader }) => {
    return (
        <Media className="mt-5">
            <Media left>
                <img src={`${BASE_URL}${leader.image}`} alt={leader.name} />
            </Media>
            <Media body className="ml-4">
                <Media heading className="mb-3">
                    <h5>{leader.name}</h5>
                    <h6>{leader.designation}</h6>
                </Media>
                {leader.description}
            </Media>
        </Media>
    );
};

export default Leader;
