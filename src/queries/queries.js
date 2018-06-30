import { gql } from 'apollo-boost';

const getFireByMonth = gql`
    query($month: String!){
        forestbymonth(month:$month){
        X
        Y
        temp
        month
        }
    }
`;

export { getFireByMonth };
