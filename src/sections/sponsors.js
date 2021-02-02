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
        <section id="sponsors" className="bg-gray">
            <div className="container mx-auto">
                <h2 className="text-center section__title">{ content.node.heading }</h2>
            </div>
            <div
                className="mx-auto sponsors__image-wrap"
                /*data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="500"*/
            >
                <a href={ content.node.href }>
                    <Img fluid={ content.node.image.fluid } />
                </a>
            </div>
        </section>
    );
};

Sponsors.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Sponsors;