import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTitlesFromAPI } from '../actions/titles';
import { Link } from 'react-router-dom';
import { sendVoteToAPI } from "../actions/posts"


function EntryTitles() {

    const titles = useSelector(st => st.titles);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(function() {
        async function fetchTitle() {
            await dispatch(fetchTitlesFromAPI());
            setIsLoading(false);
        }

        if(isLoading) {
            fetchTitle();
        }
    }, [dispatch, isLoading]);

    if (isLoading) return <b>Loading...</b>

    if (!isLoading && titles.length === 0) {
        return <b>Please add a post.</b>;
    }

    function vote(id, voteType) {
        dispatch(sendVoteToAPI(id, voteType))
    }

    return (
        <div className="EntryTitles">
            <div className="row">
                {titles.map(title => (
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-title'>
                                <Link to={`/${title.id}`}>{title.title}</Link>
                            </div>
                            <div className='card-text'>
                                <p>{title.description}</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <p>{title.votes} votes</p>
                            <i className="fas fa-thumbs-up text-sucess" 
                                onClick={evt => vote(title.id, "up")} />
                            <i className="fas fa-thumbs-down text-danger" 
                                onClick={evt => vote(title.id, "down")} />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )

}

export default EntryTitles;