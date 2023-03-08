import React from 'react';
import {Article} from "./components/Article.js";

export const NewsList = (props) => {
return (
    <section>
        {props.articlesList.articles.map((singleArticle) => {
            return (
                <Article key={singleArticle.id} articleDetails={singleArticle} />
            )
            }
        )}
    </section>
);
};

