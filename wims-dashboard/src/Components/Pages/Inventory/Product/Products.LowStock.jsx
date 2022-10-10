import React from 'react';
import {Panel, Carousel} from "rsuite";

function ProductsLowStockComponent(){
    return(
        <Carousel autoplay className="custom-slider" style={{height: 100}}>
            <Panel>
                <div
                    style={{
                    width: 60,
                    height: 60,
                    float: 'left',
                    marginRight: 10,
                    background: '#eee'
                }}
                > 
                    <img src='/Assets/Products/BLabel.jpg' style={{ width: 60 }} />
                </div>
                    <p>Black Label</p>
            </Panel>
            <Panel>
                <div
                    style={{
                    width: 60,
                    height: 60,
                    float: 'left',
                    marginRight: 10,
                    background: '#eee'
                }}
                > 
                    <img src='/Assets/Products/CLite.jfif' style={{ width: 60 }} />
                </div>
                    <p>Castle Lite</p>
            </Panel>
        </Carousel>
    )
}

export default ProductsLowStockComponent