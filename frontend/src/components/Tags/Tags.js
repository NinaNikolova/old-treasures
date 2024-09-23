import React from 'react';
import { Link } from 'react-router-dom';
import classes from './tags.module.css';

export default function Tags({ tags, forAntiquePage }) {
    return (
        <div
            className={classes.container}
            style={{
                justifyContent: forAntiquePage ? 'start' : 'center',
            }}
        >
            {tags?.map(tag => (
                <Link key={tag.name} to={`/tag/${tag.name}`}>
                    {tag.name}
                    {!forAntiquePage && `(${tag.count})`}
                </Link>
            ))}
        </div>
    );
}