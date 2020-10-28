// import react
import React, { useState, useEffect } from 'react';
// import card skeleton
import CardStructure from './CardStructure/index.jsx';
// import card skeleton
import CardSkeleton from './CardSkeleton/index.jsx';
// import styles
import './styles.styl';

const Card = ({ image, title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = () => setTimeout(() => {
      setLoading(false);
    }, 2000);

    timer()

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return loading ? <CardSkeleton/> : <CardStructure image={image} title={title}/>;
};

export default Card;
