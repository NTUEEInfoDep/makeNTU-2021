import React from 'react';
import Img from 'gatsby-image';

const SponsorItem = ({ href, fluid }) => (
    <td width="20%">
        <a href={ href }>
            <Img fluid={ fluid }/>
        </a>
    </td>
);

const SponsorTable = ({ feature }) => {
    if (feature.length > 4) {
        let k = [];
        while (feature.length > 0){
            const f = feature.splice(0, 4);
            k.push(f);
        }
        console.log(k);
        return(
            <table width="70%" className="mx-auto">
                <tbody>
                    {k.map((index) => (
                        <tr>
                            {index.map((sponsor) => (
                                <SponsorItem href={ sponsor.description } fluid={ sponsor.fluid } />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
    else {
        return(
            <table width="70%" className="mx-auto">
                <tbody>
                    <tr>
                        { feature.map((sponsor) => (
                        <SponsorItem href={ sponsor.description } fluid={ sponsor.fluid } />
                        ))}
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default SponsorTable;