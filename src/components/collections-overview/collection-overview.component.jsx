import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../preview-collection/collection-preview'

import './collection-overview.styles.scss'

const collectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...othersCollectionProps }) => (
            <CollectionPreview key={id} {...othersCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(collectionsOverview)