import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Map from 'components/map';

const Location = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutLocation {
              edges {
                node {
                  id
                  heading
                  description
                  location {
                    src
                    width
                    height
                    frameborder
                    allowfullscreen
                    tableindex
                  }
                }
              }
            }
          }
    `);

    const content = data.allContentfulLayoutLocation.edges.find(edge => edge.node.id === contentModuleId);

    return (
        <section id="location" className="bg-gray">
            <div>
                <h2 className="text-center section__title center-align">{ content.node.heading }</h2>
                <h3 className="text-center">{ content.node.description }</h3>
            </div>
            <div className="center">
                <Map feature={ content.node.location }/>
            </div>
        </section>
    );
};

Location.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Location;