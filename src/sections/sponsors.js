import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';

const Sponsors = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulLayoutSponsors {
            edges {
                node {
                id
                heading
                href
                image {
                    fluid(quality: 100) {
                        ...GatsbyContentfulFluid
                    }
                }
                }
            }
            }
        }  
    `);

     const content = data.allContentfulLayoutSponsors.edges.find(edge => edge.node.id === contentModuleId);

    return (
        <section id="sponsors" className="section mx-auto">
            <div className="container mx-auto">
                <div className="mx-auto">
                    <h2 className="section__title text-center mb-16">{ content.node.heading }</h2>
                </div>
                <div className="sponsors__image sponsors__image-wrap mx-auto">
                    <a href={ content.node.href }>
                        <Img fluid={ content.node.image.fluid } />
                    </a>
                </div>
            </div>
        </section>
    );
};

Sponsors.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Sponsors;