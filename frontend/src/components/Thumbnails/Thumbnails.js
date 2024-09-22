import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import StarRating from '../StarRating/StarRating';
import classes from './thumbnails.module.css';
export default function Thumbnails({ antiques }) {
    return (
        <ul className={classes.list}>
            {antiques.map(antique => (
                <li key={antique.id}>
                    <Link to={`/antique/${antique.id}`}>
                        <img
                            className={classes.image}
                            src={`/images/${antique.imageUrl}`}
                            alt={antique.name}
                        />

                        <div className={classes.content}>
                            <div className={classes.name}>{antique.name}</div>
                            <span
                                className={`${classes.favorite} ${antique.favorite ? '' : classes.not
                                    }`}
                            >
                                ❤
                            </span>
                            <div className={classes.stars}>
                                <StarRating stars={antique.stars} />
                            </div>
                            <div className={classes.product_item_footer}>
                                <div className={classes.origins}>
                                    {antique.origins.map(origin => (
                                        <span key={origin}>{origin}</span>
                                    ))}
                                </div>
                                <div className={classes.cook_time}>
                                    <span>⌛</span>
                                    {antique.time}
                                </div>
                            </div>
                            <div className={classes.price}>
                                <Price price={antique.price} />
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
