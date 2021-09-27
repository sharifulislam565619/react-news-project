import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Newspaper = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-09-27&sortBy=popularity&apiKey=22078eb1d7814cf0aa3a473d715b1cec")
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        articles.map(article => <Grid item xs={2} sm={4} md={4} >
                            <Cart article={article}></Cart>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default Newspaper;