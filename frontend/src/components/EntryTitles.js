import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTitlesFromAPI } from '../actions/titles';


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
                    </div>
                ))}

            </div>
        </div>
    )

}

export default EntryTitles;