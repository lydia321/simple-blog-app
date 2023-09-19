import Comments from './comment';
import Like from './likeButton';

export default function Card({Title,Summary,Date,Author}){
    return(
        <div class = "card">
            <p>{Summary ? Summary : 'No Summary provided'}</p>
        <div class = 'container'>
            <h4>{Title}</h4>
            <h5>{Author}</h5>
            <h6>{Date}</h6>
            <h7><Comments/></h7>
            <h8><Like/></h8>
        </div>
        </div>
    );
}