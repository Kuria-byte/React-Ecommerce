import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectioinForPreview } from '../../Redux/shop/shop.selector'

import CollectionPreview from '../Collection/collection-preview'

import './collectionOverview.scss'


export const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>

            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectioinForPreview
})



export default connect(mapStateToProps)(CollectionOverview)
