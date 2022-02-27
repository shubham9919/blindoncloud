import React from 'react'
import PromotionsTile from '../PromotionsTile/PromotionsTile'
import Styles from '../../styles/PromotionTiles.module.css'


function PromotionTiles({ promotions }) {
    return (
        <>
            {
            promotions? 
            (<div className={Styles.promotions}>
                <div className={Styles.tiles}>
                    {promotions? promotions.map(adv => <PromotionsTile key={adv.No} advProps={adv}></PromotionsTile>): null}
                </div>
            </div>) : null        
            }
            </>
    )
}

export default PromotionTiles

