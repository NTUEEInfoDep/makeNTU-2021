import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";

import "../assets/css/components/postPreview.css";

const postPreview = ({ post }) => (
    <div className="preview">
        <Link to={`/post/${post.slug}`}>
            <Img alt="" fluid={post.heroImage.fluid} />
            <h3 className="service__title" style={{ marginTop: "0.5rem", marginBottom: 0, fontWeight: 500 }}>
                {post.title}
            </h3>
            <p className="font-medium" style={{ color: "gray" }}>
                {post.publishDate}
            </p>
            <div
                dangerouslySetInnerHTML={{
                    __html: post.description.content,
                }}
            />
        </Link>
        {post.tags &&
            post.tags.map((tag) => (
                <p className="tag" key={tag}>
                    {tag}
                </p>
            ))}
    </div>
);

postPreview.propTypes = {
    post: PropTypes.object.isRequired,
};

export default postPreview;
