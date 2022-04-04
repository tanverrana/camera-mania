import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="question-answer">
            <h1>Question & Answer</h1>
            <div>
                <h2>What is the purpose of Context API?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the volition to"prop drilling"or moving props from grandparent to child to parent, and so on. Environment is also touted as an easier, lighter approach to state operation using Redux. </p>
            </div>
            <div>
                <h2>What is semantic tag?</h2>
                <p>A semantic element easily describes its meaning to both the cybersurfer and the inventor. Exemplifications of non-semantic rudiments and-Tells nothing about its content.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Exemplifications of semantic rudiments  and- Easily defines its content. </p>
            </div>
            <div>
                <h2>Difference between Inline and Inline blocks element?</h2>
                <p>Compared to display inline, the major difference is that inline- block allows to set a range and height on the element. Also, with display inline, top and nethermost perimeters & paddings aren't admired, and with display inline- block they are.
                    Now, the difference between display inline- block and display block is that, with display block, a line break happens after the element, so a block element does n’t sit coming to other rudiments.
                </p>
            </div>
        </div>
    );
};

export default Blogs;